import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
//import InstagramIcon from '@mui/icons-material/Instagram';
import { Instagram, PhoneAndroid } from '@material-ui/icons'

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 8 }}
        bgcolor="#567aac"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4} offset={{ sm: 8 }}>
              <Box borderBottom={1}>Encuentranos</Box>
              <ul>
                <li>
                  <Link href="https://www.instagram.com/magnolia_herbal/" color="inherit">
                    <Instagram/>
                  </Link>
                </li>
                <li>
									<PhoneAndroid/>
                  <span>3121152021</span>
                </li>
                <li>
                  <Link href="/faq" color="inherit">
                    Preguntas Frecuentes
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
