'use client'
import React from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography, Stack, CircularProgress, Box } from '@mui/material'
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react'
import { IBook } from '../../../../../types/IBook'
import { truncateText } from '@/lib/utils/TextUtils'
import { useRouter } from 'next/navigation'

interface IProductTableDataProps {
    bookListLoaded: IBook[]
    handleDeleteData: (id: string) => void
    isReachedEnd: boolean | undefined
    loadMoreRef: (node?: Element | null | undefined) => void
}
const ProductTableData = (props: IProductTableDataProps) => {
    const router = useRouter()
    const {
        bookListLoaded,
        handleDeleteData,
        isReachedEnd,
        loadMoreRef,
    } = props

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
                                Mã quốc tế
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tên sách
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
                    {bookListLoaded && bookListLoaded.length > 0 ? (
                        (bookListLoaded.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {item.isbn_code}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {truncateText(
                                            item.name,
                                            40
                                        )}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='success'
                                        size="small"
                                        onClick={() => {
                                            router.push(`/admin/manage/products/detail/${item.isbn_code}`)
                                        }}
                                    >
                                        <IconEye />
                                    </Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='info'
                                        size="small"
                                        onClick={() => {
                                            router.push(`/admin/manage/products/edit/${item.isbn_code}`)
                                        }}
                                    >
                                        <IconEdit />
                                    </Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='error'
                                        size="small"
                                        onClick={() => handleDeleteData(item.isbn_code)}
                                    >
                                        <IconTrash />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5}>
                                <Typography align="center" variant="h4" mt={2}>
                                    Danh sách rỗng
                                </Typography>
                            </TableCell>
                        </TableRow>
                    )}
                    {/* Load more product when scroll and see this element  */}
                    {
                        (isReachedEnd === false) && (
                            <TableRow
                                ref={loadMoreRef}
                            >
                                <TableCell align='center' colSpan={5}>
                                    <CircularProgress color="secondary" />
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default ProductTableData
