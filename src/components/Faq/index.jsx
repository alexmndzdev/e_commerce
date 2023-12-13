import { Typography, Box, Container }  from '@mui/material';
import './Faq.css';
import useStyles from './styles.js'

const Faq = () => {
  const classes = useStyles()
  return (
    <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 5 }}> 
      <Container justifyContent='center' spacing={4}>
        <div className={classes.toolbar} />
				<Typography variant="h3" align="center">Cigarrillos</Typography>

        <Typography variant={'h4'}>
          ¿Contienen tabaco?
        </Typography>
        <Typography variant={'body1'}>
          Los cigarros están hechos a base de plantas aromáticas/medicinales, no contienen ni tabaco ni alguna sustancia ilegal o adictiva.
        </Typography>

        <Typography variant={'h4'}>
          ¿Son para prácticas especializadas como la meditación?
        </Typography>
        <Typography variant={'body1'}>
          A pesar de que puede ser una gran herramienta para acompañar en la práctica de meditación (o cualquier otra que implique estar en relajación) puedes consumirlos sin tener una intención relacionada a ello.
        </Typography>

        <Typography variant={'h4'}>
          ¿Hacen daño?
        </Typography>
        <Typography variant={'body1'}>
          El único daño que pueden provocar es la combustión, de ahí en más son mejores que los tabacos comerciales ya que estos no contienen sustancias tóxicas o adictivas.
        </Typography>

        <Typography variant={'h4'}>
          ¿Tienen un efecto?
        </Typography>
        <Typography variant={'body1'}>
          Tienen un efecto muy ligero, casi como el efecto del tabaco.
        </Typography>

        <Typography variant={'h4'}>
          ¿Tienen efectos para dejar de fumar tabaco?
        </Typography>
        <Typography variant={'body1'}>
          Los cigarros NO tienen ningún componente que al fumarlos te hagan ya no tener ganas de fumar tabaco, es más como apoyo en el proceso de dejar de consumir, cualquier cambio debe ser a conciencia y con disciplina.
        </Typography>

        <Typography variant={'h4'}>
          ¿Duran más que un tabaco?
        </Typography>
        <Typography variant={'body1'}>
          Un cigarro Magnolia equivale casi a lo que 2, ya que la mayoría de las veces con medio o menos te sientes satisfecho.
        </Typography>

        <Typography variant={'h4'}>
          ¿Cómo es que funcionan la mezcla de Oníria?
        </Typography>
        <Typography variant={'body1'}>
          Los cigarrillos Oníria contienen Calea Zacatechichi, que es una planta que usaban antes los chontales para inducir a los sueños lúcidos, la planta por sí sola no te dará la seguridad de que los tendrás, es necesario realizar toda una práctica y que estos sirvan de apoyo para facilitar el objetivo. Hay quienes tienen la facilidad de tenerlos sin ninguna práctica y estos cigarros potencian el efecto de lucidez en sus sueños.
        </Typography>
      </Container>
    </Box>
  );
};

export default Faq
