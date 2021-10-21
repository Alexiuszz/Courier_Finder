import React from 'react';
import images from '../../images/imageData';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

function Carousel(props) {
    const [index, setIndex] = React.useState(0);
    const currSlide = images[index];
    const numSlides = 6;

    const [slideDirection, setSlideDirection] = React.useState("right");
    const [slide, setSlide] = React.useState(true);

    const navClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;
        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlide(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlide(true);
        }, 300);
    }

    return (
        <div className={props.classes.wrapper}>
            <Paper elevation={4} className={props.classes.paper}>
                <IconButton className={clsx(props.classes.sliderButton, props.classes.sliderPrev)} aria-label="prev" onClick={() => navClick('left')}>
                    <NavigateBeforeIcon fontSize="large" />
                </IconButton>
                <Slide direction={slideDirection} in={slide} >
                    <img className={props.classes.sliderImg} src={currSlide.img} alt={currSlide.title} onClick={() => navClick('right')} />
                </Slide>
                <IconButton className={clsx(props.classes.sliderButton, props.classes.sliderNext)} aria-label="next" onClick={() => navClick('right')}>
                    <NavigateNextIcon fontSize="large" />
                </IconButton>
            </Paper>
        </div>
    )
}

export default Carousel;