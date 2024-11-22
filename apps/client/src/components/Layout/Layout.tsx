import MenuCloseIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Suspense, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { APP_NAME } from '../../config';
import Account from '../Account';
import CartIcon from '../Cart/CartIcon';
import * as Categories from '../Categories';
import ErrorBoundary from '../ErrorBoundary';
import Footer from '../Footer';
import Notification from '../Notification';
import ThemeToggle from '../ThemeToggle';
import { Breadcrumbs } from './Breadcrumbs';

export const Layout = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onClick = (url: string) => {
    navigate(url);
    setDrawerOpen(false);
  };

  return (
    <Box className="flex flex-col min-h-3">
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar disableGutters className="pl-4 pr-4">
          <IconButton
            sx={{ mr: 4 }}
            onClick={() => setDrawerOpen((prev) => !prev)}
            color="inherit"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          >
            {drawerOpen ? <MenuOpenIcon /> : <MenuCloseIcon />}
          </IconButton>
          <Typography
            id="title"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Button onClick={() => onClick('/')} color="inherit">
              {APP_NAME}
            </Button>
          </Typography>
          <ThemeToggle />
          <ErrorBoundary>
            <CartIcon />
          </ErrorBoundary>
          <Suspense fallback={<CircularProgress />}>
            <Account />
          </Suspense>
        </Toolbar>
      </AppBar>
      <Drawer
        className="w-80"
        variant="temporary"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Toolbar />
        <List>
          <Categories.CollapsableButton onClick={onClick} />
          <Divider />
          <ListItemButton onClick={() => onClick('/orders')}>
            <ListItemIcon
              sx={{
                minWidth: 'auto',
                mr: 2,
              }}
            >
              <ReceiptLongIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
        </List>
      </Drawer>
      <Paper className="min-h-screen p-4 mt-12">
        <Breadcrumbs />
        <ErrorBoundary>
          <Suspense fallback={<CircularProgress />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
        <Notification />
      </Paper>
      <Footer />
    </Box>
  );
};
