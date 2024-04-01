import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'

import logo from '../../assets/commerce.png'
import useStyles from './styles.js'

const Navbar = ({ totalItems, categories }) => {
    const classes = useStyles()
    const location = useLocation()
    const url = location.pathname
    const categoriesFiltered = categories.filter(category => {
        return (url.slice(1).toLowerCase() === category.name.toLowerCase())
    })
    const urlHadCategory = !!categoriesFiltered.length

    return <>
                <AppBar position="fixed" className={classes.AppBar} color="inherit">
                    <Toolbar className={classes.toolbar}>
                            <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                                <img src={logo} alt="Logo" height="75px" className={classes.image} />Magnolia
                            </Typography>
                            <div className={classes.grow} />
                            { (url === '/' || urlHadCategory ) && (
                            <div className={classes.button}>
                                <IconButton
                                    component={Link}
                                    to="cart"
                                    aria-label="Show cart items"
                                    color="inherit"
                                    size="large">
                                    <Badge overlap="rectangular" badgeContent={totalItems} color="secondary">
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                            </div> )}
                    </Toolbar>
                </AppBar>
            </>;
}
																				
export default Navbar
