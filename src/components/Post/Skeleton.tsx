import ContentLoader from 'react-content-loader';

export const PostSkeleton: React.FC = (props: any) => (
  <ContentLoader
    speed={2}
    width={400}
    height={379}
    viewBox="0 0 400 379"
    backgroundColor="#e3e3e3"
    foregroundColor="#ededed"
    {...props}>
    <rect x="5" y="11" rx="0" ry="0" width="67" height="67" />
    <rect x="78" y="77" rx="0" ry="0" width="323" height="299" />
    <rect x="78" y="41" rx="0" ry="0" width="323" height="22" />
    <rect x="78" y="11" rx="0" ry="0" width="323" height="15" />
  </ContentLoader>
);
