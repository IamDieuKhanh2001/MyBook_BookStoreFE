'use client'

import CustomButton from '@/components/forms/theme-elements/CustomButton';
import { IconPlus, IconTrash } from '@tabler/icons-react';
import { useConfirm } from 'material-ui-confirm';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { truncateText } from '@/lib/utils/TextUtils';
import { IFlashSalePeriod } from '../../../../../types/IFlashSalePeriod';
import AddProductEventModal from '../AddProductEventModal/AddProductEventModal';

interface IPeriodProductTableDataProps {
    periodData: IFlashSalePeriod
}
const PeriodProductTableData = (props: IPeriodProductTableDataProps) => {
    const { periodData } = props
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const confirm = useConfirm();

    const handleDeleteData = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {

                    toast.success("Xóa sản phẩm flash sale hoàn tất id: " + id)
                }
                catch (e) {
                    toast.error("Something when wrong, please try again")
                }
            })
    }

    return (
        <>
            <CustomButton
                sx={{ mt: 2 }}
                startIcon={<IconPlus />}
                color="success"
                size='small'
                disableElevation
                variant="contained"
                onClick={() => {
                    setShowModalCreate(true);
                }}
            >
                Thêm sản phẩm cho sự kiện
            </CustomButton>
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
                                        onClick={() => handleDeleteData(productFlashSale.id)}
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
            {/* Modal  */}
            <AddProductEventModal
                periodId={periodData.id}
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            />
        </>
    )
}

export default PeriodProductTableData
