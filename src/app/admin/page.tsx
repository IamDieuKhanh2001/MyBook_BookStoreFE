"use client"
import React from 'react'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/components/container/PageContainer'
import SalesOverview from '@/components/dashboard/SalesOverview';
import YearlyBreakup from '@/components/dashboard/YearlyBreakup';
import MonthlyEarnings from '@/components/dashboard/MonthlyEarnings';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import ProductPerformance from '@/components/dashboard/ProductPerformance';
import Blog from '@/components/dashboard/Blog';
const AdminHomePage = () => {
    return (
        <PageContainer title="Dashboard" description="this is Dashboard"
        // footer={
        //     <Typography variant="h5" sx={{ color: (theme) => theme.palette.warning.main }}>
        //         Footer
        //     </Typography>
        // }
        // cardheading={"Card heading"}
        // headtitle={"Head title"}
        // headsubtitle={"Head subtitle"}
        // middlecontent={"Middle content"}
        >
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
                    <Grid item xs={12}>
                        <Blog />
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
}

export default AdminHomePage;
