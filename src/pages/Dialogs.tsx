import React from 'react';
import { Link } from 'react-router-dom';
import { fetchDialogs } from '../redux/slices/message';
import { RootState, useAppDispatch } from '../redux/store';
import { selectIsAuth } from '../redux/slices/auth';
import { useSelector } from 'react-redux';
import axios from '../axios';

import deleteImgAvatar from '../assets/img/deletedImgAvatar.jpg';
import noAvatar from '../assets/img/noavatar.jpg';
import { SkeletonsMessage } from '../components/Skeletons/SkeletonsMessage';

export const Dialogs: React.FC = () => {
  const [tabIndex1, setTabIndex1] = React.useState('0');
  const isAuth = useSelector(selectIsAuth);
  const { dialogs } = useSelector((state: RootState) => state.messages);
  const allInfoMe = useSelector((state: RootState) => state.auth.data);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    document.title = 'Мессенджер';
    dispatch(fetchDialogs());
  }, []);

  if (dialogs.items.length === 0) {
    return <SkeletonsMessage />;
  }

  if (!isAuth) {
    return <SkeletonsMessage />;
  }

  return (
    <div className="message">
      <div className="friends__container">
        <Link to={`/im`}>
          <div className={`message__tab ${tabIndex1 === '0' ? 'active' : ''}`}>Диалоги</div>
        </Link>
        <div className={`message__tab ${tabIndex1 === '1' ? 'active' : ''}`}>Просмотр диалогов</div>
      </div>
      <div className="line"></div>
      <div className="friends__containerSearch">
        <div>
          Ваши диалоги: <span className="boldBlut">{dialogs.items.length || 0}</span>
        </div>
      </div>
      <div className="line-gray"></div>
      <div>
        {dialogs.items.map((obj, index) => {
          return (
            <div className="message__dialogBtn" onClick={() => setTabIndex1('1')} key={index}>
              <Link
                to={`/im/${
                  allInfoMe._id === obj.recipient[0]._id ? obj.sender[0]._id : obj.recipient[0]._id
                }`}>
                <div className="message__wrapper">
                  <img
                    className="message__avatar"
                    src={
                      allInfoMe._id === obj.recipient[0]._id
                        ? obj.sender[0].avatarUrl !== ''
                          ? `${process.env.REACT_APP_API_URL}${obj.sender[0].avatarUrl}`
                          : noAvatar
                        : obj.recipient[0].avatarUrl !== ''
                        ? `${process.env.REACT_APP_API_URL}${obj.recipient[0].avatarUrl}`
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
                  <div className="friends__name">
                    {allInfoMe._id === obj.recipient[0]._id
                      ? obj.sender[0].fullName
                      : obj.recipient[0].fullName}
                  </div>
                  <div className="message__text">{obj.text}</div>
                </div>
                <div className="line-gray"></div>
              </Link>
            </div>
          );
        })}
        <div className="line-gray"></div>
      </div>
    </div>
  );
};
