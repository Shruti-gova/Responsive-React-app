import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { LogoDev, Mail, MenuOutlined, Notifications } from '@mui/icons-material';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Stack } from '@mui/system';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})
const Search = styled(Box)(({ theme }) => ({
    backgroundColor: "lightblue",
    width: "40%",
    borderRadius: 4,
    padding: "4px",
}))
const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
}))
const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center"
}))
export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (

        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    WEB DEV'S
                </Typography>
                <Stack direction="row" spacing={2}>

                    <MenuOutlined sx={{ display: { xs: "block", sm: "none" } }} />
                    <LogoDev sx={{ display: { xs: "block", sm: "none" } }} />
                </Stack>
                <Search sx={{
                    display: { xs: "none", sm: "block" },
                }}><InputBase placeholder='Search...' /></Search>
                <Icons sx={{
                    display: { xs: "none", sm: "flex" },
                }}>
                    <Badge badgeContent={4} color="secondary" size="small">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="secondary" size="small">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} onClick={e => setOpen(true)} alt="Remy Sharp" src="https://static/images/avatar/1.jpg" />

                </Icons>
                <UserBox sx={{ display: { xs: "flex", sm: "none" } }}>
                    <Avatar sx={{ width: 30, height: 30 }} onClick={e => setOpen(true)} alt="Remy Sharp" src="https://static/images/avatar/1.jpg" />
                    <Typography>Johe</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}