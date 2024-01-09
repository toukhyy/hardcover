import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import clsx from 'clsx';

type Props = {
  label: string;
  type: 'text' | 'email' | 'password';
  error?: FieldError;
  registration: Partial<UseFormRegisterReturn>;
  labelClass?: string;
  inputClass?: string;
};

export default function FormInput({
  type,
  error,
  label,
  registration,
  labelClass,
  inputClass,
}: Props) {
  return (
    <div>
      <label
        htmlFor={label}
        className={clsx(
          'block mb-1.5 text-sm font-semibold capitalize',
          labelClass
        )}
      >
        {label}
      </label>
      <input
        id={label}
        className={clsx(
          'w-full px-3 py-2 text-sm rounded outline-none  placeholder:capitalize placeholder:text-xs outline-1 duration-300',
          error
            ? 'outline-red-500'
            : 'outline-slate-200 focus:outline-slate-400',
          inputClass
        )}
        type={type}
        placeholder={label}
        {...registration}
      />
      {error && (
        <p className="text-xs text-red-400 font-medium mt-1">{error.message}</p>
      )}
    </div>
  );
}
