import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '220px',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        display: 'none',
        [theme.breakpoints.up('lg')]: {
            display: 'block',
        },
        height: 0,
    },
    rootLeft: {
        right: '25px',
        marginTop: '20px',
    },
    rootRight: {
        left: '25px',
        marginTop: '20px',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    paper: {
        zIndex: 1,
        position: 'relative',
        backgroundColor: "white",
        margin: 'auto',
        borderLeft: '0px',
    },
    paperRight: {
        height: '199.341px',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '14px',
    },
    rightSideBarText: {
        padding: '10px'
    }
}));

export default useStyles;