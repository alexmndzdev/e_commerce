import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(9),
  },
  //root: {
    //flexGrow: 1,
  //},
  category: {
    textAlign: 'center'
  },
  itemCard: {
    maxWidth: '25%'
  }
}))
