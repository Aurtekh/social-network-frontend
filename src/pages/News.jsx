import React from 'react';
import { Post } from '../components/Post';

export const News = () => {
  const [navIndex, setNavIndex] = React.useState('0');
  const [postSortIndex, setpostSortIndex] = React.useState('0');
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
  return (
    <div className="news">
      <div className="news__container">
        <div className="news__tab">Новости</div>
      </div>
      <div className="line"></div>
      <div className="news__containerNav">
        <div
          className={`news__nav ${navIndex === '0' ? 'active' : ''}`}
          onClick={() => setNavIndex('0')}>
          Всех
        </div>
        <div
          className={`news__nav ${navIndex === '1' ? 'active' : ''}`}
          onClick={() => setNavIndex('1')}>
          Друзей
        </div>
      </div>
      <div className="line-gray"></div>
      <div className="news__wrapperFlex">
        <div
          className={`news__postSort ${postSortIndex === '0' ? 'activeSort' : ''}`}
          onClick={() => setpostSortIndex('0')}>
          Показаны новые новости
        </div>
        <div>|</div>
        <div
          className={`news__postSort ${postSortIndex === '1' ? 'activeSort' : ''}`}
          onClick={() => setpostSortIndex('1')}>
          Показаны популярные новости
        </div>
      </div>
      <div className="line-gray"></div>

      {posts.map((obj, index) => {
        return (
          <div className="news__containerList">
            <Post
              key={index}
              id={obj.id}
              text={obj.text}
              user={obj.user}
              createdAt={obj.createdAt}
              viewsCount={obj.viewsCount}
              commentsCount={obj.commentsCount}
            />
            <div className="line-grayMargin"></div>
          </div>
        );
      })}
    </div>
  );
};
