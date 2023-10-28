import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h1>404 (not found)</h1>
      <Link to="/">Вернуться на главную</Link>
    </>
  );
};

export default NotFoundPage;
