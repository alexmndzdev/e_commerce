import {
  Grid,
  Box,
  Link as MuiLink,
  Typography,
  Container,
  AppBar
}  from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import {
  Instagram,
  WhatsApp,
  InfoOutlined,
  HelpOutline
} from '@mui/icons-material'
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
                    <MuiLink
                      className={classes.icon}
                      href="https://www.instagram.com/magnolia_herbal/"
                      color="inherit"
                      underline="hover">
                      <Instagram/>
                      <span className={classes.iconText}>
                        @magnolia_herbal
                      </span>
                    </MuiLink>
                  </li>
                  <li>
                    <MuiLink
                      className={classes.icon}
                      href="https://wa.me/523121152021/?text="
                      color="inherit"
                      underline="hover">
                      <WhatsApp/>
                      <span className={classes.iconText}>
                        3121152021
                      </span>
                    </MuiLink>
                  </li>
                  <li>
                    <MuiLink
                      component={RouterLink}
                      to="/preguntas-frecuentes"
                      className={classes.icon}
                      color="inherit"
                      underline="hover">
                      <HelpOutline/>
                      <span className={classes.iconText}>
                        Preguntas frecuentes
                      </span>
                    </MuiLink>
                  </li>
                  <li>
                    <MuiLink
                      component={RouterLink}
                      to="/acerca-de-nosotros"
                      className={classes.icon}
                      color="inherit"
                      underline="hover">
                      <InfoOutlined/>
                      <span className={classes.iconText}>
                        Acerca de nosotros
                      </span>
                    </MuiLink>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </AppBar>
    </footer>
  )
}
