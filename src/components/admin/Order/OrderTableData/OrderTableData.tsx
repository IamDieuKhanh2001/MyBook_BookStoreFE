'use client'

import React from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography, Stack, CircularProgress, Box } from '@mui/material'
import { IconEye } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import CustomChip from '@/components/forms/theme-elements/CustomChip'

const OrderTableData = () => {
    const router = useRouter()

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
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Mã đơn
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Gmail
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Ngày tạo đơn
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Trạng thái
                            </Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant="subtitle2" fontWeight={600}>
                                xem chi tiết
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={'1'}>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                111
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={500}>
                                qdkhanh2001
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={500}>
                                1/1
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <CustomChip
                                label='Đã thanh toán'
                                bgColor='success'
                            />
                        </TableCell>
                        <TableCell align="right">
                            <Button
                                color='success'
                                size="small"
                                onClick={() => {
                                    router.push(`/admin/manage/`)
                                }}
                            >
                                <IconEye />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow key={'2'}>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                222
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={500}>
                                qdkhanh2001
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={500}>
                                1/1
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <CustomChip
                                label='Chưa thanh toán'
                                bgColor='error'
                            />
                        </TableCell>
                        <TableCell align="right">
                            <Button
                                color='success'
                                size="small"
                                onClick={() => {
                                    router.push(`/admin/manage/order/detail/1`)
                                }}
                            >
                                <IconEye />
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default OrderTableData
