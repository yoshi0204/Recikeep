// RegisterForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { validationSchema } from 'src/utils/validationSchema'; // アカウント登録用にカスタマイズする必要があるかもしれません
import PrimaryButton from 'src/components/atoms/PrimaryButton';
import LoginInput from 'src/components/molecules/LoginInput'; // フォーム入力コンポーネントの再利用
import { useNavigate } from 'react-router-dom';

interface RegisterFormInputs {
  email: string;
  password: string;
  confirmPassword: string; // パスワード確認用フィールド
}

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    if (data.password !== data.confirmPassword) {
      alert('パスワードとパスワード確認が一致しません。');
      return;
    }
    try {
      const response = await axios.post('/api/register', {
        email: data.email,
        password: data.password,
      });
      if (response.status === 200) {
        navigate('/');
      } else {
        alert('アカウントの登録に失敗しました。');
      }
    } catch (error) {
      alert('アカウントの登録に失敗しました。');
      console.error('アカウント登録処理中にエラーが発生しました。', error);
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
        <h1 className="text-white text-2xl font-bold text-center mb-10 sm:mb-20">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <LoginInput
            register={register('email')}
            error={errors.email?.message}
            id="email"
            icon={faEnvelope}
            type="email"
            placeholder="Enter your email"
            className="mb-4"
          />
          <LoginInput
            register={register('password')}
            error={errors.password?.message}
            id="password"
            icon={faLock}
            type="password"
            placeholder="Enter your password"
            className="mb-4"
          />
          <LoginInput
            register={register('confirmPassword')}
            error={errors.confirmPassword?.message}
            id="confirmPassword"
            icon={faLock}
            type="password"
            placeholder="Confirm your password"
            className="mb-8"
          />
          <PrimaryButton type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Register
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
