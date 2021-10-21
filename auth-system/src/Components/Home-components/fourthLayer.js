import React from "react";

import { Divider, Typography } from "@material-ui/core";
import Grow from '@material-ui/core/Grow';
import VisibilitySensor from 'react-visibility-sensor';


export default function FourthLayer(props) {
    const classes = props.classes;
    const [animate, setAnimate] = React.useState(false);

    const Visible = (isVisible) => {
        setTimeout(() => {
            setAnimate(isVisible);
        }, 100);

    }
    return (
        <>
            <div className={classes.info}>
                <Typography className={classes.infoText} variant='h2' >
                    Our Vision
                </Typography>
                <Divider />
                <VisibilitySensor
                    onChange={(isVisible) => Visible(isVisible)}
                    partialVisibility
                >
                    <Grow in={animate} style={{ transformOrigin: '0 0 0' }}
                        {...(animate ? { timeout: 1000 } : {})}>
                        <Typography className={classes.infoText} variant='body2' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa culpa fugiat sed quaerat vero delectus provident eum mollitia aspernatur,
                            eveniet aperiam nulla animi quo eaque aut quisquam magni deserunt!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit accusamus cum fuga a quae minima ea error quasi,
                            iste libero? Voluptatibus quam quo delectus ex placeat.
                        </Typography>
                    </Grow>
                </VisibilitySensor>

            </div>
        </>
    );
}