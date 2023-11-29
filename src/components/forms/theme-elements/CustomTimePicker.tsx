'use client'
import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dynamic from 'next/dynamic';
import { useTheme } from '@mui/material'
import dayjs from 'dayjs';

const DynamicTimePicker = dynamic(() => import('@mui/x-date-pickers/TimePicker')
    .then((module) => (module.TimePicker)), {
    ssr: false, // Tắt Server-side Rendering (SSR) nếu cần
});

interface ICustomTimePickerProps {
    value: string,
    onChangeEvent: (value: any) => void
}
const CustomTimePicker = ({ value, onChangeEvent }: ICustomTimePickerProps) => {
    const theme = useTheme()

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DynamicTimePicker
                views={['hours', 'minutes', 'seconds']}
                format="HH:mm:ss"
                value={dayjs(value).format('HH:mm:ss')}
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
                }}
            />
        </LocalizationProvider>
    )
}

export default CustomTimePicker
