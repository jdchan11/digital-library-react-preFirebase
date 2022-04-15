import React, { Suspense } from 'react';
// import { useStyles } from '../../styles';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../Navbar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(180deg, rgba(36,0,32,1) 0%, rgba(121,9,81,1) 76%, rgba(207,15,160,1) 100%)`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        color: 'white',
        width: '60%',
        border: 'white',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: '10%',
        transform: 'translate(-50%, -50%)',
        top: '40%',
        left: '50%'
    },
    button_text: {
        color: 'white',
        textDecoration: 'none'
    },
})

export const Home = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <div className={classes.background}>
            <div className={classes.main_text}>
                <h1>Welcome to Your Digital Library</h1>
                <Button>
                    <Link to='/Library' className={classes.button_text}>View Library</Link>
                </Button>
            </div>
            </div>
        </>
    )
}
