"use client"
import { useEffect, type ReactElement } from 'react';
import { Button, Typography } from '@mui/material';
import PageContainer from '@/components/container/PageContainer';
import DashboardCard from '@/components/shared/DashboardCard';
import { APIGetTestAdmin } from '@/lib/axios/api/testAPI';
import { useSession } from 'next-auth/react';

const TestPage = () => {
    const { data: session } = useSession();

    const LoadGetTestAPIAdmin = async () => {
        try {
            const res = await APIGetTestAdmin();
            console.log(res)
        } catch (e) {
            console.log(">>>>>Fetch fail ", e)
        }
    }

    return (
        <PageContainer title="Sample Page" description="this is Sample page">
            <DashboardCard title="Sample Page">
                <>
                    <Typography>Test API admin</Typography>
                    {session?.user ? (
                        <><Typography variant="h5" sx={{ color: (theme) => theme.palette.success.main }}>
                            xin chào {session?.user.userInfo?.userName}
                        </Typography>
                            <Typography variant="body1" sx={{ color: (theme) => theme.palette.success.main }}>
                                Tên tk:{session?.user.userInfo?.userName}
                            </Typography>
                            <Typography variant="body1" sx={{ color: (theme) => theme.palette.success.main }}>
                                jwt:{session?.user.jwtToken}
                            </Typography>
                            <Typography variant="body1" sx={{ color: (theme) => theme.palette.success.main }}>
                                ROLE name: {session?.user.userInfo?.roles[0].roleName}
                            </Typography></>
                    ) : (
                        <><Typography variant="h5" sx={{ color: (theme) => theme.palette.warning.main }}>
                            Bạn chưa đăng nhập
                        </Typography>
                            <Typography variant="body1" sx={{ color: (theme) => theme.palette.warning.main }}>
                                chưa đăng nhập
                            </Typography></>
                    )}
                    <Button size='large' variant="contained" disableElevation color="secondary" onClick={() => LoadGetTestAPIAdmin()}>
                        Fetch api admin
                    </Button>
                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.success.main }}>
                        Kiểm tra console
                    </Typography>
                </>
            </DashboardCard>
        </PageContainer>
    );
};

export default TestPage;