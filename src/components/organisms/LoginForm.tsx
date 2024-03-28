import { useForm } from 'react-hook-form';
import axios from 'axios';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '@/components/atoms/PrimaryButton';
import LoginInput from '@/components/molecules/LoginInput';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await axios.post('/api/login', data);
      if (response.status === 200) {
        navigate('/');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      alert('Login failed');
      console.error('Error occurred during login process', error);
    }
  };
  return (
    <div className="relative p-4 sm:p-8 rounded-lg shadow-md w-full max-w-sm sm:max-w-md">
      <div
        style={{
          backgroundImage: 'url(/images/29019850_l.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 z-0"
      ></div>
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-white text-2xl font-bold text-center mb-4">Login</h1>
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
          <PrimaryButton type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-4">
            Sign in
          </PrimaryButton>
          <div className="text-center text-sm text-white mb-4">
            <Link to="/forgot-password" className="hover:underline">Forgot password?</Link>
          </div>
          <div className="text-center text-sm text-white">
            Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
  };
  
 
export default LoginForm;
