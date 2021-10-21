import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: blue[500],
        },
    },
});

export default theme;