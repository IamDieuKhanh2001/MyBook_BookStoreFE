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
    setActiveStep: React.Dispatch<React.SetStateAction<number>>
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
    const { activeStep, setActiveStep, completed, steps } = props

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

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <CustomStep key={label} completed={completed[index]}>
                        <StepButton onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </CustomStep>
                ))}
            </Stepper>
            {/* <div>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                            Step {activeStep + 1}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <CustomButton
                                color="secondary"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                size='small' disableElevation variant="contained" href="">
                                Trở về
                            </CustomButton>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <CustomButton variant="contained" color="secondary" onClick={handleNext} sx={{ mr: 1 }}>
                                Next
                            </CustomButton>
                            {activeStep !== steps.length &&
                                (completed[activeStep] ? (
                                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                        Step {activeStep + 1} already completed
                                    </Typography>
                                ) : (
                                    <CustomButton variant="contained" color="secondary" onClick={handleComplete}>
                                        {completedSteps() === totalSteps() - 1
                                            ? 'Finish'
                                            : 'Complete Step'}
                                    </CustomButton>
                                ))}
                        </Box>
                    </React.Fragment>
                )}
            </div> */}
        </Box>
    );
}