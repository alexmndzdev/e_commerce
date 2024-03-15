import React from 'react'
import {
  Typography,
  Box,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails
}  from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useStyles from './styles.js'

const Faq = () => {
  const classes = useStyles()

  const faqs = [
    {
      question: '¿Contienen tabaco?',
      answer: 'Los cigarros están hechos a base de plantas aromáticas/medicinales, no contienen ni tabaco ni alguna sustancia ilegal o adictiva.'
    },
    {
      question: '¿Son para prácticas especializadas como la meditación?',
      answer: 'A pesar de que puede ser una gran herramienta para acompañar en la práctica de meditación (o cualquier otra que implique estar en relajación) puedes consumirlos sin tener una intención relacionada a ello.'
    },
    {
      question: '¿Hacen daño?',
      answer: 'El único daño que pueden provocar es la combustión, de ahí en más son mejores que los tabacos comerciales ya que estos no contienen sustancias tóxicas o adictivas.'
    },
    {
      question: '¿Tienen un efecto?',
      answer: 'Tienen un efecto muy ligero, casi como el efecto del tabaco.'
    },
    {
      question: '¿Tienen efectos para dejar de fumar tabaco?',
      answer: 'Los cigarros NO tienen ningún componente que al fumarlos te hagan ya no tener ganas de fumar tabaco, es más como apoyo en el proceso de dejar de consumir, cualquier cambio debe ser a conciencia y con disciplina.'
    },
    {
      question: '¿Duran más que un tabaco?',
      answer: 'Un cigarro Magnolia equivale casi a lo que 2, ya que la mayoría de las veces con medio o menos te sientes satisfecho.'
    },
    {
      question: '¿Cómo es que funcionan la mezcla de Oníria?',
      answer: 'Los cigarrillos Oníria contienen Calea Zacatechichi, que es una planta que usaban antes los chontales para inducir a los sueños lúcidos, la planta por sí sola no te dará la seguridad de que los tendrás, es necesario realizar toda una práctica y que estos sirvan de apoyo para facilitar el objetivo. Hay quienes tienen la facilidad de tenerlos sin ninguna práctica y estos cigarros potencian el efecto de lucidez en sus sueños.'
    },
          
  ];

  return (
    <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 5 }}> 
      <Container justifyContent='center' spacing={4}>
        <div className={classes.toolbar} />
				<Typography variant="h3" align="center">Cigarrillos</Typography>
        <div className={classes.faqs}>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
    </Box>
  )
}

export default Faq
