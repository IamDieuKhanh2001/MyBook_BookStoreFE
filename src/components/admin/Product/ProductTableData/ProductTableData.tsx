'use client'
import React from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography, Stack, CircularProgress, Box } from '@mui/material'
import { IconEdit, IconTrash } from '@tabler/icons-react'
import { IBook } from '../../../../../types/IBook'

interface IProductTableDataProps {
    bookListLoaded: IBook[]
    handleDeleteData: (id: string) => void
    isLastPage: boolean
    isLoading: boolean
    loadMoreRef: (node?: Element | null | undefined) => void
}
const ProductTableData = (props: IProductTableDataProps) => {
    const {
        bookListLoaded,
        handleDeleteData,
        isLastPage,
        isLoading,
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
                    {bookListLoaded.length > 0 ? (
                        (bookListLoaded.map((item: IBook) => (
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
                                        {item.name}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='info'
                                        size="small"
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
                                    Empty data list
                                </Typography>
                            </TableCell>
                        </TableRow>
                    )}
                    {/* Load more product when scroll and see this element  */}
                    {
                        (isLastPage === false) && isLoading === false && (
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
