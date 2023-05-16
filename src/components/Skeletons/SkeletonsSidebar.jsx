import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonsSidebar = (props) => (
  <ContentLoader
    speed={2}
    width={120}
    height={140}
    viewBox="0 0 120 140"
    backgroundColor="#e3e3e3"
    foregroundColor="#ededed"
    {...props}>
    <rect x="0" y="13" rx="0" ry="0" width="117" height="18" />
    <rect x="0" y="38" rx="0" ry="0" width="117" height="18" />
    <rect x="0" y="63" rx="0" ry="0" width="117" height="18" />
    <rect x="0" y="88" rx="0" ry="0" width="117" height="18" />
    <rect x="0" y="113" rx="0" ry="0" width="117" height="18" />
  </ContentLoader>
);

export default SkeletonsSidebar;
