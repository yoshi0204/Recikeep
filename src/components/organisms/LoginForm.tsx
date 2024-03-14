// src/components/organisms/LoginForm.tsx
import React, { useState } from 'react';
import TextInput from '../atoms/TextInput';
import PrimaryButton from '../atoms/PrimaryButton';
import Link from '../atoms/Link';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ログイン処理（API呼び出し等）
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <TextInput
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <PrimaryButton type="submit">ログイン</PrimaryButton>
      <Link to="/forgot-password">パスワードを忘れた方はこちら</Link>
      <Link to="/signup">アカウントをお持ちでない方はこちら</Link>
    </form>
  );
};

export default LoginForm;
