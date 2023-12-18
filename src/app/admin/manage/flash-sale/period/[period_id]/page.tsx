'use client'

import PageContainer from '@/components/admin/container/PageContainer'
import React, { useState } from 'react'
import { Box, Button, Grid, Typography, Alert, AlertTitle } from '@mui/material'
import DashboardCard from '@/components/shared/DashboardCard'
import { IconArrowBackUp, IconPlus } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import useAPIFlashSale from '@/lib/hooks/api/useAPIFlashSale'
import PeriodProductTableData from '@/components/admin/FlashSale/PeriodProductTableData/PeriodProductTableData'
import AddProductEventModal from '@/components/admin/FlashSale/AddProductEventModal/AddProductEventModal'
import { useConfirm } from 'material-ui-confirm'
import { toast } from 'react-toastify'

interface IFlashSalePeriodPageProps {
    params: {
        period_id: number;
    };
}
const FlashSalePeriodPage = (props: IFlashSalePeriodPageProps) => {
    const router = useRouter()
    const { params } = props
    const { getFlashSalePeriodDetail, deleteProductFromPeriod } = useAPIFlashSale()
    const { data, error, isLoading, mutate } = getFlashSalePeriodDetail(params.period_id)
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);

    const confirm = useConfirm();

    const handleDeleteData = async (flashSaleHourId: number, isbnCode: string) => {
        confirm({
            title: `Đồng ý xóa ${isbnCode} khỏi khung giờ sale ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await deleteProductFromPeriod(flashSaleHourId, isbnCode)
                    mutate()
                    toast.success("Xóa sản phẩm flash sale hoàn tất id: " + isbnCode)
                }
                catch (e) {
                    toast.error("Something when wrong, please try again")
                }
            })
    }

    return (
        <>
            <PageContainer title='Period detail' description='Period detail'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title={`Khung giờ: ${data.time_start}-${data.time_end}`}
                        subtitle={`Ngày `}
                    >
                        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                            <Button
                                sx={{ mb: 2 }}
                                startIcon={<IconArrowBackUp />}
                                color="secondary"
                                size='small' disableElevation variant="contained" href=""
                                onClick={() => {
                                    router.push('/admin/manage/flash-sale')
                                }}
                            >
                                Trở về
                            </Button>
                            <Button
                                sx={{ mb: 2, ml: 2 }}
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
                            </Button>
                            {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )}
                            {!isLoading && !error ? (
                                <>
                                    <Typography fontSize={20} paragraph>
                                        id: {data.id}
                                    </Typography>
                                    <Typography fontSize={20} paragraph>
                                        Flash sale id: {data.flash_sale_id}
                                    </Typography>
                                    <Typography fontSize={20} paragraph>
                                        Phần trăm giảm: {data.percent_discount}
                                    </Typography>
                                    <Typography fontSize={20} paragraph>
                                        Giờ bắt đầu: {data.time_start}
                                    </Typography>
                                    <Typography fontSize={20} paragraph>
                                        Giờ kết thúc: {data.time_end}
                                    </Typography>
                                    <Typography fontSize={20} paragraph>
                                        Ngày tạo: {data.created_at}
                                    </Typography>
                                    <Typography fontSize={20} paragraph>
                                        Lần cuối chỉnh sửa: {data.updated_at}
                                    </Typography>
                                    <Typography variant="h3" gutterBottom>
                                        Danh sách sản phẩm khung giờ "{data.time_start}-{data.time_end}"
                                    </Typography>
                                    <PeriodProductTableData
                                        periodData={data}
                                        handleDeleteData={handleDeleteData}
                                    />
                                </>
                            ) : (
                                <>
                                    <Typography variant="h2" gutterBottom>
                                        Loading data ...
                                    </Typography>
                                </>
                            )}
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>
            {/* Modal  */}
            <AddProductEventModal
                periodId={data.id}
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
                mutate={mutate}
            />
        </>
    )
}

export default FlashSalePeriodPage
