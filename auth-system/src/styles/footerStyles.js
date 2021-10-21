import { makeStyles, emphasize } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    //footer

    footerBlock: {
        width: '100%',
        margin: 'auto',
        marginTop: '10ch',
    },
    footerWrap: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center'
        },
        color: '#fff',
        fontSize: '14px',
    },
    footerLinks: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0px 5ch',
    },

    footers: {
        marginTop: '40px',
        marginRight: '50px',
        [theme.breakpoints.down('lg')]: {
            marginRight: '10px',
        },
        color: '#fff',
    },
    footerStyles: {
        fontSize: "16px",
        color: theme.palette.grey[400],
        '&:hover, &:focus': {
            color: theme.palette.grey[500],
            textDecoration: 'none',
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            color: emphasize(theme.palette.grey[300], 0.12),
        },
    },
    footerBottomText: {
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
    },
    footerLogo: {
        margin: '1ch 1.3ch 2ch 1ch'
    },
    footerCopyRight: {
        marginTop: '5ch',
        fontSize: '14px',
        color: theme.palette.grey[400],
    },
    divider: {
        fontSize: '18px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '8px',
        },
        color: theme.palette.grey[400],
    },
    footerSocials: {
        fontSize: '18px',
        marginTop: '5ch',
        marginLeft: '4ch',
        marginRight: '2.5ch',
        '& 	.MuiInput-input': {
            width: '20ch',
            height: '25px',
            border: '2px solid #fff',
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px',
            color: theme.palette.grey[900],
            backgroundColor: theme.palette.grey[200]
        },
        '& .Mui-focused': {
            color: theme.palette.grey[400],
            borderColor: 'red'
        },
    },
    input: {
        marginTop: '10px',
        borderTopRightadius: '0px',
        borderBottomRightRadius: '0px',
        marginBottom: '40px'
    },
    button: {
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px',
        marginTop: '26.4px ',
        height: '42px',
        width: '11ch',
        backgroundColor: '#6a77b4',
        color: '#fff',
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[600],
        },
    },
    inputLabel: {
        paddingTop: '8px'
    },
    socialIcons: {
        color: '#fff'
    }
}));

export default useStyles;