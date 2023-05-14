import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.Navbar}  position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mundo Óptico
          </Typography>
          <Button color="inherit">Ingresar</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
