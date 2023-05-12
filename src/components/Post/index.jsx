import React from 'react';
import styles from './Post.module.scss';
import { PostSkeleton } from './Skeleton';
import { useParams } from 'react-router-dom';
import { fetchLikePosts, fetchPosts } from '../../redux/slices/posts';
import { useDispatch } from 'react-redux';

export const Post = ({ id, text, user, createdAt, imageUrl, like, isLoading }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const pathname = window.location.pathname;
  const unicLike = new Set(like);
  const [likeCount, setLikeCount] = React.useState(unicLike.size);

  const likeThisPost = () => {
    dispatch(fetchLikePosts(id));
    unicLike.add(user._id);
    setLikeCount(unicLike.size);
  };
  if (isLoading) {
    return <PostSkeleton />;
  }

  const checkUser = params?.id?.replace(/id\s?/, '') === user._id;

  if (checkUser || pathname === '/news') {
    return (
      <>
        <div className={styles.root}>
          <img
            className={styles.imgAvatar}
            src={
              user.avatarUrl !== ''
                ? `${process.env.REACT_APP_API_URL}${user.avatarUrl}`
                : '/noavatar.jpg'
            }
            // src={user.avatarUrl !== '' ? `http://localhost:4444${user.avatarUrl}` : '/noavatar.jpg'}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `/deletedImgAvatar.jpg`;
            }}
            alt="avatar"></img>
          <div className={styles.wrapper}>
            <div className={styles.username}>{user.fullName}</div>
            <div className={styles.text}>{text}</div>
            {imageUrl && (
              <img
                className={styles.imgPost}
                src={imageUrl}
                onError={(e) => {
                  e.target.onerror = null;
                  // e.target.src = `${process.env.REACT_APP_API_URL}/deletedImgPost.jpg`;
                  e.target.src = `/deletedImgPost.jpg`;
                }}
                alt="postImg"></img>
            )}
            <div className={styles.wrapperInfoPost}>
              <div className={styles.textGray}>
                {createdAt.split('').slice(0, 16).join('').replace('T', ' ')}
              </div>
              <div className={styles.wrapperInfoPost}>
                {/* <div className={styles.comment}>Комментировать</div> */}
                <div className={styles.Like} onClick={likeThisPost}>
                  <span className={styles.count}>{likeCount}</span> мне нравится
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-grayMargin"></div>
      </>
    );
  }
};
