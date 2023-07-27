import React from 'react';
import { Skeleton } from '@mui/material';

export const SkeletonsMessage = () => {
  return (
    <div className="message">
      <div className="friends__container">
        <div className="message__tab active">Диалоги</div>
        <div className="message__tab">Просмотр диалогов</div>
      </div>
      <div className="line"></div>
      <div className="friends__containerSearch">
        <Skeleton animation="wave" variant="rectangular" width="25%" height="50%" />
      </div>
      <div className="line-gray"></div>
      <div>
        {[...Array(5)].map((obj, index) => {
          return (
            <div className="message__dialogBtn" key={index}>
              <div className="message__wrapper">
                <Skeleton animation="wave" variant="rectangular" width={70} height={70} />
                <Skeleton animation="wave" variant="rectangular" width="100%" height="40%" />
                <Skeleton animation="wave" variant="rectangular" width="40%" height="100%" />
              </div>
              <div className="line-gray"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
