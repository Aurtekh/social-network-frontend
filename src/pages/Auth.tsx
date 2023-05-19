// import React from 'react';
// import TextField from '@mui/material/TextField';
// import { useForm } from 'react-hook-form';
// import { fetchRegister } from '../redux/slices/auth';
// import { useNavigate } from 'react-router-dom';
// import { useAppDispatch } from '../redux/store';

// export const Auth: React.FC = () => {
// const dispatch = useAppDispatch();
// const navigate = useNavigate();
// const {
//   register,
//   handleSubmit,
//   // setError,
//   formState: { errors, isValid },
// } = useForm({
//   defaultValues: {
//     fullName: '',
//     email: '',
//     password: '',
//   },
//   mode: 'onChange',
// });

// type SubmitAuth = {
//   fullName: string;
//   email: string;
//   password: string;
// };
// const onSubmit = async (values: SubmitAuth) => {
//   const data = await dispatch(fetchRegister(values));

//   if (!data.payload) {
//     return alert('Не удалось зарегистрироваться');
//   }

//   if ('token' in data.payload) {
//     window.localStorage.setItem('token', data.payload.token);
//     navigate(`/id${data.payload._id}`);
//   }
// };

// React.useEffect(() => {
//   document.title = 'Добро пожаловать | Олдтакте';
// }, []);

// return (
//   <div className="auth">
//     <div className="auth__headerName">Добро пожаловать</div>
//     <div className="auth__wrapper">
//       <div>
//         <span className="bold">Олдтакте</span> - универсальное средство для общения и поиска
//         друзей и одноклассников, которым ежедневно пользуются десятки миллионов человек
//       </div>
//       <div className="auth__text">Моментальная регистрация</div>
//       <div className="line-gray"></div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="auth__container">
//           <TextField
//             size="small"
//             margin="dense"
//             error={Boolean(
//               errors.fullName ? (errors.fullName as { message: string }).message : '',
//             )}
//             helperText={errors.fullName ? (errors.fullName as { message: string }).message : ''}
//             {...register('fullName', { required: 'Укажите полное имя' })}
//             placeholder="Ваше Имя и Фамилия"
//           />
//           <TextField
//             size="small"
//             margin="dense"
//             error={Boolean(errors.email ? (errors.email as { message: string }).message : '')}
//             helperText={errors.email ? (errors.email as { message: string }).message : ''}
//             type="email"
//             {...register('email', { required: 'Укажите почту' })}
//             placeholder="Укажите почту"
//           />
//           <TextField
//             size="small"
//             margin="dense"
//             error={Boolean(
//               errors.password ? (errors.password as { message: string }).message : '',
//             )}
//             helperText={errors.password ? (errors.password as { message: string }).message : ''}
//             {...register('password', { required: 'Укажите пароль' })}
//             placeholder="Укажите пароль"
//           />
//           <button disabled={!isValid} type="submit" className="login__button">
//             Зарегистрироваться
//           </button>
//         </div>
//       </form>
//       <div className="auth__text">В чём поможет Олдтакте?</div>
//       <div className="line-gray"></div>
//       <div className="auth__infoList">
//         &#x25A0; Найти людей, с которыми Вы когда-либо учились, работали или отдыхали.
//       </div>
//       <div className="auth__infoList">
//         &#x25A0; Узнать больше о людях, которые Вас окружают, и найти новых друзей.
//       </div>
//       <div className="auth__infoList">
//         &#x25A0; Всегда оставаться в контакте с теми, кто Вам дорог.
//       </div>
//     </div>
//   </div>
// );

//   return <>Страница Регистрации Auth</>;
// };
export {};
