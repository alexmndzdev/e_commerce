import React, { useState } from 'react'
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	CardActionArea,
	Typography,
	IconButton
} from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import ProductDetailModal from './ProductDetailModal'

import useStyles from './styles'

const Product = ({ product, onAddToCart }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => {
		setIsModalOpen(true)
  }

  const handleCloseModal = () => {
		setIsModalOpen(false)
  }

	const classes = useStyles()
	return (
	<Card className={classes.root}>
		<CardActionArea onClick={() => handleOpenModal(product)}>
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
		</CardActionArea>
		<CardActions disableSpacing className={classes.cardActions}>
			<IconButton
				aria-label='Add to Cart'
				onClick={(event) => { 
					event.stopPropagation()
					return onAddToCart(product.id, 1) }
				}
				size="medium">
				<AddShoppingCart/>
			</IconButton>
		</CardActions>
		<ProductDetailModal
			open={isModalOpen}
			product={product}
			handleCloseModal={handleCloseModal}
			onAddToCart={onAddToCart}
		/>
	</Card>
	)
}

export default Product
