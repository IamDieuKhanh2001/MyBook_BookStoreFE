'use client'
import React from 'react'
import { Button, useTheme, Table, Chip, TableBody, TableCell, TableHead, TableRow, Typography, Stack, CircularProgress, Box } from '@mui/material'
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

const VoucherTableData = () => {
    const theme = useTheme()
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
                                Mã voucher
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tên
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Loại
                            </Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant="subtitle2" fontWeight={600}>
                                xem chi tiết
                            </Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Sửa
                            </Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Xóa
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                bac224024
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                bac224024
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Chip
                                sx={{
                                    px: "4px",
                                    backgroundColor: theme.palette.success.main,
                                    color: "#fff",
                                }}
                                size="small"
                                label={'General'}
                            ></Chip>
                        </TableCell>
                        <TableCell align="right">
                            <Button
                                color='success'
                                size="small"
                                onClick={() => {
                                    router.push(`/admin/manage/voucher/detail/1`)
                                }}
                            >
                                <IconEye />
                            </Button>
                        </TableCell>
                        <TableCell align="right">
                            <Button
                                color='info'
                                size="small"
                            // onClick={() => {
                            //     router.push(`/admin/manage/products/edit/${item.isbn_code}`)
                            // }}
                            >
                                <IconEdit />
                            </Button>
                        </TableCell>
                        <TableCell align="right">
                            <Button
                                color='error'
                                size="small"
                            // onClick={() => handleDeleteData(item.isbn_code)}
                            >
                                <IconTrash />
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default VoucherTableData
