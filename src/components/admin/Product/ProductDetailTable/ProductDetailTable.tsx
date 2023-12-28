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
import { IBook } from '../../../../../types/IBook'

interface IProductDetailTableProps {
    data: IBook
}
const ProductDetailTable = (props: IProductDetailTableProps) => {
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
                                Thông tin sản phẩm {data?.isbn_code}
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
                                {data?.isbn_code}
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
                                        data?.name,
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
                                {data?.ccategory.name}
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
                                {
                                    truncateText(
                                        data?.desc,
                                        100
                                    )
                                }
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
                                {data?.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
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
                                {data?.weight} g
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
                                {data?.quantity}
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
                                {data?.number_of_pages}
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
                                {data?.publishing_year}
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
                                {data?.author?.author_name}
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
                                {data?.publisher?.name}
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
                                {data?.provider?.name}
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
                                {data?.language?.language_name}
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
                                {data?.book_form?.name}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetailTable
