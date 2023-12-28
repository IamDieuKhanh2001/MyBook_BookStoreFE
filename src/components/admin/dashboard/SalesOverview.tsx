"use client"
import React from 'react';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../../shared/DashboardCard';
import dynamic from "next/dynamic";
import useAPIStatistic from '@/lib/hooks/api/useAPIStatistic';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


const SalesOverview = () => {
    const [currentYearSelected, setCurrentYearSelected] = React.useState<number>(new Date().getFullYear());
    const { getYearStatistic } = useAPIStatistic()
    const { data: currentYearStatistic, error, isLoading } = getYearStatistic(currentYearSelected)

    const handleChangeYear = (year: number) => {
        setCurrentYearSelected(year)
    }
    // chart color
    const theme = useTheme();
    const primary = theme.palette.success.main;
    const secondary = theme.palette.warning.main;

    //xaxis label
    const monthLabels = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    // chart
    const optionscolumnchart: any = {
        chart: {
            type: 'bar',
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: '#adb0bb',
            toolbar: {
                show: true,
            },
            height: 370,
        },
        colors: [primary, secondary],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '60%',
                columnWidth: '42%',
                borderRadius: [6],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all',
            },
        },

        stroke: {
            show: true,
            width: 5,
            lineCap: "butt",
            colors: ["transparent"],
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: 'rgba(0,0,0,0.1)',
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        yaxis: {
            tickAmount: 4,
        },
        xaxis: {
            categories: monthLabels,
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
            fillSeriesColor: false,
        },
    };
    const seriescolumnchart: any = [
        {
            name: `Eanings this month in ${currentYearSelected}`,
            data: currentYearStatistic.map((month) => (month.total_revenue)),
        },
        // {
        //     name: 'Expense this month',
        //     data: [100, 250, 325, 215, 250, 310, 280, 250],
        // },
    ];

    return (

        <DashboardCard title={`Thống kê doanh thu năm ${currentYearSelected}`}
            action={
                <Select
                    labelId="month-dd"
                    id="month-dd"
                    value={currentYearSelected}
                    size="small"
                    onChange={(e: SelectChangeEvent<number>) => handleChangeYear(+e.target.value)}
                >
                    <MenuItem value={new Date().getFullYear()}>Năm {new Date().getFullYear()}</MenuItem>
                    <MenuItem value={new Date().getFullYear() - 1}>Năm {new Date().getFullYear() - 1}</MenuItem>
                    <MenuItem value={new Date().getFullYear() - 2}>Năm {new Date().getFullYear() - 2}</MenuItem>
                </Select>
            }
        >
            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="bar"
                height={370}
                width={"100%"}
            />
        </DashboardCard>
    );
};

export default SalesOverview;
