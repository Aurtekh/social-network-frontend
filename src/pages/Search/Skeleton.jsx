import React from 'react';
import ContentLoader from 'react-content-loader';

export const SearchSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={630}
    height={120}
    viewBox="0 0 630 120"
    backgroundColor="#e3e3e3"
    foregroundColor="#ededed"
    {...props}>
    <rect x="16" y="11" rx="0" ry="0" width="100" height="100" />
    <rect x="440" y="14" rx="0" ry="0" width="150" height="20" />
    <rect x="136" y="13" rx="0" ry="0" width="90" height="15" />
    <rect x="137" y="37" rx="0" ry="0" width="90" height="15" />
  </ContentLoader>
);
