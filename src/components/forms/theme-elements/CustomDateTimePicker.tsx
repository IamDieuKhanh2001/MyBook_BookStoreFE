'use client'
import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dynamic from 'next/dynamic';

const DynamicDateTimePicker = dynamic(() => import('@mui/x-date-pickers/DateTimePicker')
    .then((module) => (module.DateTimePicker)), {
    ssr: false, // Tắt Server-side Rendering (SSR) nếu cần
});

interface ICustomDateTimePickerProps {
    value: string,
    onChangeEvent: (value: any) => void
}
const CustomDateTimePicker = ({ value, onChangeEvent }: ICustomDateTimePickerProps) => {
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
                                backgroundColor: "red",
                            },
                        },
                    },
                    layout: {
                        sx: {
                            "&.MuiPickersLayout-root": {
                                color: 'white',
                                backgroundColor: "gray",
                            }
                        }
                    },
                    openPickerButton: {
                        sx: {
                            '&.MuiButtonBase-root': {
                                color: 'red',
                            }
                        }
                    },
                    day: {
                        sx: {
                            "&.MuiPickersDay-root": {
                                '&:not(.Mui-selected)': {
                                    backgroundColor: 'black',
                                    border: 'none',
                                },
                                '&:hover': {
                                    backgroundColor: 'red',
                                },
                                '&.Mui-selected': {
                                    backgroundColor: "red",
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
