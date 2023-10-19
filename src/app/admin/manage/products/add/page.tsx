'use client'
import LinearStepper from '@/components/admin/LinearStepper/LinearStepper'
import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import {
    Alert,
    AlertTitle,
    CircularProgress,
    Box,
    Button,
    Grid,
    styled,
    useTheme,
} from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';
import AddInfoProduct from '@/components/admin/Product/AddProduct/AddInfoProduct/AddInfoProduct'
import AddProductImg from '@/components/admin/Product/AddProduct/AddProductImg/AddProductImg'

const AddProductPage = () => {
    const steps = ['Thêm thông tin sách', 'Thêm ảnh', 'Kiểm tra'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});
    const theme = useTheme();
    const CustomButton = styled(Button)(({ theme }) => ({
        '&:disabled': {
            backgroundColor: '#757575',

        },
    }));

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };
    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    return (
        <>
            <PageContainer title='Product add' description='Add new product'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Thêm sản phẩm mới'
                        subtitle='Thêm sản phẩm bày bán mới'
                    >
                        <Box sx={{ width: { xs: '280px', sm: 'auto' } }}>
                            {/* {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )} */}
                            <LinearStepper
                                activeStep={activeStep}
                                setActiveStep={setActiveStep}
                                completed={completed}
                                steps={steps}
                            />
                            <Typography fontSize={25} sx={{ mt: 3, fontWeight: 'bold', }} paragraph>
                                Bước {activeStep + 1}: {steps[activeStep]} {completed[activeStep] && '(Đã hoàn thành)'}
                            </Typography>
                            {/* step 1: Add Product info */}
                            <AddInfoProduct
                                displayTab={activeStep === 0 ? true : false}
                            />
                            {/* step 2: Add Img product */}
                            <AddProductImg
                                displayTab={activeStep === 1 ? true : false}
                            />
                            <div>
                                {allStepsCompleted() ? (
                                    <React.Fragment>
                                        <Typography sx={{ mt: 2, mb: 1 }}>
                                            All steps completed - you&apos;re finished
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                            <Box sx={{ flex: '1 1 auto' }} />
                                        </Box>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
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
                                                Tiếp theo
                                            </CustomButton>
                                            {activeStep !== steps.length &&
                                                (completed[activeStep] ? (
                                                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                                        Bước {activeStep + 1} đã hoàn thành
                                                    </Typography>
                                                ) : (
                                                    <CustomButton variant="contained" color="secondary" onClick={handleComplete}>
                                                        {completedSteps() === totalSteps() - 1
                                                            ? 'Kết thúc'
                                                            : 'Hoàn tất'}
                                                    </CustomButton>
                                                ))}
                                        </Box>
                                    </React.Fragment>
                                )}
                            </div>
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>
        </>
    )
}

export default AddProductPage
