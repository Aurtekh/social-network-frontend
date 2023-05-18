// import React from 'react';
// import styles from './Post.module.scss';
// import { Link, useParams } from 'react-router-dom';
// import { fetchLikePosts } from '../../redux/slices/posts';
// import { UserData } from '../../redux/slices/auth';
// import { useAppDispatch } from '../../redux/store';
// import deleteImgPost from '../../assets/img/deletedImgPost.jpg';
// import deleteImgAvatar from '../../assets/img/deletedImgAvatar.jpg';
// import noAvatar from '../../assets/img/noavatar.jpg';

// import { Skeleton } from '@mui/material';
// type PropsPost = {
//   _id: string;
//   text: string;
//   like: [string];
//   user: UserData;
//   imageUrl: string;
//   createdAt: string;
// };
// export const Post: React.FC = () => {
// export const Post: React.FC<PropsPost> = ({ _id, text, user, createdAt, imageUrl, like }) => {
// const params = useParams();
// const dispatch = useAppDispatch();
// const pathname = window.location.pathname;
// const unicLike = new Set(like);
// const [likeCount, setLikeCount] = React.useState(unicLike.size);
// const checkUser = params.id
//   ? (params.id as string).replace(/id\s?/, '') === (user as UserData)._id
//   : null;

// const likeThisPost = () => {
//   if (_id) {
//     dispatch(fetchLikePosts(_id));
//   }
//   if (user) {
//     unicLike.add(user._id);
//   }
//   setLikeCount(unicLike.size);
// };

// if (checkUser || pathname === '/news') {
//   return (
//     <>
//       <div className={styles.root}>
//         {user ? (
//           <img
//             className={styles.imgAvatar}
//             src={user.avatarUrl ? `${process.env.REACT_APP_API_URL}${user.avatarUrl}` : noAvatar}
//             onError={(e) => {
//               const { target } = e;
//               if (target instanceof HTMLImageElement) {
//                 target.onerror = null;
//                 target.src = deleteImgAvatar;
//               }
//             }}
//             alt="avatar"></img>
//         ) : (
//           <Skeleton />
//         )}
//         <div className={styles.wrapper}>
//           {pathname === '/news' ? (
//             <Link to={`/id${user._id}`}>
//               <div className={styles.username}>{user.fullName}</div>
//             </Link>
//           ) : (
//             <div className={styles.username}>{user.fullName}</div>
//           )}
//           <div className={styles.text}>{text}</div>
//           {imageUrl && (
//             <img
//               className={styles.imgPost}
//               src={`${process.env.REACT_APP_API_URL}${imageUrl}`}
//               onError={(e) => {
//                 const { target } = e;
//                 if (target instanceof HTMLImageElement) {
//                   target.onerror = null;
//                   target.src = deleteImgPost;
//                 }
//               }}
//               alt="postImg"></img>
//           )}
//           <div className={styles.wrapperInfoPost}>
//             <div className={styles.textGray}>
//               {createdAt.split('').slice(0, 16).join('').replace('T', ' ') || 0}
//             </div>
//             <div className={styles.wrapperInfoPost}>
//               {/* <div className={styles.comment}>Комментировать</div> */}
//               <div className={styles.Like} onClick={likeThisPost}>
//                 <span className={styles.count}>{likeCount}</span> мне нравится
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="line-grayMargin"></div>
//     </>
//   );
// } else {
//   return <></>;
// }

//   return <>Компонент Post</>;
// };
export {};
