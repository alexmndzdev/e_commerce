import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography, IconButton } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'

import useStyles from './styles'

const MainCard = ({ category }) => {
	const classes = useStyles()

	//TODO: Use react router to redirecto to avoid requests?
	return (
	<Card
		className={classes.root} 
		sx={{
			':hover': {
				boxShadow: 20,
				cursor: 'pointer'
			},
		}}
	>
		<CardActionArea href={'/'+category.name}>
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
    </CardActionArea>
	</Card>
	)
}

export default MainCard
