import { makeStyles, emphasize } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%'
    },
    grow: {
        flexGrow: 1,
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 15,
        height: 15,
    },

    secondLayer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        margin: 'auto',

        marginTop: "8ch",
    },

    //image display
    wrapper: {
        width: "823px",
        marginTop: "20px",
    },
    paper: {
        zIndex: 1,
        position: 'relative',
        backgroundColor: "white",
        margin: 'auto',
        borderLeft: '0px',
        width: '100%'
    },
    sliderImg: {
        zIndex: 2,
        position: 'relative',
        width: '100%'
    },
    sliderButton: {
        zIndex: 3,
        color: '#2e2853'
    },
    sliderPrev: {
        position: "absolute",
        top: "218px",
        left: "30px",
    },
    sliderNext: {
        position: "absolute",
        top: "218px",
        right: "30px",
    },

    thirdFourth: {
        width: '100%'
    },
    //third layer
    thirdLayer: {
        color: '#000',
        backgroundColor: "#fff",
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '70%',
            borderBottomLeftRadius: '70px',
            borderTopRightRadius: '70px',
        },
        marginTop: '10ch',

    },
    info: {
        width: '50ch',
        [theme.breakpoints.down('md')]: {
            margin: 'auto',
        },
    },
    infoText: {
        padding: '30px 0px ',
    },
    homeInfoImg: {
        padding: '30px 0px',
        borderTopRightRadius: '50px',
        borderBottomLeftRadius: '70px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },

    },
    // fourth layer
    fourthLayer: {
        color: '#000',
        backgroundColor: "#cec9eb",
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '70%',
            borderBottomLeftRadius: '70px',
            borderTopRightRadius: '70px',
            marginLeft: '30%',
        },
    },
    //cardLayer
    cardLayer: {
        [theme.breakpoints.up('md')]: {
            width: '836px'
        },
        margin: 'auto',
        marginTop: '10ch',
        marginBottom: '10ch'
    },
    //footer

    footer: {
        backgroundColor: '#211d35',
        height: '50ch',
        [theme.breakpoints.down('sm')]: {
            height: '85ch',
        },
        color: '#fff',
        width: '100%'
    },

}));

export default useStyles;