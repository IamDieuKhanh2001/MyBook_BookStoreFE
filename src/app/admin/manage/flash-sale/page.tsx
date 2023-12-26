'use client'
import PageContainer from '@/components/admin/container/PageContainer'
import React, { useState, useEffect } from 'react'
import { Alert, AlertTitle, Box, Button, Grid } from '@mui/material'
import DashboardCard from '@/components/shared/DashboardCard'
import { IconPlus } from '@tabler/icons-react'
import FlashSaleDayTableData from '@/components/admin/FlashSale/FlashSaleDayTableData/FlashSaleDayTableData'
import CreateFlashSaleDayModal from '@/components/admin/FlashSale/CreateFlashSaleDayModal/CreateFlashSaleDayModal'
import useAPIFlashSale from '@/lib/hooks/api/useAPIFlashSale'
import { useInView } from 'react-intersection-observer'

const FlashSalePage = () => {
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
    const { getFlashSaleDayListPaginated } = useAPIFlashSale()
    const { paginatedData, isReachedEnd, error, mutate, setSize } = getFlashSaleDayListPaginated()

    useEffect(() => {
        if (inView) {
            setSize((previousSize) => previousSize + 1)
        }
    }, [inView]);

    return (
        <>
            <PageContainer title='Flash sale day CRUD' description='CRUD Operation for Flash sale day'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Sự kiện Flash Sale'
                        subtitle='Quản lý danh sách sự kiện Flash Sale'
                    >
                        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                            {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )}
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
                            <FlashSaleDayTableData
                                flashSaleDayList={paginatedData}
                                isReachedEnd={isReachedEnd}
                                loadMoreRef={ref}
                            />
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>
            {/* Modal  */}
            <CreateFlashSaleDayModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
                mutate={mutate}
            />
        </>
    )
}

export default FlashSalePage
