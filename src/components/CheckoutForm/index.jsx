import React from 'react'
//import { Stepper, Step, StepLabel, Typography } from '@mui/material'
import useStyles from './styles'

//const steps = ['Dirección de envio', 'Detalle de Pago']

const Checkout = () => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.toolbar} />
		</>
	)
}

export default Checkout
