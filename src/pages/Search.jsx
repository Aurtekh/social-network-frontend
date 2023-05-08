import React from 'react';
import avatar from '../assets/img/avatarMe.jpg';

export const Search = () => {
  const peopleList = [
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
    <div className="search">
      <div className="search__container">
        <div className="search__nav">Люди</div>
      </div>
      <div className="line-gray"></div>
      <div className="search__peopleFound">Люди 11</div>
      <div className="line-gray"></div>
      <div className="search__container">
        <input className="search__searchField" placeholder="Начните вводить любое имя"></input>
      </div>
      <div className="line-gray"></div>
      <div>
        {peopleList.map((obj, index) => {
          return (
            <div key={index} style={{ width: '65%' }}>
              <div className="search__containerFriendList">
                <img className="search__avatar" src={obj.avatar} alt="avatar"></img>
                <div>
                  <div className="search__name">{obj.username}</div>
                  <div className="search__city">Армавир</div>
                </div>
                <button className="search__button">Добавить в друзья</button>
              </div>
              <div className="line-gray"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
