import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPlayer } from '../../features/player/playerSlice';
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [deposit, setDeposit] = useState(0);
  const [logo, setLogo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPlayer({ name, deposit: Number(deposit), balance: Number(deposit), logo }));
    navigate('/games');
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const logo = {
        dataUrl: reader.result,
      };
      setLogo(logo)
    };
    reader.readAsDataURL(file);
  }

  const isSubmitDisabled = !name || deposit <= 0;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <Button variant="raised" component="label" sx={{ marginBottom: '20px', color: '#ffffff', fontWeight: 'bold' }}>
        Додайте аватар
        <input type="file" accept="image/*" title="логотип" onChange={handleLogoChange} hidden />
      </Button>
      <TextField
        className={s.input}
        label={<span className={s.label}>Ваше ім'я</span>}
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        className={s.input}
        label={<span className={s.label}>Початковий депозит</span>}
        type="number"
        variant="outlined"
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
        inputProps={{ min: "1" }}
        required
        fullWidth
        margin="normal"
      />
      <Button
        type="submit"
        disabled={isSubmitDisabled}
        fullWidth
        sx={ {background: '#291111',
          border: '#767676 1px solid', 
          '&:hover': {
            background: '#5d0e0e',
          },
        } }>
        {(!name || deposit <= 0) ? 
          <Typography sx={{ color: '#c7b7b7', fontWeight: 'bold' }}>Вкажіть ім'я та депозит</Typography> 
          : 
          <Typography sx={{ color: '#ffffff', fontWeight: 'bold' }}>Почати</Typography>
        }
      </Button>
    </form>
  );
};

export default RegistrationForm;