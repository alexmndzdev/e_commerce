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
  }
}));
