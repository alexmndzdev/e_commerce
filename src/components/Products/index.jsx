import React from 'react'
import { Grid, Typography  } from '@mui/material'

import Product from './Product'
import useStyles from './style'

const Products = ({ products, onAddToCart }) => {
	const classes = useStyles()

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<div className={classes.category} justify='center'>
				<Typography variant="h3" align="center">Cajetillas</Typography>
				<Typography variant='body2'>
					Contienen 10 cigarrillos con las siguientes mezclas herbales
				</Typography>
				<br/>
			</div>
			<Grid container justifyContent='center' spacing={4}>
				{products.map(product => (
					<Grid item key={product.id} xs={12} sm={6} md={6} lg={3}>
						<Product product={product} onAddToCart={onAddToCart} />
					</Grid>
				))}
			</Grid>
		</main>
	)
}

export default Products
