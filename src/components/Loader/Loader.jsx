import { Bars } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <Bars visible={true} width="200" color="MidnightBlue" />
    </div>
  );
};

export default Loader;
