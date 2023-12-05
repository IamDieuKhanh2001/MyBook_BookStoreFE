'use client'
import DashboardCard from '@/components/shared/DashboardCard'
import { Avatar, Box as BoxMaterial, Grid } from '@mui/material'
import React from 'react'

const OrderReview = () => {
    return (
        <>
            <BoxMaterial sx={{ mt: 2 }}>
                <DashboardCard
                    title={`Phản hồi khách hàng`}
                    subtitle={`Khách hàng : quachdieukhanh@gmail.com`}
                >
                    <BoxMaterial sx={{ width: { xs: '280px', sm: 'auto' } }}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar alt="Remy Sharp" src={'/img/avatar/testimonial-1.jpg'} />
                            </Grid>
                            <Grid justifyContent="left" item xs zeroMinWidth>
                                <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                                <p style={{ textAlign: "left" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                    luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                                    Suspendisse congue vulputate lobortis. .{" "}
                                </p>
                                <p style={{ textAlign: "left", color: "gray" }}>
                                    1 minute ago
                                </p>
                            </Grid>
                        </Grid>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid justifyContent="left" item xs zeroMinWidth>
                                <h6 style={{ margin: 0, textAlign: "left" }}>Chưa có phản hồi</h6>
                            </Grid>
                        </Grid>
                    </BoxMaterial>
                </DashboardCard>
            </BoxMaterial>
        </>
    )
}

export default OrderReview
