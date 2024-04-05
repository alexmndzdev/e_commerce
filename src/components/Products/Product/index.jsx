import React, { useState } from 'react'
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
	Button
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
			<Button onClick={() => handleOpenModal(product)}>Ver Detalles</Button>
			<IconButton
				aria-label='Add to Cart'
				onClick={() => onAddToCart(product.id, 1)}
				size="large">
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
