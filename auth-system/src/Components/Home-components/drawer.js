import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    drawer: {
        display: 'block',
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    list: {
        width: 250,
    },
}));

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [anchor, setAnchor] = React.useState(false);
    const [open, setOpen] = React.useState(true);


    const handleClick = () => {
        setOpen(!open);
    };

    const toggleDrawer = (draw) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }

        setAnchor(draw);
    };

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="list-subheader">
                        Register as...
                    </ListSubheader>
                }
            >
                <ListItem button>
                    <ListItemText primary="Courier" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Merchant" />
                </ListItem>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="list-subheader">
                        Get amazing discounts on deliveries!
                    </ListSubheader>
                }
            >
                <ListItem button >
                    <ListItemText primary="Subscribe to our monthly plan..." />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.drawer}>
                <IconButton onClick={toggleDrawer(true)}>
                    <MenuIcon fontSize="large"/>
                </IconButton>
                <Drawer anchor={"left"} open={anchor} onClose={toggleDrawer(false)}>
                    {list()}
                </Drawer>
        </div>
    );
}