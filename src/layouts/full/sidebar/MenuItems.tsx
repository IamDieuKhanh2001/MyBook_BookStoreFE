import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconMoodHappy,
  IconTypography,
  IconCategory,
  IconPackage,
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

//Nơi chứa hiển thị thông tin của side bar các items
const Menuitems = [
  {
    navlabel: true,
    subheader: 'Quản lý',
  },
  {
    id: uniqueId(),
    title: 'Danh mục',
    icon: IconCategory,
    href: '/admin/manage/categories',
  },
  {
    id: uniqueId(),
    title: 'Sản phẩm',
    icon: IconPackage,
    href: '/admin/manage/products',
  },
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/admin',
  },
  {
    navlabel: true,
    subheader: 'Test page',
  },
  {
    id: uniqueId(),
    title: 'Test API',
    icon: IconTypography,
    href: '/admin/test-api',
  },
  {
    navlabel: true,
    subheader: 'Utils',
  },
  {
    id: uniqueId(),
    title: 'Typography',
    icon: IconTypography,
    href: '/utilities/typography',
  },
  {
    id: uniqueId(),
    title: 'Shadow',
    icon: IconCopy,
    href: '/utilities/shadow',
  },
  {
    id: uniqueId(),
    title: 'Icons',
    icon: IconMoodHappy,
    href: '/utilities/icons',
  },
  {
    navlabel: true,
    subheader: 'Test Page',
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: IconAperture,
    href: '/admin/sample-page',
  },
  {
    id: uniqueId(),
    title: 'Categories CRUD',
    icon: IconCategory,
    href: '/admin/categories-crud',
  },
];

export default Menuitems;
