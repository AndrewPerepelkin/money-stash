import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import * as Yup from 'yup';
import {useFormik, FormikProvider} from 'formik';
import Card from '../components/Card';
import {UserIcon, KeyIcon, MailIcon} from '@heroicons/react/outline';
import InputField from '../components/common/InputField';
import Button from '../components/Button';
import SpinLoading from '../components/SpinLoader';
import StyledNavLink from '../components/StyledNavLink';
import {clearMessage} from '../store/messageSlice';
import {signUp} from '../store/authSlice';

const signUpSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Имя пользователя должно состоять хотя бы из 3 символов')
    .required('Required'),
  email: Yup.string()
    .email('Адрес электронной почты введен некорректно')
    .required('Required'),
  password: Yup.string()
    .min(4, 'пароль должен содержать не менее 4 символов')
    .required('Required')
});

const initialValues = {
  username: '',
  email: '',
  password: ''
};

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const {message} = useSelector((state) => state.message);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleSubmit = (formValues) => {
    const {username, email, password} = formValues;
    setLoading(true);
    setSuccessful(false);
    dispatch(signUp({username, email, password}))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        history.push('/main');
      })
      .catch(() => {
        setSuccessful(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: handleSubmit
  });

  return (
    <>
      <Card.Title>Регистрация</Card.Title>

      <FormikProvider value={formik}>
        {!successful && (
          <form
            className='space-y-6 min-w-[200px] w-full mb-10'
            onSubmit={formik.handleSubmit}
          >
            <InputField
              label='Имя пользователя: '
              name='username'
              icon={UserIcon}
            />
            <InputField
              label='Email:'
              name='email'
              icon={MailIcon}
            />

            <InputField
              label='Пароль:'
              name='password'
              type='password'
              icon={KeyIcon}
            />
            <div className='pt-2'>
              <Button disabled={loading}>
                {loading && <SpinLoading />} Sign Up
              </Button>
            </div>
          </form>
        )}
        {message && (
          <div className='form-group'>
            <div
              className={
                successful ? 'alert alert-success' : 'alert alert-danger'
              }
              role='alert'
            >
              {message}
            </div>
          </div>
        )}
      </FormikProvider>
      <p className='text-slate-600 text-sm text-center'>
        <span>У Вас уже есть аккаунт? </span>
        <StyledNavLink
          styleType='underline'
          to='/auth/login'
        >
          Войти
        </StyledNavLink>
      </p>
    </>
  );
};

export default SignUpPage;
