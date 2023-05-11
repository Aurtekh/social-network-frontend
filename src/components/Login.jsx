import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../redux/slices/auth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert('Не удалось авторизоваться');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
      navigate(`/id${data.payload._id}`);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login__text">Введите email:</div>
        <TextField
          size="small"
          margin="dense"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register('email', { required: 'Укажите почту' })}
          fullWidth
        />
        <div className="login__text">Введите пароль:</div>
        <TextField
          size="small"
          margin="dense"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Укажите пароль' })}
          fullWidth
        />
        <button type="submit" disabled={!isValid} className="login__button">
          Войти
        </button>
      </form>
      <div className="line-gray"></div>
      <div className="login__text">Тестовые данные для проверок:</div>
      <div>
        <span className="login__grayText">Логин:</span> test1@test.ru
      </div>
      <div>
        <span className="login__grayText">Пароль:</span> test1
      </div>
      <div>
        <span className="login__grayText">Логин:</span> test2@test.ru
      </div>
      <div>
        <span className="login__grayText">Пароль:</span> test2
      </div>
    </div>
  );
};
