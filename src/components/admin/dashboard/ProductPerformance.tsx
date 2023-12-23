"use client"
import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import useAPIStatistic from '@/lib/hooks/api/useAPIStatistic';
import { truncateText } from '@/lib/utils/TextUtils';

const ProductPerformance = () => {
    const { getProductStatistics } = useAPIStatistic()
    const { paginatedData, isLoading } = getProductStatistics()

    return (

        <DashboardCard title="Top 5 sản phẩm bán chạy">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
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
                                    Mã số
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Tổng đã bán
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Tổng doanh thu
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Tên
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Danh mục
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedData.map((product) => (
                            <TableRow key={product.isbn_code}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.isbn_code}
                                    </Typography>
                                </TableCell>
                                <TableCell align='center'>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.total_quantity_sold}
                                    </Typography>
                                </TableCell>
                                <TableCell align='center'>
                                    <Typography variant="h6">
                                        {product.total_revenue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {truncateText(product.book_name, 20)}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.ccategory_name}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default ProductPerformance;
