import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import ManipulatePasswordVisibilityIcon from '../manipulatePasswordVisibilityIcon/ManipulatePasswordVisibilityIcon';

type FormInputProps<T extends FieldValues> = {
  label?: string;
  connectFunction?: UseFormRegister<T>;
  placeholder?: string;
  id: Path<T>;
  size?: 'sm' | 'md';
  additionalClass?: string;
  disabled?: boolean;
  error?: string;
  password?: { isVisible: boolean; setIsVisible: () => void };
};

function FormInput<T extends FieldValues>({
  label,
  placeholder,
  size,
  additionalClass,
  disabled = false,
  error,
  password,
  connectFunction,
  id,
}: FormInputProps<T>) {
  const inputClass = `${size === 'sm' ? 'text-sm' : 'text-base'} ${disabled ? 'cursor-not-allowed' : ''} flex w-full justify-start rounded-md border border-rose-600/0 bg-primary-150 px-6 py-4 font-medium text-primary-500 ${error ? 'border-rose-600/100' : ''} ${password ? 'pr-10' : ''}`;
  return (
    <div
      className={`${disabled ? 'opacity-70' : ''} relative flex w-full flex-col gap-y-2 pb-8 ${additionalClass}`}
    >
      {Boolean(label) && (
        <label className="font-medium text-primary-600" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="relative">
        {connectFunction ? (
          <input
            className={inputClass}
            placeholder={placeholder || 'Type something here'}
            type={password && !password.isVisible ? 'password' : 'text'}
            {...connectFunction(id)}
            id={id}
            disabled={disabled}
          />
        ) : (
          <input
            className={inputClass}
            placeholder={placeholder || 'Type something here'}
            type={password && !password.isVisible ? 'password' : 'text'}
            id={id}
            disabled={disabled}
          />
        )}

        {password && (
          <ManipulatePasswordVisibilityIcon
            isVisible={password.isVisible}
            setVisibility={password.setIsVisible}
            additionalClass="absolute top-1/2 -translate-y-1/2 right-4"
          />
        )}
      </div>
      {error && (
        <p className="absolute bottom-3 left-2 text-xs font-semibold text-rose-600">
          {error || 'Something went wrong.'}
        </p>
      )}
    </div>
  );
}

export default FormInput;
