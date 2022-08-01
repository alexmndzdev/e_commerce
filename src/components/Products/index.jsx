import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product'
import useStyles from './style'

const Products = ({ products, onAddToCart }) => {
	const classes = useStyles()

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<div className={classes.category} justify='center'>
				<h3> CAJETILLAS </h3>
				<p> Contienen 10 cigarrillos con las siguientes mezclas herbales </p>
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
