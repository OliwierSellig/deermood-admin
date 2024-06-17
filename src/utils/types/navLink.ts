import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export type NavLink = {
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  label: string;
  url: string;
};
