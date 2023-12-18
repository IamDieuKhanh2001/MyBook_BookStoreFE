'use client'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import { truncateText } from '@/lib/utils/TextUtils'
import CustomChip from '@/components/forms/theme-elements/CustomChip'
import VoucherType from '@/enum/VoucherType'
import VoucherStatus from '@/enum/VoucherStatus'

interface IVoucherDetailTableProps {
    data: IVoucher
}
const VoucherDetailTable = (props: IVoucherDetailTableProps) => {
    const { data } = props

    return (
        <>
            <Table
                aria-label="simple table"
                sx={{
                    whiteSpace: "nowrap",
                    mt: 2
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell align='center' colSpan={2}>
                            <Typography variant="h4" fontWeight={600}>
                                Thông tin voucher {data.voucher_code}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Mã số
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data.id}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tên voucher
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {
                                    truncateText(
                                        'aaa',
                                        100
                                    )
                                }
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Mã sử dụng voucher
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data.voucher_code}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Loại
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <CustomChip
                                bgColor={
                                    data.voucher_type === VoucherType.GENERAL
                                        ? ('success')
                                        : data.voucher_type === VoucherType.MEMBER_EXCLUSIVE
                                            ? ('warning')
                                            : data.voucher_type === VoucherType.PERSONALIZED
                                                ? ('error') : undefined
                                }
                                label={
                                    data.voucher_type === VoucherType.GENERAL
                                        ? ('Tất cả người dùng')
                                        : data.voucher_type === VoucherType.MEMBER_EXCLUSIVE
                                            ? ('Nhóm thành viên')
                                            : data.voucher_type === VoucherType.PERSONALIZED
                                                ? ('Cá nhân') : undefined
                                }
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Mô tả
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {
                                    truncateText(
                                        data.desc,
                                        100
                                    )
                                }
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Giá tối thiểu
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data.require_order_min_price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Giá tối đa
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data.discount_max_price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Phần trăm giảm
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data.discount_percentage} (%)
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Số lượng
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data.limited}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Đối tượng thành viên
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data.user_level_id}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                id user
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data.user_id}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Ngày hiệu lực
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data.start_date}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Ngày hết hạn
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data.end_date}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Trạng thái
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <CustomChip
                                bgColor={
                                    data.status === VoucherStatus.ACTIVE
                                        ? ('success')
                                        : ('warning')
                                }
                                label={
                                    data.status === VoucherStatus.ACTIVE
                                        ? ('Đang hoạt động')
                                        : ('Đã hủy hoạt động')
                                }
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default VoucherDetailTable
