import React from "react";
import { Divider, Typography } from "@material-ui/core";
import images from '../../images/imageData';
import Grow from '@material-ui/core/Grow';
import VisibilitySensor from 'react-visibility-sensor';


export default function HomeInfo(props) {
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
                    What we do?
                </Typography>
                <Divider />
                <VisibilitySensor
                    partialVisibility
                    onChange={(isVisible) => Visible(isVisible)}
                >
                    <Grow in={animate} style={{ transformOrigin: '0 0 0' }}
                        {...(animate ? { timeout: 1000 } : {})}>
                        <Typography className={classes.infoText} variant='body2' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit accusamus cum fuga a quae minima ea error quasi, 
                            iste libero? Voluptatibus quam quo delectus ex placeat.
                        </Typography>
                    </Grow>
                </VisibilitySensor>

            </div>
            <Grow in={animate} style={{ transformOrigin: '0 0 0' }}
                {...(animate ? { timeout: 1000 } : {})}>
                <img className={classes.homeInfoImg} src={images[6].img} alt="rider" />
            </Grow>
        </>
    );
}