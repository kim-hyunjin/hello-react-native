import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import createUser from '../utils/auth';

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const signupHandler = async ({ email, password }) => {
    setIsLoading(true);
    await createUser(email, password);
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingOverlay message={'Creating user'} />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
