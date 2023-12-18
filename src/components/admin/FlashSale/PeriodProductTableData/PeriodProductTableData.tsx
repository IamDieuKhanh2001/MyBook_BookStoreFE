'use client'

import CustomButton from '@/components/forms/theme-elements/CustomButton';
import { IconTrash } from '@tabler/icons-react';
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { truncateText } from '@/lib/utils/TextUtils';
import { IFlashSalePeriod } from '../../../../../types/IFlashSalePeriod';

interface IPeriodProductTableDataProps {
    periodData: IFlashSalePeriod
    handleDeleteData: (flashSaleHourId: number, isbnCode: string) => void;
}
const PeriodProductTableData = (props: IPeriodProductTableDataProps) => {
    const { periodData, handleDeleteData } = props

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
                                Mã số
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tên sản phẩm
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Giá sau giảm
                            </Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Xóa khỏi sự kiện
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {periodData.products && periodData.products.length > 0 ? (
                        (periodData.products.map((productFlashSale) => (
                            <TableRow key={productFlashSale.id}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {productFlashSale.product_info.isbn_code}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {
                                            truncateText(
                                                productFlashSale.product_info.name,
                                                20
                                            )
                                        }
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {productFlashSale.product_info.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <CustomButton
                                        color='error'
                                        size="small"
                                        onClick={() => handleDeleteData(periodData.id, productFlashSale.isbn_code)}
                                    >
                                        <IconTrash />
                                    </CustomButton>
                                </TableCell>
                            </TableRow>
                        )))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5}>
                                <Typography align="center" variant="h4" mt={2}>
                                    Danh sách sản phẩm sự kiện trống
                                </Typography>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    )
}

export default PeriodProductTableData
