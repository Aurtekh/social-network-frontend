import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonFriendsPage = (props) => (
  <ContentLoader
    speed={2}
    width={469}
    height={170}
    viewBox="0 0 469 170"
    backgroundColor="#e3e3e3"
    foregroundColor="#ededed"
    {...props}>
    <rect x="324" y="14" rx="0" ry="0" width="102" height="14" />
    <rect x="166" y="13" rx="0" ry="0" width="115" height="14" />
    <rect x="166" y="41" rx="0" ry="0" width="115" height="14" />
    <rect x="2" y="9" rx="0" ry="0" width="150" height="150" />
  </ContentLoader>
);

export default SkeletonFriendsPage;
