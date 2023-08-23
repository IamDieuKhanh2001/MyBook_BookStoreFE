"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { Grid, Box, Card, Stack, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { useTheme } from '@mui/material/styles';

// components
import PageContainer from '@/components/container/PageContainer';
import Logo from '@/layouts/full/shared/logo/Logo';
import AuthLogin from '../auth/AuthLogin';


const Login2 = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const theme = useTheme();

  return (
    <>
      <PageContainer title="Login" description="this is Login page">
        {isLoading && (
          //Loading login submitting form
          <Stack sx={{ width: '100%' }} spacing={0}>
            <LinearProgress color="primary" />
          </Stack>
        )}

        <Box
          sx={{
            position: 'relative',
            '&:before': {
              content: '""',
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite',
              position: 'absolute',
              height: '100%',
              width: '100%',
              opacity: '0.3',
            },
          }}
        >
          <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
            <Grid
              item
              xs={12}
              sm={12}
              lg={4}
              xl={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Card elevation={9}
                sx={{
                  p: 4, zIndex: 1, width: '100%', maxWidth: '500px',
                  // color: theme.palette.text.primary,
                  // bgcolor: theme.palette.primary.light,
                }}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Logo />
                </Box>
                <AuthLogin
                  subtext={
                    <Typography variant="subtitle1" textAlign="center" color="textSecondary" mb={1}>
                      My demo App
                    </Typography>
                  }
                  subtitle={
                    <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                      <Typography color="textSecondary" variant="h6" fontWeight="500">
                        New to My App?
                      </Typography>
                      <Typography
                        component={Link}
                        href="/authentication/register"
                        fontWeight="500"
                        sx={{
                          textDecoration: 'none',
                          color: 'primary.main',
                        }}
                      >
                        Create an account
                      </Typography>
                    </Stack>
                  }
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </>
  );
};
export default Login2;
