import React from 'react';
import useStyles from '../../styles/siderBar-styles';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import { ListSubheader, List, ListItem, ListItemText } from '@material-ui/core';

function RightBar() {
    const classes = useStyles();

    return (
        <div className={clsx(classes.rootRight, classes.root)}>
            <Paper elevation={4} className={clsx(classes.paperRight, classes.paper)}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader disableSticky component="div" id="list-subheader">
                            Get amazing discounts on deliveries!
                        </ListSubheader>
                    }
                >
                    <ListItem button >
                        <ListItemText primary="Subscribe to our monthly plan..." />
                    </ListItem>
                </List>
            </Paper>
        </div>

    );
}

export default RightBar;