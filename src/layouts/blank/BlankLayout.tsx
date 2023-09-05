"use client"

import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';

interface BlankLayoutProps {
  children: React.ReactNode;
}

//Layout trống
//Warp bên trong layout.tsx
const BlankLayout = ({ children }: BlankLayoutProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ background: theme.palette.primary.dark, }}>{children}</Box>
  )
};

export default BlankLayout;



