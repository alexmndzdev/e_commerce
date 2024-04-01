import { Typography, Container, Button, Grid, Box } from '@mui/material'
import React from 'react'
import useStyles from './styles.js'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = ({ cart, handler }) => {
	const classes = useStyles()

	const EmptyCart = () => (
		<Typography variant="subtitle1">
			<Link to="/" className={classes.link}>No tienes articulos en tu carrito, empieza a agregar algunos!</Link>
		</Typography>
	)

	const FilledCart = () => (
		<>
			<Grid container spacing={3}>
				{cart.line_items.map((item) => (
					<Grid item xs={12} sm={4} key={item.id}>
						<CartItem item={item} 
							onUpdate={ handler.update }
							onRemove={ handler.remove }/>
					</Grid>
				))}
			</Grid>
			<div className={classes.cardDetails}>
				<Typography variant="h4">
					Subtotal: {cart.subtotal.formatted_with_symbol}
				</Typography>
				<div>
					<Button
						className={classes.emptyButton}
						size="large"
						type="button"
						variant="contained"
						color="secondary"
						onClick={handler.empty}
					>
						Vaciar carrito
					</Button>
					<Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
						Ir a caja
					</Button>
				</div>
			</div>
		</>
	)
	
	if (!cart.line_items) return 'Cargando...'
	const isEmpty = !cart.line_items.length

	return (
		<Box className={classes.container} px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 5 }}>
			<Container>
				<div className={classes.toolbar} />
				<Typography className={classes.title} variant="h3" gutterBottom>Carrito</Typography>
				{ isEmpty ? <EmptyCart /> : <FilledCart key={'aca'}/> }
			</Container>
		</Box>
	)
}

export default Cart
