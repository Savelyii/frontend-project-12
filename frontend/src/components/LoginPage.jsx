import { useNavigate } from 'react-router-dom';
import { Container, Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Введите ваш ник'),
      password: Yup.string().required('Введите пароль'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/v1/login', values);
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/chat');
      } catch (error) {
        console.log(error)
      }
    },
  });

  return (
    <Container>
      <h1>Войти</h1>
      <Row>
        <Col className="col-3">
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-4">
              <FloatingLabel label="Ваш ник">
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Ваш ник"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-danger">{formik.errors.username}</div>
                ) : null}
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel label="Пароль">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </FloatingLabel>
            </Form.Group>
            <Button className="mt-3" type="submit">
              Войти
            </Button>
            Нет аккаунта? <Link to="/sign-up">Зарегистрироваться</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
