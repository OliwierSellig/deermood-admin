import { ReactNode } from 'react';

type MainNavigationColProp = {
  title: string;
  children: ReactNode;
  border?: boolean;
};

function MainNavigationCol({
  title,
  children,
  border = false,
}: MainNavigationColProp) {
  return (
    <div
      className={`px-2 pt-2 pb-6 gap-y-2 ${border ? 'border-b-2 border-primary-300' : ''}`}
    >
      <p className="text-sm text-primary-500 pb-4">{title}</p>
      <ul>{children}</ul>
    </div>
  );
}

export default MainNavigationCol;
