import { NextPage } from 'next';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

interface IProps {}

const Products: NextPage<IProps> = (props) => {
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await login(data.email, data.password);
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, password: e.target.value });
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email">
        Email :
        <input
          type="email"
          id="email"
          onChange={(e) => handleEmailChange(e)}
          value={data.email}
          required
        />
      </label>
      <label htmlFor="password">
        Mot de passe :
        <input
          type="password"
          id="password"
          onChange={(e) => handlePasswordChange(e)}
          value={data.password}
          required
        />
      </label>
      <button type="submit">Me connecter</button>
    </form>
  );
};

export default Products;
