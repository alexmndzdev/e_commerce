import React from 'react'
import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'

import useStyles from './styles'

const MainCard = ({ category, onAddToCart }) => {
	const classes = useStyles()

	return (
	<Card
		className={classes.root} 
		sx={{
    ':hover': {
      boxShadow: 20,
			cursor: 'pointer'
    },
  }}>
		<CardMedia
			className={classes.media}
			image={category.assets[0].url}
			title={category.name} />
		<CardContent>
			<div className={classes.cardContent}>
				<Typography variant='h5' gutterBottom>
					{category.name}
				</Typography>
				<IconButton
					aria-label='Add to Cart'
					size="large">
					<ArrowForward/>
				</IconButton>
			</div>
		</CardContent>
	</Card>
	)
}

export default MainCard
