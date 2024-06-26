import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  list: {
    'list-style-type': 'none',
    margin: 0,
    padding: 0,
  },
  element: {
    'padding-top': '8px',
  },
  icon: {
    'padding-top': '8px',
    display: 'flex',
    alignItems: 'center'
  }, 
  iconText: {
    'padding-left': '5px',
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginTop: 'auto'
  }
}))
