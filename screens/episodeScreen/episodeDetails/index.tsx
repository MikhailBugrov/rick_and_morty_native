import { View, Text, TouchableOpacity } from "react-native";
import { useGetEpisodeByIdQuery } from "../../../api/ApiRickAndMorty";
import Loading from "../../../components/loading";

const EpisodeDetails = ({ navigation, route }: { navigation: any; route: any }) => {
  const { data, isFetching } = useGetEpisodeByIdQuery(route.params.id);

  return (
    <Loading isLoading={isFetching}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{data?.episode.name}</Text>
        </View>

        <Text>
          Air date: {data?.episode.air_date}
          {"\n"}
          Episode: {data?.episode.episode}
        </Text>

        <Text>Characters:</Text>
        {data?.episode.characters?.map((character) => (
          <TouchableOpacity
            key={character.id}
            onPress={() => navigation.navigate("CharacterDetails", { id: character.id })}>
            <Text>{character.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Loading>
  );
};

export default EpisodeDetails;
