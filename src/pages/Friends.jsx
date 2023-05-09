import React from 'react';
import avatar from '../assets/img/avatarMe.jpg';

const Friends = () => {
  const [tabIndex, setTabIndex] = React.useState('0');

  React.useEffect(() => {
    document.title = 'Друзья Даниила Ермоловича';
  }, []);

  const friendsList = [
    {
      username: 'Даниил Ермолович',
      avatar: avatar,
    },
    {
      username: 'Даниил Ермолович',
      avatar: avatar,
    },
    {
      username: 'Даниил Ермолович',
      avatar: avatar,
    },
    {
      username: 'Даниил Ермолович',
      avatar: avatar,
    },
    {
      username: 'Даниил Ермолович',
      avatar: avatar,
    },
    {
      username: 'Даниил Ермолович',
      avatar: avatar,
    },
  ];

  return (
    <div className="friends">
      <div className="friends__container">
        <div
          className={`friends__tab ${tabIndex === '0' ? 'active' : ''}`}
          onClick={() => setTabIndex('0')}>
          Все друзья 5
        </div>
        <div
          className={`friends__tab ${tabIndex === '1' ? 'active' : ''}`}
          onClick={() => setTabIndex('1')}>
          Заявки в друзья 1
        </div>
      </div>
      <div className="line"></div>
      <div className="friends__containerSearch">
        <input className="friends__search" placeholder="Начните вводить имя друга"></input>
        <button className="friends__button">Найти друзей</button>
      </div>
      <div className="line-gray"></div>
      <div className="friends__wrapper">
        <div>
          {friendsList.map((obj, index) => {
            return (
              <div key={index}>
                <div className="friends__containerFriendList">
                  <img className="friends__avatar" src={obj.avatar} alt="avatar"></img>
                  <div>
                    <div className="friends__name">{obj.username}</div>
                    <div>Написать сообщение</div>
                  </div>
                  <div>Удалить из друзей</div>
                </div>
                <div className="line-gray"></div>
              </div>
            );
          })}
        </div>
        <div className="friends__containerSort">
          <div className="friends__sortGender">Пол</div>
          <div className="friends__sortGender__radioBtn">
            <input type="radio" value="MALE" name="gender" /> Мужской
            <input type="radio" value="FEMALE" name="gender" /> Женский
            <input type="radio" value="ANY" name="gender" /> Любой
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
