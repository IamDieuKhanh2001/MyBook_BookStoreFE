import React from 'react'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/components/admin/container/PageContainer'
import SalesOverview from '@/components/admin/dashboard/SalesOverview';
import YearlyBreakup from '@/components/admin/dashboard/YearlyBreakup';
import MonthlyEarnings from '@/components/admin/dashboard/MonthlyEarnings';
import RecentTransactions from '@/components/admin/dashboard/RecentTransactions';
import ProductPerformance from '@/components/admin/dashboard/ProductPerformance';
const AdminHomePage = () => {
    return (
        <PageContainer title="Dashboard" description="this is Dashboard">
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                        <SalesOverview />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <YearlyBreakup />
                            </Grid>
                            <Grid item xs={12}>
                                <MonthlyEarnings />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <RecentTransactions />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <ProductPerformance />
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
}

export default AdminHomePage;
