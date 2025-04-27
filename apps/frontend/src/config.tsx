import { AiFillHome } from 'react-icons/ai';
import { IoPerson } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { SiSimpleanalytics } from 'react-icons/si';

export const navigationLinks = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <AiFillHome />,
  },
  {
    label: 'NFT Marketplace',
    href: '#',
    icon: <MdOutlineShoppingCart />,
  },
  {
    label: 'Tables',
    href: '#',
    icon: <SiSimpleanalytics />,
  },
  {
    label: 'Profile',
    href: '#',
    icon: <IoPerson />,
  },
] as const;
