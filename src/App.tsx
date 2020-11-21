import React from 'react';
import LoginForm from './LoginForm';
// import {Formik, Form} from 'formik';

interface Props {
  onSubmit?: () => void;
}

const App: React.FC<Props> = () => {
  return (
    <LoginForm />
  );
}

export default App;
