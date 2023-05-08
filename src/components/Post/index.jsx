import React from 'react';
import styles from './Post.module.scss';
import avatar from '../../assets/img/avatarMe.jpg';
import postImg from '../../assets/img/testPostImg.jpg';

export const Post = ({ id, text, user, createdAt, viewsCount, commentsCount }) => {
  return (
    <div className={styles.root}>
      <img className={styles.imgAvatar} src={avatar} alt="avatar"></img>
      <div className={styles.wrapper}>
        <div className={styles.username}>{user}</div>
        <div className={styles.text}>{text}</div>
        <img className={styles.imgPost} src={postImg} alt="postImg"></img>
        <div className={styles.wrapperInfoPost}>
          <div className={styles.textGray}>{createdAt}</div>
          <div className={styles.wrapperInfoPost}>
            <div className={styles.comment}>Комментировать</div>
            <div className={styles.Like}>
              <span className={styles.count}>{commentsCount}</span> мне нравится
            </div>
          </div>
        </div>
        {/* <div>Оставить комментарий</div> */}
      </div>
    </div>
  );
};
