'use client'
import React from 'react'
import { Box, Tab, styled } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import VoucherType from '@/enum/VoucherType'
import VoucherTableData from '../VoucherTableData/VoucherTableData'
import useAPIVoucher from '@/lib/hooks/api/useAPIVoucher'

const VoucherTab = () => {
    const { getVoucherGeneral, getVoucherMemberExclusive, getVoucherPersonalized } = useAPIVoucher()
    const { paginatedData: voucherGeneralData, isReachedEnd: isReachedEndListGeneral, setSize: setSizeListGeneral } = getVoucherGeneral()
    const { paginatedData: voucherMemberData, isReachedEnd: isReachedEndListME, setSize: setSizeListME } = getVoucherMemberExclusive()
    const { paginatedData: voucherPersonalizedData, isReachedEnd: isReachedEndListPersonalized, setSize: setSizeListPersonalized } = getVoucherPersonalized()
    const [value, setValue] = React.useState<string>(VoucherType.GENERAL);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const CustomTabList = styled(TabList)(({ theme }) => ({
        '& .MuiTabs-indicator': {
            backgroundColor: theme.palette.secondary.main,
        },
    }));

    const CustomTabHeader = styled(Tab)(({ theme }) => ({
        "&.MuiTab-root": {
            color: theme.palette.grey[200],
        },
        "&.Mui-selected": {
            color: theme.palette.secondary.main,
        },
    }));

    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1', mt: 4 }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
                        <CustomTabList onChange={handleChange} aria-label="lab API tabs example">
                            <CustomTabHeader label="Sử dụng cho tất cả" value={VoucherType.GENERAL} />
                            <CustomTabHeader label="Sử dụng cho thành viên" value={VoucherType.MEMBER_EXCLUSIVE} />
                            <CustomTabHeader label="Sử dụng cho cá nhân" value={VoucherType.PERSONALIZED} />
                        </CustomTabList>
                    </Box>
                    <TabPanel sx={{ padding: '24px 0' }} value={VoucherType.GENERAL}>
                        <VoucherTableData
                            data={voucherGeneralData}
                            isReachedEnd={isReachedEndListGeneral}
                            setSize={setSizeListGeneral}
                        />
                    </TabPanel>
                    <TabPanel sx={{ padding: '24px 0' }} value={VoucherType.MEMBER_EXCLUSIVE}>
                        <VoucherTableData
                            data={voucherMemberData}
                            isReachedEnd={isReachedEndListME}
                            setSize={setSizeListME}
                        />
                    </TabPanel>
                    <TabPanel sx={{ padding: '24px 0' }} value={VoucherType.PERSONALIZED}>
                        <VoucherTableData
                            data={voucherPersonalizedData}
                            isReachedEnd={isReachedEndListPersonalized}
                            setSize={setSizeListPersonalized}
                        />
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    )
}

export default VoucherTab
