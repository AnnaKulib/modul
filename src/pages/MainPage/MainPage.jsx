import React from 'react';
import RegistrationForm from '../../Components/RegistrationForm';
import s from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={s.section}>
      <RegistrationForm />
    </div>
  );
};

export default MainPage;