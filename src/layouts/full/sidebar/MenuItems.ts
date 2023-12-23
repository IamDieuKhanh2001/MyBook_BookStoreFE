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
  IconBook,
  IconTicket,
  IconNotes,
  IconReceiptTax,
  IconUser,
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

//Nơi chứa hiển thị thông tin của side bar các items
const Menuitems = [
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
  //Order group 
  {
    navlabel: true,
    subheader: 'Đơn hàng',
  },
  {
    id: uniqueId(),
    title: 'Đơn hàng đặt',
    icon: IconNotes,
    href: '/admin/manage/order',
  },
  {
    navlabel: true,
    subheader: 'Sự kiện',
  },
  {
    id: uniqueId(),
    title: 'Ngày hội giảm giá',
    icon: IconReceiptTax,
    href: '/admin/manage/flash-sale',
  },
  //Manage group
  {
    navlabel: true,
    subheader: 'Quản lý',
  },
  {
    id: uniqueId(),
    title: 'Sách',
    icon: IconBook,
    href: '/admin/manage/products',
  },
  {
    id: uniqueId(),
    title: 'Danh mục',
    icon: IconCategory,
    href: '/admin/manage/categories',
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
  {
    id: uniqueId(),
    title: 'Nhà cung cấp',
    icon: IconPackage,
    href: '/admin/manage/provider',
  },
  {
    id: uniqueId(),
    title: 'Mã voucher',
    icon: IconTicket,
    href: '/admin/manage/voucher',
  },
  {
    id: uniqueId(),
    title: 'Người dùng',
    icon: IconUser,
    href: '/admin/manage/user',
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
  {
    id: uniqueId(),
    title: 'Nhà cung cấp',
    icon: IconHistory,
    href: '/admin/manage/provider/recycle-bin',
  },
  //Test group (remove in future)
  // {
  //   navlabel: true,
  //   subheader: 'Test Page 2 (Remove)',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Test API',
  //   icon: IconTypography,
  //   href: '/admin/test-api',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Utils (remove)',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Typography',
  //   icon: IconTypography,
  //   href: '/utilities/typography',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Shadow',
  //   icon: IconCopy,
  //   href: '/utilities/shadow',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Icons',
  //   icon: IconMoodHappy,
  //   href: '/utilities/icons',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Test Page 1 (Remove)',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Sample Page',
  //   icon: IconAperture,
  //   href: '/admin/sample-page',
  // },
];

export default Menuitems;
