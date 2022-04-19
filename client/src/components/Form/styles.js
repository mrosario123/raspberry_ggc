import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#b8c6db',
    backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 90%)"
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#b8c6db',
    backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 90%)"
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    textAlign: "right"
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: '#63d471',
      backgroundImage: "linear-gradient(315deg, #63d471 0%, #233329 74%)",
    fontFamily: "New Times Roman"

},
  buttonClear: {
    backgroundColor: '#233329',
    backgroundImage: "linear-gradient(315deg, #233329 0%, #63d471 74%)",
    fontFamily: "New Times Roman"
  },
  formTitle: {
    color: "darkgreen",
    fontFamily: "New Times Roman"
  }
}));