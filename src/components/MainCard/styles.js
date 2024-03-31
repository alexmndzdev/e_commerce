import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    maxHeight: '100%',
    //height: '50rem'
  },
  media: {
    height: '35rem',
    //paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
