import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import images from '../../images/imageData';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 245,
        [theme.breakpoints.down('sm')]: {
            width: '50%',
            margin: 'auto',
            marginBottom: '3ch'
        },
    },
    media: {
        height: 140,
    },

    //mediaCards
    mediaCards: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        justifyContent: 'space-around'
    }
}));

function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.cardImage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.cardTitle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.cardContent}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    {props.cardAction}
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}


export default function MediaCards() {
    const classes = useStyles();
    const cardData = [
        {
            cardImage: images[0].img,
            cardTitle: 'Request',
            cardContent: 'Request for product delivery any where around the country through one of our agents or clients.',
            cardAction: 'Request Courier',
        },
        {
            cardImage: images[6].img,
            cardTitle: 'Track',
            cardContent: "Get detailed information about your product's delivery.",
            cardAction: 'Track',
        },
        {
            cardImage: images[2].img,
            cardTitle: 'Deliver',
            cardContent: 'Delivery confirmation and details.',
            cardAction: 'Delivery Details',
        },
    ]
    return (
        <div className={classes.mediaCards}>
            {cardData.map((card) => (
                <React.Fragment key={card.Title}>
                    <MediaCard
                        cardImage={card.cardImage}
                        cardTitle={card.cardTitle}
                        cardContent={card.cardContent}
                        cardAction={card.cardAction}
                    />
                </React.Fragment>
            ))}
        </div>

    )
}