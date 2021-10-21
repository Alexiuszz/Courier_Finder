import React from 'react';
import { useAuth } from '../../auth_setup/use-auth.js';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InfoIcon from '@material-ui/icons/Info';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';
import {
    Toolbar,
    AppBar,
} from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import useStyles from '../../styles/navStyles.js';

function Nav(props) {
    const classes = useStyles();
    let auth = useAuth();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        // ********** Account Menu *******
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {!auth.token ?
                <>
                    <MenuItem onClick={handleMenuClose}>

                        <IconButton aria-label="signup link" color="inherit">
                            <props.LinkRouter color="inherit" to="/signup" className={classes.navStyles}>
                                <AssignmentIndIcon fontSize="small" className={classes.icon} />Sign Up
                            </props.LinkRouter>
                        </IconButton>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <IconButton aria-label="signin link" color="inherit">
                            <props.LinkRouter color="inherit" to="/login" className={classes.navStyles}>
                                <LockOpenIcon fontSize="small" className={classes.icon} />Sign in
                            </props.LinkRouter>
                        </IconButton>
                    </MenuItem>
                </> :
                <MenuItem onClick={handleMenuClose}>
                    <IconButton aria-label="signin link" color="inherit">
                        <p color="inherit" onClick={() => auth.signout()} className={classes.navStyles}>
                           Sign out
                        </p>
                    </IconButton>
                </MenuItem>
            }
            <MenuItem onClick={handleMenuClose}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <props.LinkRouter color="inherit" to="/account" className={classes.navStyles}>
                        <AccountBoxIcon fontSize="small" className={classes.icon} />Your Account
                    </props.LinkRouter>
                </IconButton>
            </MenuItem>
            {/* <MenuItem onClick={handleMenuClose}></MenuItem> */}
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        //************* Mobile Menu ***************
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="about us" color="inherit">
                    <props.LinkRouter color="inherit" to="/about" className={classes.navStyles}>
                        <InfoIcon fontSize="small" className={classes.icon} /> About us
                    </props.LinkRouter>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="cart" color="inherit">
                    <props.LinkRouter color="inherit" to="/cart" className={classes.navStyles}>
                        <ShoppingCartIcon fontSize="small" className={classes.icon} /> Cart
                    </props.LinkRouter>
                </IconButton>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    className={classes.navStyles}
                >
                    <AccountBoxIcon className={classes.icon} /> Account
                </IconButton>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar color="transparent" className={classes.appBar} position="static">
                <Toolbar className= {classes.toolbar}>
                    <Typography variant="h4" className={classes.homeStyles}>
                        MarketPlace
                    </Typography>

                    {/************ Search Bar **************/}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search products, stores and logistics"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    {/************* Desktop Nav***********/}
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="about us" color="inherit">
                            <props.LinkRouter color="inherit" to="/aboutus" className={classes.navStyles}>
                                <InfoIcon fontSize="small" className={classes.icon} /> About Us
                            </props.LinkRouter>
                        </IconButton>
                        <IconButton aria-label="show 0 items in cart" color="inherit">
                            <Badge badgeContent={0} color="secondary">
                                <props.LinkRouter color="inherit" to="/cart" className={classes.navStyles}>
                                    <ShoppingCartIcon fontSize="small" className={classes.icon} /> Cart
                                </props.LinkRouter>
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                            className={classes.navStyles}
                        >
                            <AccountBoxIcon fontSize="small" className={classes.icon} /> Account
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

export default Nav;
