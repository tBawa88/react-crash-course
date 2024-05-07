import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1, maxWidth: '1750px', margin: '0 auto' }}>
            <AppBar position="static"
                sx={{ backgroundColor: 'rgb(169, 237, 252)', color: 'black' }}>
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
                    <Typography variant="h5" component="div"
                        sx={{ flexGrow: 1 }}>
                        Todo / List
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
