import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

type ManipulatePasswordVisibilityIcon = {
  isVisible: boolean;
  setVisibility: () => void;
  additionalClass?: string;
};

function ManipulatePasswordVisibilityIcon({
  isVisible,
  setVisibility,
  additionalClass = '',
}: ManipulatePasswordVisibilityIcon) {
  return (
    <button
      role="button"
      aria-label="Toggle password visibility"
      className={`cursor-pointer text-primary-600 [&>svg]:h-5 [&>svg]:w-5 ${additionalClass}`}
      onClick={(e) => {
        e.preventDefault();
        setVisibility();
      }}
    >
      {isVisible ? (
        <EyeSlashIcon data-testid="eye-slash" />
      ) : (
        <EyeIcon data-testid="eye" />
      )}
    </button>
  );
}

export default ManipulatePasswordVisibilityIcon;
