import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <h1>404 (not found)</h1>
      <Link to="/">Вернуться на главную</Link>
    </>
  );
};
