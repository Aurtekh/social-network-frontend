import React from 'react';
import styles from './Post.module.scss';
import postImg from '../../assets/img/testPostImg.jpg';
import { PostSkeleton } from './Skeleton';
import { useParams } from 'react-router-dom';

export const Post = ({ id, text, user, createdAt, imageUrl, like, isLoading }) => {
  const params = useParams();
  const pathname = window.location.pathname;

  if (isLoading) {
    return <PostSkeleton />;
  }
  const unicLike = new Set(like);
  const checkUser = params?.id?.replace(/id\s?/, '') === user._id;

  if (checkUser || pathname === '/news') {
    return (
      <>
        <div className={styles.root}>
          <img
            className={styles.imgAvatar}
            src={user.avatarUrl || '/noavatar.jpg'}
            alt="avatar"></img>
          <div className={styles.wrapper}>
            <div className={styles.username}>{user.fullName}</div>
            <div className={styles.text}>{text}</div>
            {imageUrl && <img className={styles.imgPost} src={imageUrl} alt="postImg"></img>}
            <div className={styles.wrapperInfoPost}>
              <div className={styles.textGray}>
                {createdAt.split('').slice(0, 16).join('').replace('T', ' ')}
              </div>
              <div className={styles.wrapperInfoPost}>
                {/* <div className={styles.comment}>Комментировать</div> */}
                <div className={styles.Like}>
                  <span className={styles.count}>{unicLike.size}</span> мне нравится
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
