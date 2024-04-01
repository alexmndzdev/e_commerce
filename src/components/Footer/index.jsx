import {
  Grid,
  Box,
  Link,
  Typography,
  Container,
  AppBar
}  from '@mui/material'
import { Link  as LinkRouter } from 'react-router-dom'
import { Instagram, WhatsApp } from '@mui/icons-material'
import useStyles from './styles.js'

export default function Footer() {
	const classes = useStyles()
  return (
    <footer>
      <AppBar position="static" className={classes.footer}>
        <Box
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 4, sm: 4 }}
          bgcolor="#567aac"
          color="white"
        >
          <Container maxWidth="lg">
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>
                  <Typography>
                    Encuentranos
                  </Typography>
                </Box>
                <ul className={classes.list}>
                  <li>
                    <Link
                      className={classes.phoneElement}
                      href="https://www.instagram.com/magnolia_herbal/"
                      color="inherit"
                      underline="hover">
                      <Instagram/>
                      <span className={classes.phoneText}>
                        @magnolia_herbal
                      </span>
                    </Link>
                  </li>
                  <li className={classes.phoneElement}>
                    <WhatsApp/>
                    <span className={classes.phoneText}>3121152021</span>
                  </li>
                  <li className={classes.phoneElement}>
                    <LinkRouter
                      to="faq"
                      style={{ color: 'inherit', textDecoration: 'none' }}>
                        Preguntas frecuentes
                    </LinkRouter>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </AppBar>
    </footer>
  );
}
