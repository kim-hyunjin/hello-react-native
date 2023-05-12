import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { createUser } from '../utils/auth';
import { Alert } from 'react-native';

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const signupHandler = async ({ email, password }) => {
    setIsLoading(true);
    try {
      await createUser(email, password);
    } catch (e) {
      Alert.alert('Sign up fail!', 'Please check your input and try again later');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingOverlay message={'Creating user'} />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
