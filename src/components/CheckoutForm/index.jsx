import React from 'react'
//import { Stepper, Step, StepLabel, Typography } from '@mui/material'
import useStyles from './styles.js'
import AddressForm from './AddressForm'

//const steps = ['Dirección de envio', 'Detalle de Pago']

const Checkout = ({ cart }) => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.toolbar} />
			<AddressForm items={cart.line_items} />
		</>
	)
}

export default Checkout
