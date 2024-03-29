import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

import useStyles from './style'

const Product = ({ product, onAddToCart }) => {
	const classes = useStyles()
			//<Typography
				//dangerouslySetInnerHTML={{ __html: product.description }}
				//variant='body2'
				//color='textSecondary'/>

	return (
	<Card className={classes.root}>
		<CardMedia className={classes.media} image={product.media.source} title={product.name} />
		<CardContent>
			<div className={classes.cardContent}>
				<Typography variant='h5' gutterBottom>
					{product.name}
				</Typography>
				<Typography variant='h5'>
					{product.price.formatted_with_symbol}
				</Typography>
			</div>
		</CardContent>
		<CardActions disableSpacing className={classes.cardActions}>
			<IconButton
				aria-label='Add to Cart'
				onClick={() => onAddToCart(product.id, 1)}
				size="large">
				<AddShoppingCart/>
			</IconButton>
		</CardActions>
	</Card>
	)
}

export default Product
