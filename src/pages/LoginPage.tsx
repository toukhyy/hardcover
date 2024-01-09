import Dialog from '@/components/Elements/Dialog/Dialog';
import LoginForm from '@/components/Form/LoginForm';
import RegisterForm from '@/components/Form/RegisterForm';
import { useState } from 'react';
import { GiBookCover } from 'react-icons/gi';

export default function LoginPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-pattern min-h-screen flex justify-center items-center">
      <div className="bg-white pt-6 px-6 pb-4 rounded shadow-md min-w-80">
        <div className="mb-3 border-b pb-2 border-b-silk-100">
          <GiBookCover className="mx-auto h-12 w-12 text-silk-900" />
          <h1 className="text-center text-xl font-semibold text-silk-900">
            Hardcover
          </h1>
        </div>
        <p className="mb-3 text-silk-500 text-center font-semibold text-sm">
          Welcome Back
        </p>
        <LoginForm />
        <div className="border-t pt-2 mt-4 border-t-silk-100">
          <p className="text-center text-sm">
            Don't have an account,{' '}
            <span
              className="text-silk-500 font-semibold hover:text-silk-700 duration-200 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Register.
            </span>
          </p>
        </div>
      </div>
      <Dialog
        isOpen={open}
        onClose={() => setOpen(false)}
        DialogClass="min-w-80"
      >
        <h1 className="text-center text-lg font-semibold text-silk-900 mb-3">
          Create New Account
        </h1>
        <RegisterForm />
      </Dialog>
    </main>
  );
}
