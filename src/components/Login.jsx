import React from 'react';

export const Login = () => {
  return (
    <div className="login">
      <div className="login__text">Введите email</div>
      <input type="text" name="email" />
      <div className="login__text">Введите пароль</div>
      <input type="password" />
      <button className="login__button">Войти</button>
      <div className="line-gray"></div>
      <div className="login__text">Тестовые данные для проверок:</div>
      <div>
        <span className="login__grayText">Логин:</span> test@mail.ru
      </div>
      <div>
        <span className="login__grayText">Пароль:</span> test
      </div>
      <div>
        <span className="login__grayText">Логин:</span> test1@mail.ru
      </div>
      <div>
        <span className="login__grayText">Пароль:</span> test1
      </div>
    </div>
  );
};
