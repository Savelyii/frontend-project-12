import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { NotFound } from './components/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
