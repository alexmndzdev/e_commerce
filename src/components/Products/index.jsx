import React, { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import { Grid, Typography  } from '@mui/material'

import Product from './Product'
import useStyles from './styles'

const Products = ({ category, onAddToCart }) => {
	const [products, setProducts] = useState([])
	const fetchProductsByCategory = async (category) => {
		const { data } = await commerce.products.list({ category_id: category.id })
		setProducts(data)
	}
	
	useEffect(() => {
		fetchProductsByCategory(category)
	}, [category])

	const classes = useStyles()

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<div className={classes.category} justify='center'>
				<Typography variant="h3" align="center">{category.name}</Typography>
				<Typography
					dangerouslySetInnerHTML={{ __html: category.description }}
					variant='body2'/>
				<br/>
			</div>
			<Grid container justifyContent='center' spacing={4} py={2}>
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
