import { Link } from 'react-router-dom';

const SignUpPage = () => (
  <>
    <h1>Зарегестрироваться</h1>
    <p>
      Уже есть аккаунт?
      <Link to="/login">Войти</Link>
    </p>
  </>
);

export default SignUpPage;
