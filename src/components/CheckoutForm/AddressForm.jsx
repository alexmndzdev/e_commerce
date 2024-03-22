import React, { useState } from 'react'
import {
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Box
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '75vh'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  textField: {
    margin: theme.spacing(1),
    width: '80%',
    maxWidth: 400,
  },
  select: {
    margin: theme.spacing(1),
    width: '80%',
    maxWidth: 400,
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const estadosMexico = [
  'Aguascalientes',
  'Baja California',
  'Baja California Sur',
  'Campeche',
  'Chiapas',
  'Chihuahua',
  'Coahuila',
  'Colima',
  'Ciudad de México',
  'Durango',
  'Guanajuato',
  'Guerrero',
  'Hidalgo',
  'Jalisco',
  'Estado de México',
  'Michoacán',
  'Morelos',
  'Nayarit',
  'Nuevo León',
  'Oaxaca',
  'Puebla',
  'Querétaro',
  'Quintana Roo',
  'San Luis Potosí',
  'Sinaloa',
  'Sonora',
  'Tabasco',
  'Tamaulipas',
  'Tlaxcala',
  'Veracruz',
  'Yucatán',
  'Zacatecas'
];

const Address = ({ items }) => {
  const classes = useStyles();
  const [colonia, setColonia] = useState('');
  const [calle, setCalle] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleShippingSubmit = () => {
    const MAGNOLIA_NUMBER = 523121152021
    let itemsListMsg = ''
    items.forEach(item => {
      itemsListMsg += `${item.name} - ${item.quantity}\n`
    });
    let message = `From: Ecommerce\nBuen dia, me gustaría pedir las siguientes cajetillas: \n${itemsListMsg} \nAl domicilio: \n*${calle}, Col. ${colonia}, Cp. ${codigoPostal}, ${ciudad}, ${selectedState}*`
    message = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${MAGNOLIA_NUMBER}/?text=${message}`
    window.location.href = whatsappUrl
  };

  const handleColoniaChange = (event) => {
    setColonia(event.target.value);
  };

  const handleCalleChange = (event) => {
    setCalle(event.target.value);
  };

  const handleCiudadChange = (event) => {
    setCiudad(event.target.value);
  };

  const handleCodigoPostalChange = (event) => {
    setCodigoPostal(event.target.value);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
		<>
			<Container className={classes.container}>
		    <Box className={classes.content} px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 5 }}>
        <Typography
          mb={2}
          variant="h4"
          align="center">Envío a toda la República Mexicana</Typography>
        <form className={classes.form}>
          <TextField
            className={classes.textField}
            label="Colonia"
            variant="outlined"
            value={colonia}
            onChange={handleColoniaChange}
          />
          <TextField
            className={classes.textField}
            label="Calle"
            variant="outlined"
            value={calle}
            onChange={handleCalleChange}
          />
          <TextField
            className={classes.textField}
            label="Ciudad"
            variant="outlined"
            value={ciudad}
            onChange={handleCiudadChange}
          />
          <TextField
            className={classes.textField}
            label="Código Postal"
            variant="outlined"
            value={codigoPostal}
            onChange={handleCodigoPostalChange}
          />
          <FormControl variant="outlined" className={classes.select}>
            <InputLabel id="state-select-label">Estado</InputLabel>
            <Select
              labelId="state-select-label"
              id="state-select"
              value={selectedState}
              onChange={handleStateChange}
              label="Estado"
            >
              {estadosMexico.map((estado) => (
                <MenuItem key={estado} value={estado}>
                  {estado}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleShippingSubmit}
          >
            Enviar
          </Button>
        </form>
      </Box>
		</Container>
		</>
  )
}

export default Address
