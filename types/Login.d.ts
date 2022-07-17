export interface ISignup {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirm: string;
}

export interface ISignin {
  email: string;
  password: string;
}
