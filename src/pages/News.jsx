import React from 'react';
import { Post } from '../components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/slices/posts';

export const News = () => {
  const [navIndex, setNavIndex] = React.useState('0');
  const [postSortIndex, setpostSortIndex] = React.useState('0');
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const isPostsLoading = posts.status === 'loading';

  React.useEffect(() => {
    document.title = 'Новости';
  }, []);

  React.useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line
  }, []);

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

      {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
        isPostsLoading ? (
          <div className="news__containerList" key={index}>
            <Post key={index} isLoading={true} />
            <div className="line-grayMargin"></div>
          </div>
        ) : (
          <div className="news__containerList" key={obj._id}>
            <Post
              id={obj._id}
              text={obj.text}
              user={obj.user}
              // imageUrl={obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ''}
              imageUrl={obj.imageUrl ? `${process.env.REACT_APP_API_URL}${obj.imageUrl}` : ''}
              createdAt={obj.createdAt}
              like={obj.like}
            />
          </div>
        ),
      )}
    </div>
  );
};
