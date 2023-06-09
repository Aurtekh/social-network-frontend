import React from 'react';
import TextField from '@mui/material/TextField';
import axios from '../axios';
import { fetchPosts } from '../redux/slices/posts';
import { useAppDispatch } from '../redux/store';

export const AddPost: React.FC = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = React.useState('');
  const inputFileRef = React.useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = React.useState('');

  async function handleChangeFile(event: React.ChangeEvent<HTMLInputElement>) {
    try {
      const formData = new FormData();
      if (event.target.files) {
        formData.append('image', event.target.files[0]);
      }
      const { data } = await axios.post('/upload', formData);
      console.log(event);
      setImageUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при загрузке файла');
    }
  }
  const onClickRemoveImage = () => {
    setImageUrl('');
  };

  const onSubmit = async () => {
    try {
      const fields = {
        imageUrl,
        text,
      };

      await axios.post('/posts', fields);
      dispatch(fetchPosts());
      setText('');
      onClickRemoveImage();
    } catch (err) {
      console.warn(err);
      alert('Ошибка при создании статьи');
    }
  };

  return (
    <div>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        margin="dense"
        multiline
        rows={2}
        // error={Boolean(errors.fullName?.message)}
        // helperText={errors.fullName?.message}
        // {...register('fullName', { required: 'Что у вас нового?' })}
        placeholder="Что у вас нового?"
        fullWidth
      />
      <div className="flexWrapper">
        <div className="textBtnBlue" onClick={onSubmit}>
          Отправить
        </div>
        {imageUrl && (
          <div className="textBtnBlue" onClick={onClickRemoveImage}>
            Удалить фото
          </div>
        )}
        <div
          onClick={() => (inputFileRef.current as HTMLInputElement).click()}
          className="textBtnBlue">
          Добавить фото
        </div>
      </div>
      <input ref={inputFileRef} type="file" onChange={(e) => handleChangeFile(e)} hidden />
      {imageUrl && (
        // <img className="imgUpload" src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
        <img
          className="imgUpload"
          src={`${process.env.REACT_APP_API_URL}${imageUrl}`}
          alt="Uploaded"
        />
      )}
      <div className="line-gray"></div>
    </div>
  );
};
