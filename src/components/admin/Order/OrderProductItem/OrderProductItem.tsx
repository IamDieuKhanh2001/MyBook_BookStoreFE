'use client'

import React from 'react'
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import { truncateText } from '@/lib/utils/TextUtils'
import CustomButton from '@/components/forms/theme-elements/CustomButton'
import { IconCheck, IconEye, IconX } from '@tabler/icons-react'
import CustomChip from '@/components/forms/theme-elements/CustomChip'
import DashboardCard from '@/components/shared/DashboardCard'

const OrderProductItem = () => {
    return (
        <Box sx={{ mb: 2 }}>
            <DashboardCard
                title={`Sản phẩm: aaa`}
                subtitle={`ID: 1`}
            >
                <Box sx={{ width: { xs: '280px', sm: 'auto' } }}>
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
                                        Thông tin sản phẩm: 1111
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        ISBN code
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
                                        Tên
                                    </Typography>
                                </TableCell>
                                <TableCell align='left'>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        sách 1
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
                                        10
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        Giá sản phẩm
                                    </Typography>
                                </TableCell>
                                <TableCell align='left'>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        500000
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <CustomButton
                        startIcon={<IconEye />}
                        color="success"
                        size='small' disableElevation variant="contained" href=""
                        sx={{ mr: 2, mt: 2 }}
                    >
                        Chi tiết sản phẩm
                    </CustomButton>
                </Box>
            </DashboardCard>
        </Box>
    )
}

export default OrderProductItem
