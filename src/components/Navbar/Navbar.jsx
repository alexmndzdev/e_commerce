import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/commerce.png'
import useStyles from './styles.js'

const Navbar = ({ totalItems }) => {
				const classes = useStyles()
				return  (
					<>
												<AppBar position="fixed" className={classes.AppBar} color="inherit">
																<Toolbar>
																				<Typography variant="h6" className={classes.title} color="inherit">
																								<img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
																									Commerce.js
																				</Typography>
																				<div className={classes.grow} />
																				<div className={classes.button}>
																								<IconButton aria-label="Show cart items" color="inherit">
																									<Badge badgeContent={totalItems} color="secondary">
																												<ShoppingCart />
																									</Badge>
																								</IconButton>
																				</div>
																</Toolbar>
												</AppBar>
					</>
				)
}
																				
export default Navbar
