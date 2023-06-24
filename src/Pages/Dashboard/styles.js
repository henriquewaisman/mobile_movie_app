import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardMovies: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      width: '100%',
    },
    titulo: {
      fontSize: '150%',
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subtitulo: {
      fontSize: '100%',
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '10px',
    },
    poster: {
        width: 200,
        height: 400,
        marginBottom: '10px',
    },
    tituloSinopse: {
        fontSize: '100%',
        fontWeight: 'bold',
    },
    sinopse: {
      color: 'black',
      textAlign: 'center',
      maxWidth: 390,
      width: '100%',
      marginBottom: '10px',
    },
  });

  export default styles;