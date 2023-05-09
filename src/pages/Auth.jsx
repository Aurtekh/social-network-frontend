import React from 'react';

export const Auth = () => {
  React.useEffect(() => {
    document.title = 'Добро пожаловать | Олдтакте';
  }, []);

  return (
    <div className="auth">
      <div className="auth__headerName">Добро пожаловать</div>
      <div className="auth__wrapper">
        <div>
          <span className="bold">Олдтакте</span> - универсальное средство для общения и поиска
          друзей и одноклассников, которым ежедневно пользуются десятки миллионов человек
        </div>
        <div className="auth__text">Моментальная регистрация</div>
        <div className="line-gray"></div>
        <div className="auth__container">
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="Ваша фамилия" />
          <input type="text" name="email" placeholder="Ваш email" />
          <input type="password" placeholder="Ваш пароль" />
          <button className="login__button">Зарегистрироваться</button>
        </div>
        <div className="auth__text">В чём поможет Олдтакте?</div>
        <div className="line-gray"></div>
        <div className="auth__infoList">
          &#x25A0; Найти людей, с которыми Вы когда-либо учились, работали или отдыхали.
        </div>
        <div className="auth__infoList">
          &#x25A0; Узнать больше о людях, которые Вас окружают, и найти новых друзей.
        </div>
        <div className="auth__infoList">
          &#x25A0; Всегда оставаться в контакте с теми, кто Вам дорог.
        </div>
      </div>
    </div>
  );
};
