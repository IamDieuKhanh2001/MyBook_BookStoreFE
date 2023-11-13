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

const VoucherDetailTable = () => {
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
                                Thông tin voucher 1111
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Mã số định danh (isbn)
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                1111
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tên sản phẩm
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
                                Thể loại
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                aaa
                            </Typography>
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
                                aaaa
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Giá
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                aaa
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Trọng lượng
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                aaa
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                số lượng
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                aaa
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tổng số trang
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                aaa
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Năm phát hành
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                aaa
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tác giả
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                aaa
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Nhà cung cấp
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                a
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Nhà xuất bản
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                a
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Ngôn ngữ
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                a
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Hình thức
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                a
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default VoucherDetailTable
