// src/components/templates/LoginTemplate.tsx
import React from 'react';
import LoginForm from '../organisms/LoginForm';

const LoginTemplate: React.FC = () => {
  return (
    <div className="login-template">
      <h1>ログイン</h1>
      <LoginForm />
      {/* ここに追加のコンテンツやリンクを配置できます。 */}
    </div>
  );
};

export default LoginTemplate;
