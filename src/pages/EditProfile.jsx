import React from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../axios';
import { fetchAuthMe } from '../redux/slices/auth';

export const EditProfile = () => {
  const dispatch = useDispatch();
  const infoAboutMe = useSelector((state) => state.auth.data);
  const inputFileRef = React.useRef(null);

  const [fullName, setFullName] = React.useState(infoAboutMe?.fullName || '');
  const [status, setStatus] = React.useState(infoAboutMe?.status || '');
  const [birthday, setBirthday] = React.useState(infoAboutMe?.birthday || '');
  const [city, setCity] = React.useState(infoAboutMe?.city || '');
  const [language, setLanguage] = React.useState(infoAboutMe?.language || '');
  const [university, setuniversity] = React.useState(infoAboutMe?.university || '');
  const [avatarUrl, setAvatarUrl] = React.useState(infoAboutMe?.avatarUrl || '');

  const [isLoading, setIsLoading] = React.useState(false);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      formData.append('image', event.target.files[0]);
      const { data } = await axios.post('/upload', formData);
      setAvatarUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при загрузке файла');
    }
  };

  const onClickRemoveImage = () => {
    setAvatarUrl('');
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      const fields = {
        fullName,
        status,
        birthday,
        city,
        language,
        university,
        avatarUrl,
      };

      if (fields.fullName === '') {
        alert('Имя не должно быть пустым');
        return;
      }
      const { data } = await axios.patch(`/me/${infoAboutMe._id}`, fields);
      onClickRemoveImage();
      dispatch(fetchAuthMe());
    } catch (err) {
      console.warn(err);
      alert('Ошибка при создании статьи');
    }
  };

  React.useEffect(() => {
    document.title = 'Редактирование моей страницы';
  }, []);

  return (
    <div className="editProfile">
      <div className="home__headerName">Основная информация</div>
      <div className="home__wrapperFlex__right" style={{ padding: '15px' }}>
        <div className="home__name">Укажите имя и фамилию:</div>
        <TextField
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          size="small"
          margin="dense"
          type="text"
          placeholder="Ваше имя и фамилия"
        />
        <div className="home__name">Укажите статус:</div>
        <TextField
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          size="small"
          margin="dense"
          type="text"
          placeholder="Укажите статус"
        />
        <div className="line-gray"></div>
        <div className="home__wrapperInfo">
          <div className="home__name">День рождения:</div>
          <TextField
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            size="small"
            margin="dense"
            type="text"
            placeholder="День рождения"
          />
          <div className="home__name">Город:</div>
          <TextField
            value={city}
            onChange={(e) => setCity(e.target.value)}
            size="small"
            margin="dense"
            type="text"
            placeholder="Укажите ваш город"
          />
          <div className="home__name">Язык:</div>
          <TextField
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            size="small"
            margin="dense"
            type="text"
            placeholder="Укажите ваш язык"
          />
          <div className="home__name">Вуз:</div>
          <TextField
            value={university}
            onChange={(e) => setuniversity(e.target.value)}
            size="small"
            margin="dense"
            type="text"
            placeholder="Укажите ваш вуз"
          />
        </div>
      </div>
      <div className="editProfile__flexWrapper">
        <div className="textBtnBlue" onClick={() => inputFileRef.current.click()}>
          Добавить фото
        </div>
        {avatarUrl && (
          <div className="textBtnBlue" onClick={onClickRemoveImage}>
            Удалить фото
          </div>
        )}
      </div>
      <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
      {avatarUrl && (
        // <img className="imgUpload" src={`http://localhost:4444${avatarUrl}`} alt="Uploaded" />
        <img
          className="imgUpload"
          src={`${process.env.REACT_APP_API_URL}${avatarUrl}`}
          alt="Uploaded"
        />
      )}
      <div className="line-gray"></div>

      <button type="submit" className="textBtnBlue" onClick={onSubmit}>
        Сохранить изменения
      </button>
    </div>
  );
};
