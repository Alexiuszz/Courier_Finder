import React from 'react';
import useStyles from '../../styles/siderBar-styles';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


function LeftBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={clsx(classes.rootLeft, classes.root)}>
            <Paper elevation={4} className={classes.paper}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader disableSticky component="div" id="list-subheader">
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
            </Paper>
        </div>

    );
}

export default LeftBar;