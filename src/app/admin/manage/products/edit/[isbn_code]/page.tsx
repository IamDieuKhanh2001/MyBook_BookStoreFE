'use client'
import CustomButton from '@/components/forms/theme-elements/CustomButton';
import React from 'react'
import {
  Box,
  Grid,
  Typography,
} from '@mui/material'
import LinearStepper from '@/components/admin/LinearStepper/LinearStepper'
import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import { IconArrowBackUp } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { IBook } from '../../../../../../../types/IBook';
import EditInfoProduct from '@/components/admin/Product/EditProduct/EditInfoProduct/EditInfoProduct';
import EditProductImg from '@/components/admin/Product/EditProduct/EditProductImg/EditProductImg';
import useAPIBook from '@/lib/hooks/api/useAPIBook';

interface ProductManagementEditPageProps {
  params: {
    isbn_code: string;
  };
}
const ProductManagementEditPage = ({ params }: ProductManagementEditPageProps) => {
  const steps = ['Sửa thông tin sách', 'Sửa danh sách ảnh', 'Kiểm tra'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});
  const router = useRouter()
  const { getBookDetail } = useAPIBook()
  const { data, error, isLoading, mutate } = getBookDetail(params.isbn_code)

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
    router.push(`/admin/manage/products/detail/${params.isbn_code}`)
  }
  return (
    <>
      <PageContainer title='Product edit' description='Add new product'>
        <Grid item xs={12} lg={8}>
          <DashboardCard
            title='Sửa sản phẩm'
            subtitle='Sửa thông tin sản phẩm bày bán'
          >
            <Box sx={{ width: { xs: '280px', sm: 'auto' } }}>
              <CustomButton
                startIcon={<IconArrowBackUp />}
                color="secondary"
                size='small' disableElevation variant="contained" href=""
                sx={{ mb: 3 }}
                onClick={() => {
                  router.back()
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
              <EditInfoProduct
                displayTab={activeStep === 0 ? true : false}
                setCurrentStepCompleted={setCurrentStepCompleted}
                stepCompleted={completed[0]}
                productEdit={data}
              />
              {/* step 2: Add Img product */}
              <EditProductImg
                displayTab={activeStep === 1 ? true : false}
                setCurrentStepCompleted={setCurrentStepCompleted}
                stepCompleted={completed[1]}
                productEdit={data}
                mutate={mutate}
              />
              {/* step 3: Recheck info */}

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

export default ProductManagementEditPage
