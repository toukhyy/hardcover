import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import clsx from 'clsx';

type Props = {
  label: string;
  type: string;
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
  console.log(error);
  return (
    <div>
      <label
        className={clsx(
          'block mb-2 text-sm font-bold text-gray-700 capitalize',
          labelClass
        )}
      >
        {label}
      </label>
      <input
        className={clsx(
          'w-full px-3 py-2 text-sm text-gray-700 rounded  outline-slate-200 outline outline-2 focus:outline-slate-400 ',
          error && 'outline-2 outline-red-400 focus:outline-red-400 ',
          inputClass
        )}
        type={type}
        placeholder={label}
        {...registration}
      />
      {error && (
        <span className="text-xs text-red-400 font-medium">
          {error.message}
        </span>
      )}
    </div>
  );
}
