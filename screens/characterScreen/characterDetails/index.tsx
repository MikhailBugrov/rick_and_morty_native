import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
import { useGetCharacterByIdQuery } from "../../../api/ApiRickAndMorty";
import Loading from "../../../components/loading";

const CharacterDetails = ({ navigation, route }: { navigation: any; route: any }) => {
  const { data, isFetching } = useGetCharacterByIdQuery(route.params.id);

  return (
    <Loading isLoading={isFetching}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{data?.character.name}</Text>
        </View>

        <Image source={{ uri: data?.character.image }} style={{ width: 200, height: 200 }} />

        <Text>
          Status: {data?.character.status}
          {"\n"}
          Origin: {data?.character.origin.name}
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("LocationDetails", { id: data?.character.location.id })}>
          <Text>Location: {data?.character.location.name}</Text>
        </TouchableOpacity>

        <Text>Episodes:</Text>
        {data?.character.episode?.map((episode) => (
          <TouchableOpacity key={episode.id} onPress={() => navigation.navigate("EpisodeDetails", { id: episode.id })}>
            <Text>
              {episode.episode}
              {"\n"}
              {episode.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Loading>
  );
};

export default CharacterDetails;
