import { ReactNode } from 'react';

type BorderBoxProps = {
  px?: 'sm' | 'md' | 'lg';
  py?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  additionalClass?: string;
};

function BorderBox({
  px = 'lg',
  py = 'lg',
  children,
  additionalClass = '',
}: BorderBoxProps) {
  const paddingX = (function getBorderPaddingX() {
    switch (px) {
      case 'sm':
        return `px-4`;
      case 'md':
        return `px-6`;
      case 'lg':
        return `px-8`;
      default:
        return `px-6`;
    }
  })();
  const paddingY = (function getBorderPaddingY() {
    switch (py) {
      case 'sm':
        return `py-4`;
      case 'md':
        return `py-6`;
      case 'lg':
        return `py-8`;
      default:
        return `py-6`;
    }
  })();
  return (
    <div
      className={`${paddingX} ${paddingY} rounded-xl border border-primary-200 ${additionalClass}`}
    >
      {children}
    </div>
  );
}

export default BorderBox;
