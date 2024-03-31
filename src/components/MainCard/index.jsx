import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography, IconButton } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'

import useStyles from './styles'

const MainCard = ({ category }) => {
	const classes = useStyles()

	const dimOnTrue = (flag) => {
			return {
					opacity: flag ? 0.15 : 1,
			}
	}

	const disableOnTrue = (flag) => {
			return {
					pointerEvents: flag ? 'none' : 'initial'
			}
	}

	const categoryHadProducts = category.products > 0 ? true : false
	return (
	<Card
		className={classes.root} 
		sx={{
			':hover': {
				boxShadow: 20,
				cursor: 'pointer'
			},
		}}
		style={{
				...dimOnTrue(!categoryHadProducts),
				...disableOnTrue(!categoryHadProducts)
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
