import Skeleton from '../components/Skeleton/Skeleton.jsx';

function componentWithSkeleton(Component, type, blocksCount, direction) {
  return function componentWithSkeleton(props) {
    const {loading, ...restProps} = props;
    if (loading) {
      return <Skeleton type={type} blocksCount={blocksCount}
                       direction={direction}/>;
    }

    return <Component {...restProps} />;
  };
};

export default componentWithSkeleton;