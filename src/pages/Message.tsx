import React from 'react';
import avatar from '../assets/img/avatarMe.jpg';
import { Link, useParams } from 'react-router-dom';

export const Message: React.FC = () => {
  const [tabIndex1, setTabIndex1] = React.useState('0');
  const { id } = useParams();

  React.useEffect(() => {
    document.title = 'Мессенджер';
  }, []);

  const messageList = [
    {
      username: 'Страница в процессе разработки',
      avatar: avatar,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 11',
    },
    {
      username: 'Страница в процессе разработки',
      avatar: avatar,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 22',
    },
    {
      username: 'Страница в процессе разработки',
      avatar: avatar,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 33',
    },
    {
      username: 'Страница в процессе разработки',
      avatar: avatar,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 44',
    },
    {
      username: 'Страница в процессе разработки',
      avatar: avatar,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 55',
    },
    {
      username: 'Страница в процессе разработки',
      avatar: avatar,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 66',
    },
  ];

  return (
    <div className="message">
      <div className="friends__container">
        <Link to={`/im`}>
          <div
            className={`message__tab ${tabIndex1 === '0' ? 'active' : ''}`}
            onClick={() => setTabIndex1('0')}>
            Диалоги
          </div>
        </Link>
        <div className={`message__tab ${tabIndex1 === '1' ? 'active' : ''}`}>Просмотр диалогов</div>
      </div>
      <div className="line"></div>
      <div className="friends__containerSearch">
        <input className="friends__search" placeholder="Начните вводить имя друга"></input>
        <button className="friends__button">Найти друзей</button>
      </div>
      <div className="line-gray"></div>
      <div>
        {!id ? (
          messageList.map((obj, index) => {
            return (
              <div className="message__dialogBtn" onClick={() => setTabIndex1('1')} key={index}>
                <Link to={`/im/${index}`}>
                  <div className="message__wrapper">
                    <img className="message__avatar" src={obj.avatar} alt="avatar"></img>
                    <div className="friends__name">{obj.username}</div>
                    <div className="message__text">{obj.text}</div>
                  </div>
                  <div className="line-gray"></div>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="message__dialogBtn">
            <div className="message__wrapper">
              <img className="message__avatar" src={messageList[+id].avatar} alt="avatar"></img>
              <div className="friends__name">{messageList[+id].username}</div>
              <div className="message__text">{messageList[+id].text}</div>
            </div>
            <div className="line-gray"></div>
          </div>
        )}
      </div>
    </div>
  );
};
