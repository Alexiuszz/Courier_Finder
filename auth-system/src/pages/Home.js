import React from 'react';
import { Link } from 'react-router-dom';
import { Link as MUILink } from '@material-ui/core';
import TemporaryDrawer from '../Components/Home-components/drawer';
import Nav from '../Components/Nav/home-navbar';
import Paper from '@material-ui/core/Paper';
import Carousel from '../Components/Home-components/image-carousel';
import LeftBar from '../Components/Home-components/left-sidebar';
import RightBar from '../Components/Home-components/right-sidebar';
import HomeInfo from '../Components/Home-components/Home-Info';
import FourthLayer from '../Components/Home-components/fourthLayer';
import MediaCards from '../Components/Home-components/media-cards';
import Footer from '../Components/Home-components/Footer';
import useStyles from '../styles/home-styles';


function Home() {
    const classes = useStyles();



    return (
        <div className={classes.root}>
            <div className={classes.thirdFourth}>                
                <Nav
                    classes={classes}
                    LinkRouter={LinkRouter}
                />
                <TemporaryDrawer />
            </div>
            <div className={classes.secondLayer}>
                <LeftBar />
                <Carousel
                    classes={classes}
                    LinkRouter={LinkRouter}
                />
                <RightBar />
            </div>

            <div className={classes.thirdFourth}>
                <Paper elevation={4} className={classes.thirdLayer}>
                    <HomeInfo classes={classes} />
                </Paper>

                <Paper elevation={4} className={classes.fourthLayer}>
                    <FourthLayer classes={classes} />
                </Paper>
            </div>


            <div className={classes.cardLayer}>
                <MediaCards />
            </div>


            {/* Footer */}
            <div className={classes.footer}>
                <Footer  LinkRouter={LinkRouter} />
            </div>
        </div>

    )
}

const LinkRouter = (props) => <MUILink {...props} component={Link} />

export default Home;