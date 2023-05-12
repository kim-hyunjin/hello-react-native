import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../utils/auth';
import { Alert } from 'react-native';

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = async ({ email, password }) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert('Login fail!', 'Please check your email and password or try again later');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingOverlay message={'Login'} />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
