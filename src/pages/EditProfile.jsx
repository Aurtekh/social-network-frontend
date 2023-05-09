import React from 'react';

export const EditProfile = () => {
  return (
    <div className="editProfile">
      <div className="home__headerName">Основная информация</div>
      <div className="home__wrapperFlex__right" style={{ padding: '15px' }}>
        <div className="home__name">Укажите имя и фамилию:</div>
        <input type="text" placeholder="Ваше имя и фамилия" />
        <div className="home__name">Укажите статус:</div>
        <input type="text" placeholder="Укажите статус" />
        <div className="line-gray"></div>
        <div className="home__wrapperInfo">
          <div className="home__name">День рождения:</div>
          <input type="text" placeholder="День рождения" />
          <div className="home__name">Город:</div>
          <input type="text" placeholder="Укажите ваш город" />
          <div className="home__name">Язык:</div>
          <input type="text" placeholder="Укажите ваш язык" />
          <div className="home__name">Вуз:</div>
          <input type="text" placeholder="Укажите ваш вуз" />
        </div>
      </div>
    </div>
  );
};
