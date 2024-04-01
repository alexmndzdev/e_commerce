import React from 'react'
import { Grid, Typography, Box } from '@mui/material'

import MainCard from '../MainCard'
import useStyles from './styles'

const Categories = ({ categories }) => {
	const classes = useStyles()

	return (
		<Box className={classes.content}
			px={{ xs: 3, sm: 15 }}
			py={{ xs: 10, sm: 15 }}
		> 
			<div className={classes.category} justify='center'>
				<Typography variant="h3" align="center" pb={5}>Productos Herbales</Typography>
			</div>
			<Grid
				container
				justifyContent='center'
				spacing={10}>
				{categories.map(category => (
					<Grid
						item
						key={category.id}
						xs={12}
						sm={6}
						md={6}
						lg={4}>
						<MainCard category={category} />
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default Categories
