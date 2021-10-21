import React from "react";

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {
    Typography,
    Input,
    InputLabel,
    FormControl,
    IconButton,
    Button
} from '@material-ui/core';

import useStyles from "../../styles/footerStyles";

export default function Footer(props) {
    const [email, setEmail] = React.useState('');
    const classes = useStyles();
    const LinkRouter = props.LinkRouter;

    const handleChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    }
    return (
        <div className={classes.footerBlock}>
            <div className={classes.footerWrap}>

                <div className={classes.footerLinks}>
                    <List
                        className={classes.footers}
                        component="footer"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader disableSticky classes={{ root: classes.footerWrap }} >
                                ABOUT
                            </ListSubheader>
                        }
                    >
                        <ListItem button>
                            <LinkRouter to="/about-us" color="inherit" className={classes.footerStyles}>
                                <ListItemText primary="About Us" />
                            </LinkRouter>
                        </ListItem>
                        <ListItem button>
                            <LinkRouter to="/contact-us" color="inherit" className={classes.footerStyles}>
                                <ListItemText primary="Contact Us" />
                            </LinkRouter>
                        </ListItem>
                        <ListItem button>
                            <LinkRouter to="/privacy-policy" color="inherit" className={classes.footerStyles}>
                                <ListItemText primary="Privacy Policy" />
                            </LinkRouter>
                        </ListItem>
                        <ListItem button>
                            <LinkRouter to="/terms" color="inherit" className={classes.footerStyles}>
                                <ListItemText primary="Terms of Use" />
                            </LinkRouter>
                        </ListItem>
                    </List>
                    <List
                        className={classes.footers}
                        component="footer"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader disableSticky classes={{ root: classes.footerWrap }} >
                                BUSINESS
                            </ListSubheader>
                        }
                    >
                        <ListItem button>
                            <LinkRouter to="/" color="inherit" className={classes.footerStyles}>
                                <ListItemText primary="Logistics" />
                            </LinkRouter>
                        </ListItem>
                        <ListItem button>
                            <LinkRouter to="/market" color="inherit" className={classes.footerStyles}>
                                <ListItemText primary="Market" />
                            </LinkRouter>
                        </ListItem>
                        <ListItem button>
                            <LinkRouter to="/tracker" color="inherit" className={classes.footerStyles}>
                                <ListItemText primary="Tracker" />
                            </LinkRouter>
                        </ListItem>
                        <ListItem button>
                            <LinkRouter to="/terms" color="inherit" className={classes.footerStyles}>
                                <ListItemText primary="Invest" />
                            </LinkRouter>
                        </ListItem>
                    </List>

                    <List
                        className={classes.footers}
                        component="footer"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader disableSticky classes={{ root: classes.footerWrap }} >
                                HELP AND SUPPORT
                            </ListSubheader>
                        }
                    >
                        <ListItem button>
                            <LinkRouter to="/request-and-delivery" color="inherit" className={classes.footerStyles}>
                                <ListItemText primary="Request and Delivery" />
                            </LinkRouter>
                        </ListItem>
                        <ListItem button>
                            <LinkRouter to="/tracking" color="inherit" className={classes.footerStyles}>
                                <ListItemText primary="Tracking" />
                            </LinkRouter>
                        </ListItem>
                        <ListItem button>
                            <LinkRouter to="/technical-support" color="inherit" className={classes.footerStyles}>
                                <ListItemText primary="Technical Support" />
                            </LinkRouter>
                        </ListItem>

                    </List>

                    <List
                        className={classes.footers}
                        component="footer"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader disableSticky classes={{ root: classes.footerWrap }} >
                                PEOPLE
                            </ListSubheader>
                        }
                    >
                        <ListItem button>
                            <LinkRouter to="/affiliate-program" color="inherit" className={classes.footerStyles}>
                                <ListItemText primary="Affilite Program" />
                            </LinkRouter>
                        </ListItem>
                        <ListItem button>
                            <LinkRouter to="/couriers" color="inherit" className={classes.footerStyles}>
                                <ListItemText primary="Couriers" />
                            </LinkRouter>
                        </ListItem>
                        <ListItem button>
                            <LinkRouter to="/career" color="inherit" className={classes.footerStyles}>
                                <ListItemText primary="Career" />
                            </LinkRouter>
                        </ListItem>

                    </List>

                </div>
                <div className={classes.footerSocials}>

                    <Typography variant="body" color='inherit' className={classes.footerCopyRight}>
                        Newsletter
                    </Typography>
                    <div className={classes.newsletter}>
                        <FormControl className={classes.input} variant="outlined" >
                            <InputLabel htmlFor="component-outlined" className={classes.inputLabel}>E-mail</InputLabel>
                            <Input id="component-outlined" value={email} onChange={handleChange} type="email" classes={classes.input} />
                        </FormControl>
                        <Button variant="contained" className={classes.button}>Subscribe</Button>
                    </div>

                    <Typography variant="body" color='inherit' className={classes.footerCopyRight}>
                        Follow Us
                    </Typography>

                    <div className={classes.socialIcons}>
                        <IconButton >
                            <FacebookIcon fontSize='large' className={classes.socialIcons} />
                        </IconButton>
                        <IconButton >
                            <TwitterIcon fontSize='large' className={classes.socialIcons} />
                        </IconButton>
                        <IconButton >
                            <InstagramIcon fontSize='large' className={classes.socialIcons} />
                        </IconButton>
                        <IconButton >
                            <YouTubeIcon fontSize='large' className={classes.socialIcons} />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className={classes.divider}>________________________________________________________________________________________________________</div>
            <div className={classes.footerBottomText}>
                <Typography variant="h4" color='inherit' className={classes.footerLogo}>
                    MarketPlace
                </Typography>
                <Typography variant="body" color='inherit' className={classes.footerCopyRight}>
                    MarketPlace Copyright &copy; 2021. All Rights Reserved.
                </Typography>
            </div>
        </div>

    )
}