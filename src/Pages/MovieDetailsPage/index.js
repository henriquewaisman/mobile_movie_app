import { View, Text } from "react-native";

export default function MovieDetailsPage({route}){

  const {movie} = route.params;

  return(
    <View>
      <Text>Detalhes do filme</Text>
      <Text>{movie.titulo}</Text>
      <Text>{movie.sinopse}</Text>
    </View>
  )
}