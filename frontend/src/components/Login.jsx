import { Container, Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Login = () => (
  <Container>
    <h1>Войти</h1>
    <Row>
      <Col className="col-3">
        <Form>
          <Form.Group className="mb-4">
            <FloatingLabel label="Ваше имя">
              <Form.Control placeholder="Ваше имя" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <FloatingLabel label="Ваш пароль">
              <Form.Control placeholder="Ваш пароль" />
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
