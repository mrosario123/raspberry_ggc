import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b8c6db',
        backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 90%)"
      },
      heading: {
        color: 'darkgreen',
          fontFamily:"New Times Roman"
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: "column-reverse"
        }
      }
}));

