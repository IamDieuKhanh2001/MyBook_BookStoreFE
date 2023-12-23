"use client"
import React from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab } from '@mui/material';
import { IconArrowDownRight, IconArrowUpRight, IconCurrencyDollar } from '@tabler/icons-react';
import DashboardCard from '../../shared/DashboardCard';
import useAPIStatistic from '@/lib/hooks/api/useAPIStatistic';

const MonthlyEarnings = () => {
  const { getMonthStatisticDetail } = useAPIStatistic()
  const { data, error, isLoading } = getMonthStatisticDetail()
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const secondarylight = '#f5fcff';
  const errorlight = '#fdede8';

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [secondarylight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };

  const seriescolumnchart: any = [
    {
      name: '',
      color: secondary,
      data: [25, 66, 20, 40, 12, 58, 20, 25, 301],
    },
    {
      name: '',
      color: secondarylight,
      data: [25, 66, 50, 70, 15, 58, 20, 25, 200],
    },
  ];

  return (
    <DashboardCard
      title="Doanh thu tháng so với năm trước"
      action={
        <Fab color="secondary" size="medium" sx={{ color: '#ffffff' }}>
          <IconCurrencyDollar width={24} />
        </Fab>
      }
      // footer={
      //   <Chart
      //     options={optionscolumnchart}
      //     series={seriescolumnchart}
      //     type="area"
      //     height="60px"
      //     width={"100%"}
      //   />
      // }
    >
      <>
        <Typography variant="h3" fontWeight="700" mt="-20px">
          {data.current_month_year_revenue?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
        </Typography>
        <Stack direction="row" spacing={1} my={1} alignItems="center">
          <Avatar sx={{ bgcolor: errorlight, width: 27, height: 27 }}>
            {data.financial_performance === 'decrease' ? (
              <IconArrowDownRight width={20} color="#FA896B" />
            ) : (
              <IconArrowUpRight width={20} color="#FA896B" />
            )}
          </Avatar>
          <Typography variant="subtitle2" fontWeight="600">
            {data.financial_performance === 'decrease' ? "-" : "+"}{data.percentage_change}%
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            last year
          </Typography>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default MonthlyEarnings;
