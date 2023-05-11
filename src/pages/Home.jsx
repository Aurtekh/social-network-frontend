import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../assets/img/avatarMe.jpg';
import { Post } from '../components/Post';
import { fetchPosts } from '../redux/slices/posts';
import { useParams } from 'react-router-dom';
import { AddPost } from '../components/AddPost';

const Home = () => {
  const params = useParams();
  const allInfoMe = useSelector((state) => state.auth.data);

  const idOtherPeople = params?.id?.replace(/id\s?/, '');
  const checkUser = idOtherPeople === allInfoMe?._id;
  const checkFriends = allInfoMe?.friends?.find((item) => item === idOtherPeople);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const isPostsLoading = posts.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    document.title = 'Даниил Ермолович';
  }, []);

  const friends = [
    {
      username: 'Даниил Ермолович',
      avatar: avatar,
    },
  ];

  return (
    <div className="home">
      <div className="home__headerName">{allInfoMe?.fullName}</div>
      <div className="home__wrapperGrid">
        <div className="home__wrapperFlex__left">
          <div className="home__wrapperAvatar">
            <img
              className="home__avatar"
              src={allInfoMe?.avatarUrl || '/noavatar.jpg'}
              alt="avatar"></img>
          </div>
          {!checkUser && (
            <>
              <button className="home__sendMessage">Написать сообщение</button>
              {checkFriends ? (
                <button className="home__addFriend">Удалить из друзей</button>
              ) : (
                <button className="home__addFriend">Добавить в друзья</button>
              )}
            </>
          )}

          <div className="home__friends">Друзья</div>
          <div className="home__friends__count">{allInfoMe?.friends?.length} друзей</div>
          <div className="home__friends__listWrapper">
            {friends.map((obj, index) => {
              return (
                <div className="home__friends__listWrapper__container" key={index}>
                  <img className="home__friends__avatar" src={obj.avatar} alt="avatar"></img>
                  <div>{obj.username}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home__wrapperFlex__right">
          <div className="home__name">{allInfoMe?.fullName}</div>
          <div className="home__status">{allInfoMe?.status}</div>
          <div className="line-gray"></div>
          <div className="home__wrapperInfo">
            <div className="home__aboutMe">День рождения:</div>
            <div className="home__aboutMeInfo">{allInfoMe?.birthday}</div>
            <div className="home__aboutMe">Город:</div>
            <div className="home__aboutMeInfo">{allInfoMe?.city}</div>
            <div className="home__aboutMe">Язык:</div>
            <div className="home__aboutMeInfo">{allInfoMe?.language}</div>
            <div className="home__aboutMe">Вуз:</div>
            <div className="home__aboutMeInfo">{allInfoMe?.university}</div>
          </div>
          <div className="home__photo">
            <div className="home__photo__count">1 фотография</div>
            <div className="home__photo__openAll">все</div>
          </div>
          <div className="home__photoListWrapper">
            <img
              className="home__photoListWrapper__list"
              src={allInfoMe?.avatarUrl || '/noavatar.jpg'}
              alt={allInfoMe?.avatarUrl || '/noavatar.jpg'}></img>
          </div>
          <div className="home__posts">
            <div className="home__posts__count">{posts.length} записей</div>
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
