import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchDialogs, fetchMessage, fetchNewMessage } from '../redux/slices/message';
import { RootState, useAppDispatch } from '../redux/store';
import { selectIsAuth } from '../redux/slices/auth';
import { useSelector } from 'react-redux';
import axios from '../axios';

import deleteImgAvatar from '../assets/img/deletedImgAvatar.jpg';
import noAvatar from '../assets/img/noavatar.jpg';
import { NotFound } from './NotFound';
import { TextField } from '@mui/material';
import { fetchUserById } from '../redux/slices/users';
import { SkeletonsMessage } from '../components/Skeletons/SkeletonsMessage';

export const Message: React.FC = () => {
  const [tabIndex1, setTabIndex1] = React.useState('0');
  const [text, setTextValue] = React.useState('');
  const isAuth = useSelector(selectIsAuth);
  const { messages } = useSelector((state: RootState) => state.messages);
  const { dialogs } = useSelector((state: RootState) => state.messages);
  const allInfoMe = useSelector((state: RootState) => state.auth.data);
  const { user } = useSelector((state: RootState) => state.users);
  const isUserLoading = user.status === 'loading';
  const isInfoMeLoading = user.status === 'loading';

  const onSubmit = async () => {
    try {
      const fields = {
        text,
      };

      if (fields.text === '') {
        alert('Сообщение не должно быть пустым');
        return;
      }
      if (id) {
        await axios.post(`/dialogs/${id}`, fields);
        dispatch(fetchDialogs());
        dispatch(fetchMessage(id));
        setTextValue('');
      }
    } catch (err) {
      console.warn(err);
      alert('Ошибка при отправки сообщения');
    }
  };

  const dispatch = useAppDispatch();

  const isMessagesLoading = messages.status === 'loading';
  const { id } = useParams();

  React.useEffect(() => {
    const div = document.querySelector('.message__listWrapper');

    if (div) {
      div.scrollTo({
        top: 9999,
      });
    }
  }, [messages]);
  React.useEffect(() => {
    document.title = 'Мессенджер';
    // console.log('я cмонтировался');
    const interval = setInterval(() => {
      if (id) {
        dispatch(fetchNewMessage(id));
        // console.log('я отработал', id);
      } else {
        // console.log('я не отработал, нет id', id);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      // console.log('я размонтировался');
    };
  }, []);

  React.useEffect(() => {
    if (!id) {
      setTabIndex1('0');
    }
    if (id) {
      dispatch(fetchMessage(id));
      dispatch(fetchUserById(id));
      setTabIndex1('1');
    }
  }, [id]);

  const moveToAllDialogs = () => {
    setTabIndex1('0');
  };

  if (!id && dialogs.items.length === 0) {
    return <SkeletonsMessage />;
  }

  // if (!isAuth) {
  //   return <SkeletonsMessage />;
  // }

  if (id && user.status === 'error') {
    return <NotFound />;
  }
  return (
    <div className="message">
      <div className="friends__container">
        <Link to={`/im`}>
          <div
            className={`message__tab ${tabIndex1 === '0' ? 'active' : ''}`}
            onClick={() => moveToAllDialogs()}>
            Диалоги
          </div>
        </Link>
        <div className={`message__tab ${tabIndex1 === '1' ? 'active' : ''}`}>Просмотр диалогов</div>
      </div>
      <div className="line"></div>
      <div className="friends__containerSearch">
        {!isMessagesLoading && messages.items.length !== 0 ? (
          <div className="message__dialogWithWhom">
            {allInfoMe._id === messages.items[0].recipient._id
              ? messages.items[0].sender.fullName
              : messages.items[0].recipient.fullName}
          </div>
        ) : (
          user.items && <div className="message__dialogWithWhom">{user.items.fullName}</div>
        )}
      </div>
      <div className="line-gray"></div>
      <div>
        <>
          {!isMessagesLoading && id && messages.items.length === 0 ? (
            <div className="message__listWrapper">
              У вас еще нет истории сообщений. Отправьте сообщение, будьте первым!
            </div>
          ) : (
            <div className="message__listWrapper">
              {isMessagesLoading ? (
                <div>Загрузка сообщений...</div>
              ) : (
                messages.items.map((obj, index) => {
                  return (
                    <div key={index} className="message__listMessages">
                      <img
                        className="message__avatar"
                        src={
                          obj.sender.avatarUrl !== ''
                            ? `${process.env.REACT_APP_API_URL}${obj.sender.avatarUrl}`
                            : noAvatar
                        }
                        onError={(e) => {
                          const { target } = e;
                          if (target instanceof HTMLImageElement) {
                            target.onerror = null;
                            target.src = deleteImgAvatar;
                          }
                        }}
                        alt="avatar"></img>
                      <div className="message__flexWrapper">
                        <div className="friends__name">{obj.sender.fullName}</div>
                        <div>{obj.text}</div>
                      </div>
                      <div>{obj.date}</div>
                    </div>
                  );
                })
              )}
            </div>
          )}
          <div className="line-gray"></div>
          <div className="message__sendMessageWrapper">
            {!isInfoMeLoading && allInfoMe && (
              <img
                className="message__avatarSmall"
                src={
                  allInfoMe.avatarUrl !== ''
                    ? `${process.env.REACT_APP_API_URL}${allInfoMe.avatarUrl}`
                    : noAvatar
                }
                onError={(e) => {
                  const { target } = e;
                  if (target instanceof HTMLImageElement) {
                    target.onerror = null;
                    target.src = deleteImgAvatar;
                  }
                }}
                alt="avatar"></img>
            )}

            <div className="message__inputWrapper">
              <TextField
                value={text}
                onChange={(e) => setTextValue(e.target.value)}
                multiline
                rows={2}
                // error={Boolean(errors.fullName?.message)}
                // helperText={errors.fullName?.message}
                // {...register('fullName', { required: 'Что у вас нового?' })}
                type="text"
                className="search__searchField"
                placeholder="Введите Ваше сообщение..."
                fullWidth
              />
              <button className="message__BtnBlueSubmit" onClick={onSubmit}>
                Отправить
              </button>
            </div>

            {!isUserLoading && user.items && (
              <img
                className="message__avatarSmall"
                src={
                  user.items.avatarUrl !== ''
                    ? `${process.env.REACT_APP_API_URL}${user.items.avatarUrl}`
                    : noAvatar
                }
                onError={(e) => {
                  const { target } = e;
                  if (target instanceof HTMLImageElement) {
                    target.onerror = null;
                    target.src = deleteImgAvatar;
                  }
                }}
                alt="avatar"></img>
            )}
          </div>
        </>
      </div>
    </div>
  );
};
