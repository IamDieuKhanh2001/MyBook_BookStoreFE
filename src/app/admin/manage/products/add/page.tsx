'use client'
import LinearStepper from '@/components/admin/LinearStepper/LinearStepper'
import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import {
    Box,
    Grid,
} from '@mui/material'
import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography';
import AddInfoProduct from '@/components/admin/Product/AddProduct/AddInfoProduct/AddInfoProduct'
import AddProductImg from '@/components/admin/Product/AddProduct/AddProductImg/AddProductImg'
import CustomButton from '@/components/forms/theme-elements/CustomButton'
import { useRouter } from 'next/navigation'
import SubmittedInfoSumary from '@/components/admin/Product/AddProduct/SubmittedInfoSumary/SubmittedInfoSumary'
import { IconArrowBackUp } from '@tabler/icons-react'
import { IBook } from '../../../../../../types/IBook'

const AddProductPage = () => {
    const steps = ['Thêm thông tin sách', 'Thêm ảnh', 'Kiểm tra'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});
    const router = useRouter()
    const [productCreated, setProductCreated] = React.useState<IBook | null>(null)

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

    const setCurrentStepCompleted = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    }

    const handleFinish = () => {
        router.push('/admin/manage/products')
    }

    useEffect(() => {
        console.log(productCreated)
    }, [productCreated])
    return (
        <>
            <PageContainer title='Product add' description='Add new product'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Thêm sản phẩm mới'
                        subtitle='Thêm sản phẩm bày bán mới'
                    >
                        <Box sx={{ width: { xs: '280px', sm: 'auto' } }}>
                            <CustomButton
                                startIcon={<IconArrowBackUp />}
                                color="secondary"
                                size='small' disableElevation variant="contained" href=""
                                sx={{ mb: 3 }}
                                onClick={() => {
                                    router.push('/admin/manage/products')
                                }}
                            >
                                Trở về
                            </CustomButton>
                            <LinearStepper
                                activeStep={activeStep}
                                completed={completed}
                                steps={steps}
                            />
                            <Typography fontSize={25} sx={{ mt: 3, fontWeight: 'bold', }} paragraph>
                                Bước {activeStep + 1}: {steps[activeStep]} {completed[activeStep] && '(Đã hoàn thành)'}
                            </Typography>
                            {/* step 1: Add Product info */}
                            <AddInfoProduct
                                displayTab={activeStep === 0 ? true : false}
                                setCurrentStepCompleted={setCurrentStepCompleted}
                                stepCompleted={completed[0]}
                                setProductCreated={setProductCreated}
                            />
                            {/* step 2: Add Img product */}
                            <AddProductImg
                                displayTab={activeStep === 1 ? true : false}
                                setCurrentStepCompleted={setCurrentStepCompleted}
                                stepCompleted={completed[1]}
                                productCreated={productCreated}
                            />
                            {/* step 3: Recheck info */}
                            <SubmittedInfoSumary displayTab={true} />
                            {/* Button panel change tab */}
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
                                    <CustomButton
                                        disabled={!completed[activeStep]}
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleNext}
                                    >
                                        Tiếp theo
                                    </CustomButton>
                                    {
                                        completedSteps() === totalSteps() - 1 &&
                                        (
                                            <CustomButton
                                                variant="contained"
                                                color="secondary"
                                                onClick={handleFinish}
                                                sx={{ ml: 1 }}
                                            >
                                                Kết thúc
                                            </CustomButton>
                                        )
                                    }
                                </Box>
                            </React.Fragment>
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>
        </>
    )
}

export default AddProductPage
