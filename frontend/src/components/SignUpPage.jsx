import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <>
      <h1>Зарегестрироваться</h1>
      <p>
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    </>
  );
};

export default SignUpPage;
