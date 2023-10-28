import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import NotFoundPage from './components/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
