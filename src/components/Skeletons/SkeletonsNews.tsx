import React from 'react';
import { Skeleton } from '@mui/material';
import { PostSkeleton } from '../Post/Skeleton';

export const SkeletonsNews: React.FC = () => {
  return (
    <div className="news">
      <div className="news__container">
        <div className="news__tab">Новости</div>
      </div>
      <div className="line"></div>
      <div className="news__containerNav">
        <Skeleton animation="wave" variant="rectangular" width="15%" height="50%" />
      </div>
      <div className="line-gray"></div>
      <div className="news__wrapperFlex">
        <Skeleton animation="wave" variant="rectangular" width="25%" height="100%" />
        <div>|</div>
        <Skeleton animation="wave" variant="rectangular" width="25%" height="100%" />
      </div>
      <div className="line-gray"></div>

      {[...Array(5)].map((obj, index) => (
        <div className="news__containerList" key={index}>
          <PostSkeleton key={index} />
          <div className="line-grayMargin"></div>
        </div>
      ))}
    </div>
  );
};
