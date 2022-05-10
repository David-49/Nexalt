import { NextPage } from 'next';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

interface IProps {}

const Products: NextPage<IProps> = (props) => {
  const { user, signup } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signup(data.email, data.password);
    } catch (err: any) {
      throw new Error(err);
    }
  };

  console.log(user);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, password: e.target.value });
  };

  return (
    <form onSubmit={handleSignup}>
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
      <button type="submit">M'inscrire</button>
    </form>
  );
};

export default Products;
