//import {Typography, Grid} from '@mui/material'
//import {useForm, FormProvider} from 'react-hook-form'

import React, { useState } from 'react'
import { TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
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

const Address = () => {
  const classes = useStyles();
  const [colonia, setColonia] = useState('');
  const [calle, setCalle] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleShippingSubmit = () => {
    // Aquí puedes implementar la lógica para enviar la dirección de envío y el estado seleccionado
    console.log('Colonia:', colonia);
    console.log('Calle:', calle);
    console.log('Ciudad:', ciudad);
    console.log('Código Postal:', codigoPostal);
    console.log('Estado seleccionado:', selectedState);
    // Por ahora, solo imprime los campos en la consola
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
    <div className={classes.root}>
      <Typography variant="h5">Envío a toda la República Mexicana</Typography>
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
    </div>
  )
}

export default Address
