import { Link } from 'react-router-dom';
import { HiMiniCursorArrowRays } from 'react-icons/hi2';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Page not found</h2>
      <Link to="/" className={css.link}>
        Return to Home <HiMiniCursorArrowRays />
      </Link>
    </div>
  );
};

export default NotFoundPage;
