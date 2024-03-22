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
  phoneElement: {
    'padding-top': '8px',
    display: 'flex',
    alignItems: 'center'
  }, 
  phoneText: {
    'padding-left': '5px',
  },
  footer: {
    position: 'absolute',
    left: '0px',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    //padding: theme.spacing(2),
  }
}))
