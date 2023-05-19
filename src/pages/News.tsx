import React from 'react';
import { Post } from '../components/Post';
import { useSelector } from 'react-redux';
import { fetchPosts, fetchSortPosts } from '../redux/slices/posts';
import { RootState, useAppDispatch } from '../redux/store';
import { selectIsAuth } from '../redux/slices/auth';
import { PostSkeleton } from '../components/Post/Skeleton';

export const News: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const [navIndex, setNavIndex] = React.useState('0');
  const [postSortIndex, setpostSortIndex] = React.useState('0');
  const dispatch = useAppDispatch();
  const { posts } = useSelector((state: RootState) => state.posts);
  const isPostsLoading = posts.status === 'loading';

  React.useEffect(() => {
    document.title = 'Новости';
  }, []);

  React.useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    dispatch(fetchSortPosts(`${navIndex}${postSortIndex}`));
  }, [navIndex, postSortIndex]);

  if (!isAuth) {
    return <>загрузка1</>;
  }
  if (!posts) {
    return <>загрузка1</>;
  }
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
            <PostSkeleton key={index} />
            <div className="line-grayMargin"></div>
          </div>
        ) : (
          <div className="news__containerList" key={obj._id}>
            <Post
              _id={obj._id}
              text={obj.text}
              user={obj.user}
              imageUrl={obj.imageUrl}
              createdAt={obj.createdAt}
              like={obj.like}
            />
          </div>
        ),
      )}
    </div>
  );
};
