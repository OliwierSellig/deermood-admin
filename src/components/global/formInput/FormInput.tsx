import ManipulatePasswordVisibilityIcon from '../manipulatePasswordVisibilityIcon/ManipulatePasswordVisibilityIcon';

type FormInputProps = {
  label?: string;
  name?: string;
  placeholder?: string;
  size?: 'sm' | 'md';
  additionalClass?: string;
  disabled?: boolean;
  error?: { hasMessage: false } | { hasMessage: true; message?: string };
  password?: { isVisible: boolean; setIsVisible: () => void };
};

function FormInput({
  label,
  name,
  placeholder,
  size,
  additionalClass,
  disabled = false,
  error,
  password,
}: FormInputProps) {
  const inputId = label ? label.toLowerCase() : undefined;

  return (
    <div
      className={`${disabled ? 'opacity-70' : ''} relative flex w-full flex-col gap-y-2 pb-8 ${additionalClass}`}
    >
      {Boolean(label) && (
        <label className="font-medium text-primary-600" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={`${size === 'sm' ? 'text-sm' : 'text-base'} ${disabled ? 'cursor-not-allowed' : ''} flex w-full justify-start rounded-md border border-rose-600/0 bg-primary-150 px-6 py-4 font-medium text-primary-500 ${error ? 'border-rose-600/100' : ''} ${password ? 'pr-10' : ''}`}
          placeholder={placeholder || 'Type something here'}
          type={password && !password.isVisible ? 'password' : 'text'}
          name={name}
          id={inputId}
          disabled={disabled}
        />
        {password && (
          <ManipulatePasswordVisibilityIcon
            isVisible={password.isVisible}
            setVisibility={password.setIsVisible}
            additionalClass="absolute top-1/2 -translate-y-1/2 right-4"
          />
        )}
      </div>
      {error?.hasMessage && (
        <p className="absolute bottom-1 left-2 text-xs font-semibold text-rose-600">
          {error.message || 'Something went wrong.'}
        </p>
      )}
    </div>
  );
}

export default FormInput;
