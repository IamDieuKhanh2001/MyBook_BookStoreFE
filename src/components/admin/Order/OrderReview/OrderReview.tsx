'use client'
import DashboardCard from '@/components/shared/DashboardCard'
import { Avatar, Box as BoxMaterial, Grid } from '@mui/material'
import React from 'react'

interface IOrderReviewProps {
    reviewData: {
        id: number
        order_id: number
        rate_star: string
        review_comment: string
        created_at: string
        updated_at: string
    }
    userData: UserInfo
}
const OrderReview = (props: IOrderReviewProps) => {
    const { reviewData, userData } = props

    return (
        <>
            <BoxMaterial sx={{ mt: 2 }}>
                <DashboardCard
                    title={`Phản hồi khách hàng`}
                    subtitle={`Khách hàng : ${userData.email}`}
                >
                    <BoxMaterial sx={{ width: { xs: '280px', sm: 'auto' } }}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar
                                    alt={userData.email}
                                    src={userData.profile?.avatar_source ? userData.profile.avatar_source : '/img/avatar/default.png'}
                                />
                            </Grid>
                            <Grid justifyContent="left" item xs zeroMinWidth>
                                <h4 style={{ margin: 0, textAlign: "left" }}>
                                    {userData.email}
                                </h4>
                                <p style={{ textAlign: "left" }}>
                                    {reviewData.review_comment}.{" "}
                                </p>
                                <p style={{ textAlign: "left", color: "gray" }}>
                                    {reviewData.created_at}
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
