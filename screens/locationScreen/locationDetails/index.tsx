import { View, Text, TouchableOpacity } from "react-native";
import { useGetLocationByIdQuery } from "../../../api/ApiRickAndMorty";
import Loading from "../../../components/loading";

const LocationDetalis = ({ navigation, route }: { navigation: any; route: any }) => {
  const { data, isFetching } = useGetLocationByIdQuery(route.params.id);

  return (
    <Loading isLoading={isFetching}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{data?.location.name}</Text>
        </View>

        <Text>
          Name: {data?.location.type}
          {"\n"}
          Air date: {data?.location.dimension}
        </Text>

        <Text>Characters:</Text>
        {data?.location.residents?.map((residents) => (
          <TouchableOpacity
            key={residents.id}
            onPress={() => navigation.navigate("CharacterDetails", { id: residents.id })}>
            <Text>{residents.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Loading>
  );
};

export default LocationDetalis;
