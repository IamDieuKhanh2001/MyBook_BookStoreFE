import { uniqueId } from 'lodash';

//Nơi chứa hiển thị thông tin của side bar các items
const accountSideBarItems = [
    {
        id: uniqueId(),
        title: 'Thông tin tài khoản',
        icon: <i className="fas fa-info fa-lg" style={{ color: '#333333' }} />,
        href: '/account',
    },
    {
        id: uniqueId(),
        title: 'Sổ địa chỉ',
        icon: <i className="fas fa-address-card fa-lg" style={{ color: '#333333' }} />,
        href: '/account/address',
    },
    {
        id: uniqueId(),
        title: 'Đơn hàng của tôi',
        icon: <i className="fas fa-clipboard-list fa-lg" style={{ color: '#333333' }} />,
        href: '/account/order/history',
    },
    {
        id: uniqueId(),
        title: 'Ví Voucher',
        icon: <i className="fas fa-ticket-alt fa-lg" style={{ color: '#333333' }} />,
        href: '/account/voucher',
    },
    {
        id: uniqueId(),
        title: 'Đăng kí nhận tin điện tử',
        icon: <i className="fas fa-envelope-open-text fa-lg" style={{ color: '#333333' }} />,
        href: '#',
    },
];

export default accountSideBarItems;
