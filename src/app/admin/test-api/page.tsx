"use client"
import { useEffect, type ReactElement } from 'react';
import { Button, Typography } from '@mui/material';
import PageContainer from '@/components/admin/container/PageContainer';
import DashboardCard from '@/components/shared/DashboardCard';
import { useSession } from 'next-auth/react';
import useAxiosAuth from '@/lib/hooks/useAxiosAuth';
import { toast } from 'react-toastify';

const TestPage = () => {
    const { data: session } = useSession();
    const axiosAuth = useAxiosAuth();

    const LoadGetTestAPIAdmin = async () => {
        try {
            const response = await axiosAuth.get(`/test`);
            console.log(response)
        } catch (error) {
            console.log(">>>>>>", error);
        }
    }

    return (
        <PageContainer title="Sample Page" description="this is Sample page">
            <DashboardCard title="Sample Page">
                <>
                    <Typography>Test API admin</Typography>
                    {session?.user ? (
                        <><Typography variant="h5" sx={{ color: (theme) => theme.palette.success.main }}>
                            xin chào {session?.user.userInfo?.email}
                        </Typography>
                            <Typography variant="body1" sx={{ color: (theme) => theme.palette.success.main }}>
                                Tên tk:{session?.user.userInfo?.email}
                            </Typography>
                            <Typography variant="body1" sx={{ color: (theme) => theme.palette.success.main }}>
                                {session?.user.jwtToken}
                            </Typography>
                            <Typography variant="body1" sx={{ color: (theme) => theme.palette.success.main }}>
                                ROLE name: {session?.user.userInfo?.userRole.name}
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
                    <Button size='large' variant="contained" disableElevation color="secondary" 
                    onClick={() => {
                        toast.success("success")
                    }}
                    >
                        show toast
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