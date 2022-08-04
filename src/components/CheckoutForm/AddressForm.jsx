import {Typography, Grid} from '@mui/material'
import React from 'react'
import {useForm, FormProvider} from 'react-hook-form'

const Address = () => {
	const methods = useForm();

	return (
		<>
			<Typography variant="h6" gutterBottom>Dirección de Envio</Typography>
			<FormProvider { ...methods}>
				<form onSubmit=''>
					<Grid container spacing={3}>
				  </Grid>	
				</form>
			</FormProvider>
		</>
	)
}

export default Address
