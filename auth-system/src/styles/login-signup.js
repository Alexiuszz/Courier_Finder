import { makeStyles, emphasize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: '36ch',
            fontSize: '14px'
        },
        background: '#fff',
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        width: "100%",
    },
    margin: {
        margin: '10px'
    },
    paper: {
        width: "55%",
        '@media (min-width:800px)': {
            width: '40%',
        },
        margin: 'auto',
        marginBottom: '5ch'
    },
    title: {
        margin: theme.spacing(1),
        color: '#4f4a6e'
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    selectEmpty: {
        width: '34ch',
    },
    navStyles: {
        '&:hover, &:focus': {
            color: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            color: emphasize(theme.palette.grey[300], 0.12),
        },
    },
    nav: {
        marginLeft: "95%",
        justifyContent: 'space-around',
        textTransform: 'uppercase',
    },
    appBar: {
        height: '7ch',
        boxShadow: 'none',
    },
    textField: {
        width: '36ch',
        height: '8ch',
        backgroundColor: '#fff',
    },
    button: {
        width: '40ch',
        backgroundColor: '#6a77b4',
        color: '#fff'

    },
    texts: {
        width: '39ch',
        fontSize: '14px',
    }
}));

export default useStyles;