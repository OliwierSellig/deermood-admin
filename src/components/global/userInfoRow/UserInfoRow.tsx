import { ReactElement, SVGProps } from 'react';

type UserInfoRowProps = {
  heading: string;
  value: string;
  Icon: ReactElement<SVGProps<SVGSVGElement>>;
};

function UserInfoRow({ heading, value, Icon }: UserInfoRowProps) {
  return (
    <div className="flex items-center gap-3 [&>svg]:size-6 [&>svg]:stroke-primary-500">
      {Icon}
      <div>
        <p className="text-sm text-primary-500">{heading}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default UserInfoRow;
