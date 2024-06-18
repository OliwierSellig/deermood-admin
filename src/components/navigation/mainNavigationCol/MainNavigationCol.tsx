import { ReactNode } from 'react';

type MainNavigationColProp = {
  title: string;
  children?: ReactNode;
  border?: boolean;
};

function MainNavigationCol({
  title,
  children,
  border = false,
}: MainNavigationColProp) {
  return (
    <div
      className={`gap-y-2 px-2 pb-6 pt-2 md:pb-2 ${border ? 'border-b-2 border-primary-300' : ''}`}
    >
      <p className="pb-4 text-sm text-primary-500">{title}</p>
      <ul>{children}</ul>
    </div>
  );
}

export default MainNavigationCol;
