import React, {Suspense} from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/readingicon.jpg';
import {AuthCheck} from 'reactfire'

const useStyles = makeStyles({
    logo: {
        content: `url(${Logo})`,
        maxWidth: '60%',
        height: '75px',
    },
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '40%'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: '#240020',
        zIndex: 1,
        borderBottom: '1px solid grey',
    },
    navbarItem: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '150%'
    },
    p5: {
        padding: '5px',
    },
    spaceBetween: {
        justifyContent: 'right',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '60%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '80px',
        paddingLeft: '50px',
    },
})

export const Navbar = () => {
    const classes = useStyles();

    return (
        
        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween}`}>
            <div className={`${classes.navlogo} `}>
                    <Link to='/' className={`${classes.logo} ${classes.p5}`}>
                    </Link>
            </div>
            <div className={`${classes.width60} ${classes.alignCenter}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween}`}>
                    <Suspense fallback={'loading...'}>
                        <AuthCheck fallback={
                            <li>
                                <Button>
                                    <Link to='/SignIn' className={`${classes.navbarItem} ${classes.psides}`}>Sign In</Link>
                                </Button>
                            </li>
                        }>
                            <li>
                                <Button>
                                <Link to='/' className={`${classes.navbarItem} ${classes.psides}`}>Home</Link>
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Link to='/Library' className={`${classes.navbarItem} ${classes.psides}`}>My Library</Link>
                                </Button>
                            </li>
                        </AuthCheck>
                    </Suspense>
                </ul>
            </div>
        </div>
    )
}