import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Typography } from '@mui/material'
import useStyles from './styles'

const steps = ['Dirección de envio', 'Detalle de Pago']

const Checkout = () => {
	const [activeStep, setActiveStep] = useState(0)
	const classes = useStyles()
	return (
		<>
			<div className={classes.toolbar} />
			<main className={classes.layout}>
				<Typography variant="h4" align="center">Checkout</Typography>
				<Stepper activeStep={0}>
					{steps.map((step) => (
						<Step key={step}>
							<StepLabel>{step}</StepLabel>
						</Step>
					))}
				</Stepper>
			</main>
		</>
	)
}

export default Checkout
