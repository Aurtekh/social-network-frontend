import React from 'react';
import { PostSkeleton } from '../Post/Skeleton';
import { Skeleton } from '@mui/material';

export const SkeletonsHome: React.FC = () => {
  return (
    <div className="home">
      <Skeleton animation="wave" variant="rectangular" height={34} />
      <div className="home__wrapperGrid">
        <div className="home__wrapperFlex__left">
          <div className="home__wrapperAvatar">
            <Skeleton animation="wave" variant="rectangular" width="100%" height="100%" />
          </div>
          <div className="home__friends">Друзья</div>
          <div className="home__friends__count">
            <Skeleton animation="wave" variant="rectangular" />
          </div>

          <div className="home__friends__listWrapper">
            {[...Array(6)].map((obj, index) => {
              return (
                <div className="home__friends__listWrapper__container" key={index}>
                  <Skeleton animation="wave" variant="rectangular" width={60} height={60} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="home__wrapperFlex__right">
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <div className="line-gray"></div>
          <div className="home__wrapperInfo">
            <div className="home__aboutMe">День рождения:</div>
            <Skeleton variant="text" />
            <div className="home__aboutMe">Город:</div>
            <Skeleton variant="text" />
            <div className="home__aboutMe">Язык:</div>
            <Skeleton variant="text" />
            <div className="home__aboutMe">Вуз:</div>
            <Skeleton variant="text" />
          </div>
          <Skeleton animation="wave" variant="rectangular" height={26} />
          <div className="home__photoListWrapper">
            <Skeleton animation="wave" variant="rectangular" width={100} height={134} />
          </div>
          <Skeleton animation="wave" variant="rectangular" height={26} />
          {[...Array(5)].map((obj, index) => (
            <PostSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
