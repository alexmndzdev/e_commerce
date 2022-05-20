import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core'
import useStyles from './styles.js'

const Footer = ({ totalItems }) => {
				const classes = useStyles()
				const location = useLocation()
				return  (
					<>
						<AppBar position="bottom fixed" className={classes.AppBar} color="inherit">
							<Toolbar>
									<Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">Magnolia</Typography>
									<div className={classes.grow} />
									<div className={classes.button}>
										<IconButton component={Link} to="cart" aria-label="Show cart items" color="inherit">
											<Badge badgeContent={totalItems} color="secondary">
											</Badge>
										</IconButton>
									</div>
							</Toolbar>
						</AppBar>
					</>
				)
}
																				
export default Footer
