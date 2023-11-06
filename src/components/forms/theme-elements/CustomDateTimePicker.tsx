'use client'
import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dynamic from 'next/dynamic';
import { useTheme } from '@mui/material'

const DynamicDateTimePicker = dynamic(() => import('@mui/x-date-pickers/DateTimePicker')
    .then((module) => (module.DateTimePicker)), {
    ssr: false, // Tắt Server-side Rendering (SSR) nếu cần
});

interface ICustomDateTimePickerProps {
    value: string,
    onChangeEvent: (value: any) => void
}
const CustomDateTimePicker = ({ value, onChangeEvent }: ICustomDateTimePickerProps) => {
    const theme = useTheme()

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DynamicDateTimePicker
                format="DD-MM-YYYY HH:mm:ss"
                views={["year", "month", "day", 'hours', 'minutes', 'seconds']}
                value={value}
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

export default CustomDateTimePicker
