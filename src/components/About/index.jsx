import React from 'react'
import {
  Typography,
  Box,
  Container
}  from '@mui/material'
import useStyles from './styles.js'

const About = () => {
  const classes = useStyles()
  const aboutText = `Magnolia Herbal es un proyecto emergente originario de Colima, impulsado por la búsqueda de alternativas herbales.
  <br>Inicialmente, se centró en la creación de cigarros herbales,
elaborados a partir de hierbas aromáticas, como una opción más amigable tanto para el
cuerpo como para el medio ambiente. Sin embargo, la misión de Magnolia Herbal va más
allá: aspira a desarrollar más alternativas conscientes y respetuosas para nuestro cuerpo, alma y mente.`

  //variant='body1'
  //color='textSecondary'/>

  return (
    <Box
      className={classes.container}
			px={{ xs: 3, sm: 10 }}
			py={{ xs: 10, sm: 15 }}
    >
      <Container spacing={4}>
				<Typography variant="h3" align="center">Acerca de nosotros</Typography>
        <div className={classes.aboutText}>
          <Typography
            dangerouslySetInnerHTML={{ __html: aboutText }}
            />
        </div>
      </Container>
    </Box>
  )
}

export default About
