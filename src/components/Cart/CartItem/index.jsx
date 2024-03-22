import React from 'react'
import useStyles from './styles'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'

const CartItem = ({ item, onUpdate, onRemove }) => {
	const classes = useStyles()
	return (
		<Card>
			<CardMedia image={item.media.source}  alt={item.name} className={classes.media}/>	
			<CardContent className={classes.cardContent}>
				<Typography variant="h4">{item.name}</Typography>
				<Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<div className={classes.buttons}>
					<Button
						type="button"
						size="small"
						onClick={() => onUpdate(item.id, item.quantity - 1)} >
						<Remove/>
					</Button>
					<Typography>{item.quantity}</Typography>
					<Button
						type="button"
						size="small"
						onClick={() => onUpdate(item.id, item.quantity + 1)} >
						<Add/>
					</Button>
				</div>
				<Button variant="contained" type="button" color="secondary" onClick={() => onRemove(item.id)} >Remover</Button>
			</CardActions>
		</Card>
	)
}

export default CartItem
