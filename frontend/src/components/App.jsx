import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AuthProvider from '../contexts/AuthProvider.jsx';
import Header from './Header.jsx';
import LoginPage from './LoginPage.jsx';
import SignUpPage from './SignUpPage';
import NotFoundPage from './NotFoundPage.jsx';
import ChatPage from './ChatPage.jsx';
import { useAuth } from '../hooks/index.js';
import routes from '../routes.js';

const ChatPageRoute = ({ children }) => {
  const auth = useAuth();

  return (
    auth.user ? children : <Navigate to={routes.login} />
  );
};
const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <div className="d-flex flex-column h-100">
        <Header />
        <Routes>
          <Route
            path={routes.home}
            element={(
              <ChatPageRoute>
                <ChatPage />
              </ChatPageRoute>
          )}
          />
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.signup} element={<SignUpPage />} />
          <Route path={routes.error} element={<NotFoundPage />} />
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  </AuthProvider>
);

export default App;
