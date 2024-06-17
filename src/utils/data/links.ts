import {
  BookmarkIcon,
  ChatBubbleBottomCenterTextIcon,
  CreditCardIcon,
  CursorArrowRippleIcon,
  QueueListIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from '../types/navLink';

export const linksUpper: NavLink[] = [
  { Icon: Squares2X2Icon, label: 'Dashboard', url: '/dashboard' },
  { Icon: ShoppingBagIcon, label: 'Orders', url: '/orders' },
  { Icon: ShoppingCartIcon, label: 'Products', url: '/products' },
  { Icon: QueueListIcon, label: 'Collections', url: '/collections' },
  { Icon: UsersIcon, label: 'Customers', url: '/customers' },
];

export const linksLower: NavLink[] = [
  { Icon: UserIcon, label: 'My Account', url: '/account' },
  { Icon: CursorArrowRippleIcon, label: 'Create Admin', url: '/create-admin' },
];

export const featuresLinks: NavLink[] = [
  { Icon: BookmarkIcon, label: 'Themes', url: '/themes' },
  {
    Icon: ChatBubbleBottomCenterTextIcon,
    label: 'Marketing',
    url: '/marketing',
  },
  { Icon: CreditCardIcon, label: 'Discount', url: '/discounts' },
];
