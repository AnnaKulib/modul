import { Button } from '@mui/material';
import React, { useState, useContext } from 'react';
import { useTranslation } from "react-i18next";
import s from "./LanguageSwitcher.module.css"

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('en');
  const { i18n } = useTranslation();

  const handleClick = () => {
    const newLanguage = language === "en" ? "ua" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  }

  return (
    <Button
      type="submit"
      variant="raised"
      onClick={handleClick}
      className={s.btnAgain}
    >
      {language}
    </Button>
  );
};

export default LanguageSwitcher;
