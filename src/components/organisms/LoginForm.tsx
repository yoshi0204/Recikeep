import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from 'src/components/atoms/PrimaryButton';
import LoginInput from 'src/components/molecules/LoginInput';
import { useNavigate } from 'react-router-dom';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  // zodResolverやvalidationSchemaを使用せずに、useFormを直接利用
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await axios.post('/api/login', data);
      if (response.status === 200) {
        navigate('/');
      } else {
        alert('ログインに失敗しました。');
      }
    } catch (error) {
      alert('ログインに失敗しました。');
      console.error('ログイン処理中にエラーが発生しました。', error);
    }
  };

  return (
    <div className="relative p-4 sm:p-8 rounded-lg shadow-md w-full max-w-sm sm:max-w-md">
      <div
        style={{
          backgroundImage: 'url(/images/29019850_l.jpg)',
          backgroundSize: '300%',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 z-0"
      ></div>
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-white text-2xl font-bold text-center mb-10 sm:mb-20">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <LoginInput
            register={register('email')}
            error={errors.email?.message} // エラーメッセージを表示するロジックを残す
            id="email"
            icon={faEnvelope}
            type="email"
            placeholder="Enter your email"
            className="mb-4"
          />
          <LoginInput
            register={register('password')}
            error={errors.password?.message} // エラーメッセージを表示するロジックを残す
            id="password"
            icon={faLock}
            type="password"
            placeholder="Enter your password"
            className="mb-8"
          />
          <PrimaryButton type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Login
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
