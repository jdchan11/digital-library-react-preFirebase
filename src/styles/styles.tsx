import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';


export const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(180deg, rgba(36,0,32,1) 0%, rgba(121,9,81,1) 76%, rgba(207,15,160,1) 100%)`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        color: 'white'
    },
    button_text: {
        color: 'white',
        textDecoration: 'none'
    },
})