import React from 'react';
import avatar from '../assets/img/avatarMe.jpg';
import { Post } from '../components/Post';

const Home = () => {
  const posts = [
    {
      id: '01',
      text: 'Мой первый пост 5 раз',
      user: 'Даниил Ермолович',
      createdAt: '25 фев в 19:38',
      viewsCount: '10',
      commentsCount: '0',
    },
    {
      id: '01',
      text: 'Мой первый пост 5 раз',
      user: 'Даниил Ермолович',
      createdAt: '25 фев в 19:38',
      viewsCount: '10',
      commentsCount: '0',
    },
    {
      id: '01',
      text: 'Мой первый пост 5 раз',
      user: 'Даниил Ермолович',
      createdAt: '25 фев в 19:38',
      viewsCount: '10',
      commentsCount: '0',
    },
    {
      id: '01',
      text: 'Мой первый пост 5 раз',
      user: 'Даниил Ермолович',
      createdAt: '25 фев в 19:38',
      viewsCount: '10',
      commentsCount: '0',
    },
    {
      id: '01',
      text: 'Мой первый пост 5 раз',
      user: 'Даниил Ермолович',
      createdAt: '25 фев в 19:38',
      viewsCount: '10',
      commentsCount: '0',
    },
  ];

  const friends = [
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
    <div className="home">
      <div className="home__headerName">Даниил Ермолович</div>
      <div className="home__wrapperGrid">
        <div className="home__wrapperFlex__left">
          <div className="home__wrapperAvatar">
            <img className="home__avatar" src={avatar} alt="avatar"></img>
          </div>
          <button className="home__sendMessage">Написать сообщение</button>
          <button className="home__addFriend">Добавить в друзья</button>
          <div className="home__friends">Друзья</div>
          <div className="home__friends__count">10 друзей</div>
          <div className="home__friends__listWrapper">
            {friends.map((obj, index) => {
              return (
                <div className="home__friends__listWrapper__container">
                  <img className="home__friends__avatar" src={obj.avatar} alt="avatar"></img>
                  <div>{obj.username}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home__wrapperFlex__right">
          <div className="home__name">Даниил Ермолович</div>
          <div className="home__status">Укажите статус</div>
          <div className="home__line"></div>
          <div className="home__wrapperInfo">
            <div className="home__aboutMe">День рождения:</div>
            <div className="home__aboutMeInfo">19.10.1997</div>
            <div className="home__aboutMe">Город:</div>
            <div className="home__aboutMeInfo">Армавир</div>
            <div className="home__aboutMe">Язык:</div>
            <div className="home__aboutMeInfo">Русский</div>
            <div className="home__aboutMe">Вуз:</div>
            <div className="home__aboutMeInfo">ИТА ЮФУ (бывш. ТТИ ЮФУ)</div>
          </div>
          <div className="home__photo">
            <div className="home__photo__count">1 фотография</div>
            <div className="home__photo__openAll">все</div>
          </div>
          <div className="home__photoListWrapper">
            <img className="home__photoListWrapper__list" src={avatar} alt="Name111"></img>
            <img className="home__photoListWrapper__list" src={avatar} alt="Name111"></img>
            <img className="home__photoListWrapper__list" src={avatar} alt="Name111"></img>
            <img className="home__photoListWrapper__list" src={avatar} alt="Name111"></img>
          </div>
          <div className="home__posts">
            <div className="home__posts__count">{posts.length} записей</div>
          </div>
          <div>
            <input type="text" placeholder="Что у вас нового?" />
            <div>Отправить</div>
            <div>Значок фото</div>
          </div>
          {posts.map((obj, index) => {
            return (
              <Post
                key={index}
                id={obj.id}
                text={obj.text}
                user={obj.user}
                createdAt={obj.createdAt}
                viewsCount={obj.viewsCount}
                commentsCount={obj.commentsCount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
