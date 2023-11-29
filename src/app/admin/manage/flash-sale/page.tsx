'use client'
import PageContainer from '@/components/admin/container/PageContainer'
import React from 'react'
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import DashboardCard from '@/components/shared/DashboardCard'
import { IconPlus, IconTrash } from '@tabler/icons-react'
import FlashSaleDayTableData from '@/components/admin/FlashSale/FlashSaleDayTableData/FlashSaleDayTableData'
import CreateFlashSaleDayModal from '@/components/admin/FlashSale/CreateFlashSaleDayModal/CreateFlashSaleDayModal'

function createData(
    id: number,
    event_name: string
) {
    return {
        id,
        event_name,
        hours: [
            {
                id: 1,
                percent_discount: 50,
                time_start: "00:00:00",
                time_end: "00:00:00",
                created_at: "2023-11-29T09:12:48.000+07:00",
                updated_at: "2023-11-29T09:12:48.000+07:00",
            },
            {
                id: 2,
                percent_discount: 60,
                time_start: "00:00:00",
                time_end: "00:00:00",
                created_at: "2023-11-29T09:12:48.000+07:00",
                updated_at: "2023-11-29T09:12:48.000+07:00",
            },
        ],
    };
}

const flashSaleRows = [
    createData(1, "Flash sale tưng bừng 1"),
    createData(2, "Flash sale tưng bừng 2"),
    createData(3, "Flash sale tưng bừng 3"),
    createData(4, "Flash sale tưng bừng 4"),
];

const FlashSalePage = () => {
    const [showModalCreate, setShowModalCreate] = React.useState<boolean>(false);

    return (
        <>
            <PageContainer title='Flash sale day CRUD' description='CRUD Operation for Flash sale day'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Flash sale day List'
                        subtitle='Manage parent Flash sale day list'
                    >
                        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                            {/* {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )} */}
                            <Button
                                sx={{ mb: 2 }}
                                startIcon={<IconPlus />}
                                color="success"
                                size='small'
                                disableElevation
                                variant="contained"
                                onClick={() => {
                                    setShowModalCreate(true);
                                }}
                            >
                                Thêm một sự kiện
                            </Button>
                            {/* data table  */}
                            <FlashSaleDayTableData flashSaleDayList={flashSaleRows} />
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>
            {/* Modal  */}
            <CreateFlashSaleDayModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            />
        </>
    )
}

export default FlashSalePage
