'use client'
import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dynamic from 'next/dynamic';
import { useTheme } from '@mui/material'
import dayjs from 'dayjs';

const DynamicDatePicker = dynamic(() => import('@mui/x-date-pickers/DatePicker')
    .then((module) => (module.DatePicker)), {
    ssr: false, // Tắt Server-side Rendering (SSR) nếu cần
});
interface ICustomDatePickerProps {
    value: string,
    onChangeEvent: (value: any) => void
    disablePast?: boolean
    disableFuture?: boolean
}
const CustomDatePicker = ({ value, onChangeEvent, disablePast = false, disableFuture = false }: ICustomDatePickerProps) => {
    const theme = useTheme()

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DynamicDatePicker
                views={["day", "month", "year"]}
                format="DD-MM-YYYY"
                disableFuture={disableFuture}
                disablePast={disablePast}
                value={dayjs(value).format('DD-MM-YYYY')}
                onChange={onChangeEvent}
                slotProps={{
                    textField: {
                        fullWidth: true,
                        size: 'medium',
                        sx: {
                            '&.MuiFormControl-root': {
                                border: '1px solid #AAB4BE',
                            },
                        },
                    },
                    calendarHeader: {
                        sx: {
                            "&.MuiPickersCalendarHeader-root": {
                                backgroundColor: theme.palette.secondary.dark,
                            },
                        },
                    },
                    layout: {
                        sx: {
                            "&.MuiPickersLayout-root": {
                                color: 'white',
                                backgroundColor: theme.palette.grey[600],
                            }
                        }
                    },
                    openPickerButton: {
                        sx: {
                            '&.MuiButtonBase-root': {
                                color: theme.palette.secondary.dark,
                            }
                        }
                    },
                    day: {
                        sx: {
                            "&.MuiPickersDay-root": {
                                '&:not(.Mui-selected)': {
                                    backgroundColor: theme.palette.primary.main,
                                    border: 'none',
                                },
                                '&:hover': {
                                    backgroundColor: theme.palette.secondary.dark,
                                },
                                '&.Mui-selected': {
                                    backgroundColor: theme.palette.secondary.dark,
                                }
                            },
                        },
                    },
                }}
            />
        </LocalizationProvider>
    )
}

export default CustomDatePicker
