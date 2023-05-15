import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../components/Post';
import { fetchPosts } from '../redux/slices/posts';
import { Link, useParams } from 'react-router-dom';
import { AddPost } from '../components/AddPost';
import {
  fetchUserAddFriends,
  fetchUserById,
  fetchUserDeleteFriends,
  fetchUserFriends,
} from '../redux/slices/users';
import { NotFound } from './NotFound';
import { fetchAuthMe } from '../redux/slices/auth';

const Home = () => {
  const params = useParams();
  const allInfoMe = useSelector((state) => state.auth.data);
  const { user } = useSelector((state) => state.users);
  const idOtherPeople = params?.id?.replace(/id\s?/, '');
  const checkUser = idOtherPeople === allInfoMe?._id;
  const checkFriends = allInfoMe?.friends?.includes(idOtherPeople);

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { userFriends } = useSelector((state) => state.users);
  const isPostsLoading = posts.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchAuthMe());
    dispatch(fetchPosts());
    dispatch(fetchUserById(idOtherPeople));
    dispatch(fetchUserFriends(idOtherPeople));
    document.title = 'Моя страница';
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
    dispatch(fetchUserById(idOtherPeople));
    dispatch(fetchUserFriends(idOtherPeople));
    document.title = user.items ? user.items.fullName : 'Моя страница';
    // eslint-disable-next-line
  }, [idOtherPeople]);

  const FriendDelOrAdd = (event) => {
    if (event.target.innerHTML === 'Удалить из друзей') {
      dispatch(fetchUserDeleteFriends(event.target.id));
      event.target.innerHTML = 'Добавить в друзья';
    } else if (event.target.innerHTML === 'Добавить в друзья') {
      dispatch(fetchUserAddFriends(event.target.id));
      event.target.innerHTML = 'Удалить из друзей';
    }
  };

  if (!user.items || user.status === 'error') {
    return <NotFound />;
  }
  return (
    <div className="home">
      <div className="home__headerName">{user.items?.fullName}</div>
      <div className="home__wrapperGrid">
        <div className="home__wrapperFlex__left">
          <div className="home__wrapperAvatar">
            <img
              className="home__avatar"
              src={
                user.items?.avatarUrl !== ''
                  ? `${process.env.REACT_APP_API_URL}${user.items?.avatarUrl}`
                  : '/noavatar.jpg'
              }
              // src={
              //   user.items?.avatarUrl !== ''
              //     ? `http://localhost:4444${user.items?.avatarUrl}`
              //     : '/noavatar.jpg'
              // }
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `/deletedImgAvatar.jpg`;
              }}
              alt="avatar"></img>
          </div>
          {!checkUser && (
            <>
              <button className="home__sendMessage">Написать сообщение</button>
              {checkFriends ? (
                <button className="home__addFriend" onClick={FriendDelOrAdd} id={idOtherPeople}>
                  Удалить из друзей
                </button>
              ) : (
                <button className="home__addFriend" onClick={FriendDelOrAdd} id={idOtherPeople}>
                  Добавить в друзья
                </button>
              )}
            </>
          )}

          <div className="home__friends">Друзья</div>
          <div className="home__friends__count">{user.items?.friends?.length} друзей</div>
          <div className="home__friends__listWrapper">
            {userFriends.items.map((obj, index) => {
              return (
                <div className="home__friends__listWrapper__container" key={index}>
                  <img
                    className="home__friends__avatar"
                    src={
                      obj.avatarUrl !== ''
                        ? `${process.env.REACT_APP_API_URL}${obj.avatarUrl}`
                        : '/noavatar.jpg'
                    }
                    // src={
                    //   obj.avatarUrl !== ''
                    //     ? `http://localhost:4444${obj.avatarUrl}`
                    //     : '/noavatar.jpg'
                    // }
                    alt="avatar"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `/deletedImgAvatar.jpg`;
                    }}></img>
                  <Link to={`/id${obj._id}`}>
                    <div>{obj.fullName}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home__wrapperFlex__right">
          <div className="home__name">{user.items?.fullName}</div>
          <div className="home__status">{user.items?.status}</div>
          <div className="line-gray"></div>
          <div className="home__wrapperInfo">
            <div className="home__aboutMe">День рождения:</div>
            <div className="home__aboutMeInfo">{user.items?.birthday}</div>
            <div className="home__aboutMe">Город:</div>
            <div className="home__aboutMeInfo">{user.items?.city}</div>
            <div className="home__aboutMe">Язык:</div>
            <div className="home__aboutMeInfo">{user.items?.language}</div>
            <div className="home__aboutMe">Вуз:</div>
            <div className="home__aboutMeInfo">{user.items?.university}</div>
          </div>
          <div className="home__photo">
            <div className="home__photo__count">1 фотография</div>
            <div className="home__photo__openAll">все</div>
          </div>
          <div className="home__photoListWrapper">
            <img
              className="home__photoListWrapper__list"
              src={
                user.items?.avatarUrl !== ''
                  ? `${process.env.REACT_APP_API_URL}${user.items?.avatarUrl}`
                  : '/noavatar.jpg'
              }
              // src={
              //   user.items?.avatarUrl !== ''
              //     ? `http://localhost:4444${user.items?.avatarUrl}`
              //     : '/noavatar.jpg'
              // }
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `/deletedImgAvatar.jpg`;
              }}
              alt={user.items?.avatarUrl || '/noavatar.jpg'}></img>
          </div>
          <div className="home__posts">
            <div className="home__posts__count">
              {posts?.items?.map((obj) => obj.user._id === idOtherPeople).filter(Boolean).length}{' '}
              записей
            </div>
          </div>
          {checkUser && <AddPost />}
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
            isPostsLoading ? (
              <Post key={index} isLoading={true} />
            ) : (
              <Post
                key={obj._id}
                id={obj._id}
                text={obj.text}
                user={obj.user}
                // imageUrl={obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ''}
                imageUrl={obj.imageUrl ? `${process.env.REACT_APP_API_URL}${obj.imageUrl}` : ''}
                createdAt={obj.createdAt}
                like={obj.like}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
