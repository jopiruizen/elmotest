import { makeStyles } from '@material-ui/core/styles';

const styles = (theme) => ({

    container: {
        display: 'flex',
        flexDirection: 'column !important',
        width: '100%',
    },

    title: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        fontSize: '20px',
        marginBottom: '32px',
    },

    message: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        fontSize: '14px',
    },

     

});

export default styles;
export const useStyles = makeStyles(styles);
