import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import {
    Grid,
} from '@mui/material/';
import { useEnvStore } from '../../store/models/env';


import { useStyles } from './styles';

function Home  () {
    const classes = useStyles();
    const envStore = useEnvStore();
    const [message, setMessage] = useState('Default Message');

    useEffect(() => {
        envStore.loadData();
    }, []);

    useEffect(() => {
        if (envStore.message) {
            setMessage(envStore.message);
        }
    
    }, [envStore.observed.message]);

    return (
        <React.Fragment>
            <Grid
                className={classes.container}>
                <Grid
                    className={classes.title}> 
                    Greetings
                </Grid>
                <Grid
                    className={classes.message}> 
                    {message}
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default observer(Home);