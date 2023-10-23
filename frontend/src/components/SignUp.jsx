import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <>
      <h1>Зарегаться</h1>
      <p>
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    </>
  );
};
