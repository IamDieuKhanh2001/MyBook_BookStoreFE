'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

interface ILinearStepperProps {
    activeStep: number,
    completed: {
        [k: number]: boolean;
    }
    steps: string[]
}
export default function LinearStepper(props: ILinearStepperProps) {
    // const [activeStep, setActiveStep] = React.useState(0);
    // const [completed, setCompleted] = React.useState<{
    //     [k: number]: boolean;
    // }>({});
    const { activeStep, completed, steps } = props

    const CustomStep = styled(Step)(({ theme }) => ({
        ".MuiButtonBase-root": {
            '.MuiStepLabel-root': {
                '.css-zk89ht-MuiSvgIcon-root-MuiStepIcon-root': {
                    fontSize: '35px',
                    color: theme.palette.grey[300],
                },
                '.MuiStepLabel-label': {
                    fontSize: '15px',
                },
                '.Mui-active': {
                    color: theme.palette.secondary.main,
                },
                '.Mui-completed': {
                    color: theme.palette.success.main,
                }
            },
        },
    }));

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <CustomStep key={label} completed={completed[index]}>
                        <StepButton>
                            {label}
                        </StepButton>
                    </CustomStep>
                ))}
            </Stepper>
        </Box>
    );
}