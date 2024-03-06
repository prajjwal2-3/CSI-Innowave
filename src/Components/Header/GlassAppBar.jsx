import { styled, AppBar, Container, Toolbar } from '@mui/material';

const GlassAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(100,100,100, 0.1)', // Semi-transparent white background
  boxShadow: `0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)`, // Blur and inner shadow
  backdropFilter: 'blur(5px)', // Additional blur effect
  // You can further customize the styles here, e.g., border radius
}));

export default GlassAppBar;
