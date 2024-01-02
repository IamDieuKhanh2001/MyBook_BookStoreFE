"use client"

import React from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, Avatar, Select, MenuItem, Box, SelectChangeEvent } from '@mui/material';
import { IconArrowDownLeft, IconArrowUpLeft } from '@tabler/icons-react';

import DashboardCard from '../../shared/DashboardCard';
import useAPIStatistic from '@/lib/hooks/api/useAPIStatistic';

const YearlyBreakup = () => {
  const [fromYearSelected, setFromYearSelected] = React.useState<number>(new Date().getFullYear());
  const [toYearSelected, setToYearSelected] = React.useState<number>(new Date().getFullYear() - 1);
  const { getCompareYear } = useAPIStatistic()
  const { data, isLoading } = getCompareYear(fromYearSelected, toYearSelected)
  const currentYear = new Date().getFullYear()

  // chart color
  const theme = useTheme();
  const primary = theme.palette.success.main;
  const primarylight = theme.palette.info.main;
  const successlight = theme.palette.success.light;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, primarylight, '#F9F9FD'],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };
  const seriescolumnchart: any = [
    data.current_year_revenue,
    data.previous_year_revenue,
  ];

  const handleChangeFromYear = (year: number) => {
    setFromYearSelected(year)
  }

  const handleChangeToYear = (year: number) => {
    setToYearSelected(year)
  }

  return (
    <DashboardCard
      title={`Doanh thu của năm`}
      action={
        <Select
          labelId="from-year-select"
          id="from-year-select"
          value={fromYearSelected}
          size="small"
          onChange={(e: SelectChangeEvent<number>) => handleChangeFromYear(+e.target.value)}
        >
          {[0, 1, 2, 3, 4].map((value, key) => (
            <MenuItem disabled={(currentYear - value) === toYearSelected} key={key} value={currentYear - value}>{currentYear - value}</MenuItem>
          ))}
        </Select>
      }
    >
      <Grid container spacing={3}>
        <Stack
          direction="row"
          spacing={1}
          mt={1}
          ml={3}
          alignItems="center"
        >
          <Box
            sx={{ ml: 2 }}
          >
            So với năm
          </Box>
          <Select
            labelId="to-year-select"
            id="to-year-select"
            value={toYearSelected}
            size="small"
            onChange={(e: SelectChangeEvent<number>) => handleChangeToYear(+e.target.value)}
          >
            {[0, 1, 2, 3, 4].map((value, key) => (
              <MenuItem disabled={(currentYear - value) === fromYearSelected} key={key} value={currentYear - value}>{currentYear - value}</MenuItem>
            ))}
          </Select>
        </Stack>
        {/* column */}
        <Grid item xs={7} sm={7}>
          <Typography variant="h3" fontWeight="700">
            {data.current_year_revenue?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </Typography>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
              {data.financial_performance === 'decrease' ? (
                <IconArrowDownLeft width={20} color="#39B69A" />
              ) : (
                <IconArrowUpLeft width={20} color="#39B69A" />
              )}
            </Avatar>
            <Typography variant="subtitle2" fontWeight="600">
              {data.financial_performance === 'decrease' ? "-" : "+"}{data.percentage_change}%
            </Typography>
          </Stack>
          <Stack spacing={3} mt={5} direction="row">
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primary, svg: { display: 'none' } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                {data.current_year}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primarylight, svg: { display: 'none' } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                {data.previous_year}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* column */}
        <Grid item xs={5} sm={5}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            height="150px"
            width={"100%"}
          />
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default YearlyBreakup;
