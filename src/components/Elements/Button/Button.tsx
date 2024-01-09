import clsx from 'clsx';
import { ReactNode } from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';

const sizes = {
  sm: 'py-1 px-4 text-sm',
  md: 'py-1.5 px-6 text-base',
  lg: 'py-1.5 px-8 text-lg',
  full: 'py-2 w-full',
};

const themes = {
  primary: 'bg-silk-500 hover:bg-silk-400 text-white',
};

type Props = {
  children: ReactNode;
  type?: 'button' | 'submit';
  isLoading?: boolean;
  buttonClass?: string;
  theme?: keyof typeof themes;
  size?: keyof typeof sizes;
  minContent?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  type = 'button',
  buttonClass,
  isLoading = false,
  size = 'md',
  minContent = false,
  theme = 'primary',
  ...props
}: Props) {
  return (
    <button
      disabled={isLoading}
      className={clsx(
        'border shadow-md rounded flex items-center gap-2 justify-center font-semibold duration-200',
        themes[theme],

        minContent && 'max-w-min',
        isLoading && 'disabled:bg-slate-300',
        sizes[size],
        buttonClass
      )}
      type={type}
      {...props}
    >
      {children}
      {isLoading && (
        <span>
          <CgSpinnerTwo className="h-4 w-4 animate-spin" />
        </span>
      )}
    </button>
  );
}
