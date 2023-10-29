import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import NotFoundPage from './components/NotFoundPage';
import ChatPage from './components/ChatPage';

export default function App() {
  const token = localStorage.getItem('token')
  
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      {token ? (
        <Route path="/chat" element={<ChatPage />} />
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}