import { Typography, Container, Button, Grid } from '@material-ui/core'
import React from 'react'
import useStyles from './styles.js'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = ({ cart }) => {
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
					<Grid item xs={12} sm={4} key={item.key}>
						<CartItem item={item}/>
					</Grid>
				))}
			</Grid>
			<div className={classes.cardDetails}>
				<Typography variant="h4">
					Subtotal: {cart.subtotal.formatted_with_symbol}
				</Typography>
				<div>
					<Button className="classes.emptyButton" size="large" type="button" variant="contained" color="secondary">
						Vaciar carrito
					</Button>
					<Button className="classes.checkoutButton" size="large" type="button" variant="contained" color="primary">
						Ir a caja
					</Button>
				</div>
			</div>
		</>
	)
	
	if (!cart.line_items) return 'Cargando...'
	const isEmpty = !cart.line_items.length

	return (
		<Container>
			<div className={classes.toolbar} />
			<Typography className={classes.title} variant="h3" gutterBottom>Carrito</Typography>
			{ isEmpty ? <EmptyCart /> : <FilledCart /> }
		</Container>
	)
}

export default Cart
