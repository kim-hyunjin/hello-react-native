import axios from 'axios';

const API_KEY = 'AIzaSyBip2xP-St2yob77XB-DbVsObbvwtGH6oE';
export default async function createUser(email, password) {
  const { data } = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
}
