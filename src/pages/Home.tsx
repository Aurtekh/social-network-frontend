// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Post } from '../components/Post';
// import { fetchPosts } from '../redux/slices/posts';
// import { Link, useParams } from 'react-router-dom';
// import { AddPost } from '../components/AddPost';
// import {
//   fetchUserAddFriends,
//   fetchUserById,
//   fetchUserDeleteFriends,
//   fetchUserFriends,
// } from '../redux/slices/users';
// import { NotFound } from './NotFound';
// import { fetchAuthMe, selectIsAuth } from '../redux/slices/auth';
// import { RootState, useAppDispatch } from '../redux/store';
// import { PostSkeleton } from '../components/Post/Skeleton';

// import deleteImgAvatar from '../assets/img/deletedImgAvatar.jpg';
// import noAvatar from '../assets/img/noavatar.jpg';

export const Home: React.FC = () => {
  // const params = useParams();
  // const isAuth = useSelector(selectIsAuth);
  // const allInfoMe = useSelector((state: RootState) => state.auth.data);
  // const { user } = useSelector((state: RootState) => state.users);
  // const idOtherPeople = params.id ? params.id.replace(/id\s?/, '') : '';
  // const checkUser = idOtherPeople === allInfoMe._id;
  // const checkFriends = allInfoMe.friends.includes(idOtherPeople);

  // const dispatch = useAppDispatch();
  // const { posts } = useSelector((state: RootState) => state.posts);
  // const { userFriends } = useSelector((state: RootState) => state.users);
  // const isPostsLoading = posts.status === 'loading';

  // React.useEffect(() => {
  //   if (!isAuth) {
  //     dispatch(fetchAuthMe());
  //   }
  //   dispatch(fetchPosts());
  //   if (idOtherPeople) {
  //     dispatch(fetchUserById(idOtherPeople));
  //     dispatch(fetchUserFriends(idOtherPeople));
  //   }
  //   document.title = 'Моя страница';
  //   // eslint-disable-next-line
  // }, []);

  // React.useEffect(() => {
  //   dispatch(fetchAuthMe());

  //   if (idOtherPeople) {
  //     dispatch(fetchUserById(idOtherPeople));
  //     dispatch(fetchUserFriends(idOtherPeople));
  //   }
  // }, [idOtherPeople]);

  // const FriendDelOrAdd = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   if ((event.target as HTMLElement).innerHTML === 'Удалить из друзей') {
  //     dispatch(fetchUserDeleteFriends((event.target as HTMLElement).id));
  //     (event.target as HTMLElement).innerHTML = 'Добавить в друзья';
  //   } else if ((event.target as HTMLElement).innerHTML === 'Добавить в друзья') {
  //     dispatch(fetchUserAddFriends((event.target as HTMLElement).id));
  //     (event.target as HTMLElement).innerHTML = 'Удалить из друзей';
  //   }
  // };

  // if (!idOtherPeople || !user.items) {
  //   return <>загрузка</>;
  // }

  // if (user.status === 'error') {
  //   return <NotFound />;
  // }
  // if (!isAuth) {
  //   return <>загрузка1</>;
  // }
  // return (
  //   <div className="home">
  //     <div className="home__headerName">{user.items.fullName}</div>
  //     <div className="home__wrapperGrid">
  //       <div className="home__wrapperFlex__left">
  //         <div className="home__wrapperAvatar">
  //           <img
  //             className="home__avatar"
  //             src={
  //               user.items.avatarUrl !== ''
  //                 ? `${process.env.REACT_APP_API_URL}${user.items.avatarUrl}`
  //                 : noAvatar
  //             }
  //             onError={(e) => {
  //               const { target } = e;
  //               if (target instanceof HTMLImageElement) {
  //                 target.onerror = null;
  //                 target.src = deleteImgAvatar;
  //               }
  //             }}
  //             alt="avatar"></img>
  //         </div>
  //         {!checkUser && (
  //           <>
  //             <button className="home__sendMessage">Написать сообщение</button>
  //             {checkFriends ? (
  //               <button
  //                 className="home__addFriend"
  //                 onClick={(event) => FriendDelOrAdd(event)}
  //                 id={idOtherPeople}>
  //                 Удалить из друзей
  //               </button>
  //             ) : (
  //               <button
  //                 className="home__addFriend"
  //                 onClick={(event) => FriendDelOrAdd(event)}
  //                 id={idOtherPeople}>
  //                 Добавить в друзья
  //               </button>
  //             )}
  //           </>
  //         )}

  //         <div className="home__friends">Друзья</div>
  //         <div className="home__friends__count">{user.items.friends.length} друзей</div>
  //         <div className="home__friends__listWrapper">
  //           {userFriends.items.map((obj, index) => {
  //             return (
  //               <div className="home__friends__listWrapper__container" key={index}>
  //                 <img
  //                   className="home__friends__avatar"
  //                   src={
  //                     obj.avatarUrl !== ''
  //                       ? `${process.env.REACT_APP_API_URL}${obj.avatarUrl}`
  //                       : noAvatar
  //                   }
  //                   alt="avatar"
  //                   onError={(e) => {
  //                     const { target } = e;
  //                     if (target instanceof HTMLImageElement) {
  //                       target.onerror = null;
  //                       target.src = deleteImgAvatar;
  //                     }
  //                   }}></img>
  //                 <Link to={`/id${obj._id}`}>
  //                   <div>{obj.fullName}</div>
  //                 </Link>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //       <div className="home__wrapperFlex__right">
  //         <div className="home__name">{user.items.fullName}</div>
  //         <div className="home__status">{user.items.status}</div>
  //         <div className="line-gray"></div>
  //         <div className="home__wrapperInfo">
  //           <div className="home__aboutMe">День рождения:</div>
  //           <div className="home__aboutMeInfo">{user.items.birthday}</div>
  //           <div className="home__aboutMe">Город:</div>
  //           <div className="home__aboutMeInfo">{user.items.city}</div>
  //           <div className="home__aboutMe">Язык:</div>
  //           <div className="home__aboutMeInfo">{user.items.language}</div>
  //           <div className="home__aboutMe">Вуз:</div>
  //           <div className="home__aboutMeInfo">{user.items.university}</div>
  //         </div>
  //         <div className="home__photo">
  //           <div className="home__photo__count">1 фотография</div>
  //           <div className="home__photo__openAll">все</div>
  //         </div>
  //         <div className="home__photoListWrapper">
  //           <img
  //             className="home__photoListWrapper__list"
  //             src={
  //               user.items.avatarUrl !== ''
  //                 ? `${process.env.REACT_APP_API_URL}${user.items.avatarUrl}`
  //                 : noAvatar
  //             }
  //             onError={(e) => {
  //               const { target } = e;
  //               if (target instanceof HTMLImageElement) {
  //                 target.onerror = null;
  //                 target.src = deleteImgAvatar;
  //               }
  //             }}
  //             alt={user.items.avatarUrl || noAvatar}></img>
  //         </div>
  //         <div className="home__posts">
  //           <div className="home__posts__count">
  //             {posts.items.map((obj) => obj.user._id === idOtherPeople).filter(Boolean).length}{' '}
  //             записей
  //           </div>
  //         </div>
  //         {checkUser && <AddPost />}
  //         {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
  //           isPostsLoading ? (
  //             <PostSkeleton key={index} />
  //           ) : (
  //             <Post
  //               key={obj._id}
  //               _id={obj._id}
  //               text={obj.text}
  //               user={obj.user}
  //               imageUrl={obj.imageUrl ? `${process.env.REACT_APP_API_URL}${obj.imageUrl}` : ''}
  //               createdAt={obj.createdAt}
  //               like={obj.like}
  //             />
  //           ),
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
  return <>Страница Home</>;
};
