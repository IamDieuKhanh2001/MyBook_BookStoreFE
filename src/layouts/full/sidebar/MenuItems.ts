import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconMoodHappy,
  IconTypography,
  IconCategory,
  IconPackage,
  IconAlphabetLatin,
  IconHistory,
  IconBallpen,
  IconBoxModel2,
  IconBuildingFactory2,
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

//Nơi chứa hiển thị thông tin của side bar các items
const Menuitems = [
  //Manage group
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
    id: uniqueId(),
    title: 'Ngôn ngữ sách',
    icon: IconAlphabetLatin,
    href: '/admin/manage/book-lang',
  },
  {
    id: uniqueId(),
    title: 'Tác giả',
    icon: IconBallpen,
    href: '/admin/manage/author',
  },
  {
    id: uniqueId(),
    title: 'Hình thức sách',
    icon: IconBoxModel2,
    href: '/admin/manage/book-form',
  },
  {
    id: uniqueId(),
    title: 'Nhà xuất bản',
    icon: IconBuildingFactory2,
    href: '/admin/manage/publisher',
  },
  //Home group
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
  //recover data
  {
    navlabel: true,
    subheader: 'Khôi phục dữ liệu',
  },
  {
    id: uniqueId(),
    title: 'Danh mục cha',
    icon: IconHistory,
    href: '/admin/manage/categories/recycle-bin',
  },
  {
    id: uniqueId(),
    title: 'Ngôn ngữ sách',
    icon: IconHistory,
    href: '/admin/manage/book-lang/recycle-bin',
  },
  {
    id: uniqueId(),
    title: 'Tác giả',
    icon: IconHistory,
    href: '/admin/manage/author/recycle-bin',
  },
  {
    id: uniqueId(),
    title: 'Hình thức sách',
    icon: IconHistory,
    href: '/admin/manage/book-form/recycle-bin',
  },
  {
    id: uniqueId(),
    title: 'Nhà xuất bản',
    icon: IconHistory,
    href: '/admin/manage/publisher/recycle-bin',
  },
  //Test group (remove in future)
  {
    navlabel: true,
    subheader: 'Test Page (Remove)',
  },
  {
    id: uniqueId(),
    title: 'Test API',
    icon: IconTypography,
    href: '/admin/test-api',
  },
  {
    navlabel: true,
    subheader: 'Utils (remove)',
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
    subheader: 'Test Page (Remove)',
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: IconAperture,
    href: '/admin/sample-page',
  },
];

export default Menuitems;
