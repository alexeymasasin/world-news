import Skeleton from '../components/Skeleton/Skeleton.jsx';

function componentWithSkeleton(Component, type, blocksCount) {
  return function componentWithSkeleton(props) {
    const {loading, ...restProps} = props;
    if (loading) {
      return <Skeleton type={type} blocksCount={blocksCount}/>;
    }

    return <Component {...restProps} />;
  };
};

export default componentWithSkeleton;