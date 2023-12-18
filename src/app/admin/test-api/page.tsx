"use client"
import React, { useEffect, type ReactElement } from 'react';
import { Button, Stack } from '@mui/material';
import PageContainer from '@/components/admin/container/PageContainer';
import DashboardCard from '@/components/shared/DashboardCard';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import useAxiosAuth from '@/lib/hooks/utils/useAxiosAuth';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconEye, IconTrash } from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';
import { IconPlus } from '@tabler/icons-react';
import FlashSaleTableRow from '@/components/admin/FlashSale/FlashSaleDayTableData/FlashSaleTableRow/FlashSaleTableRow';
import FlashSaleDayTableData from '@/components/admin/FlashSale/FlashSaleDayTableData/FlashSaleDayTableData';

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

const rows = [
    createData(1, "Flash sale tưng bừng 1"),
    createData(2, "Flash sale tưng bừng 2"),
    createData(3, "Flash sale tưng bừng 3"),
];

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