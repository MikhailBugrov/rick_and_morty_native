import { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { useGetLocationsQuery } from "../../../api/ApiRickAndMorty";
import Loading from "../../../components/loading";

const LocationsList = ({ navigation }: any) => {
  const [listSearchParams, setListSearchParams] = useState({ name: "", page: 1 });

  const { data, isFetching } = useGetLocationsQuery({
    page: listSearchParams.page,
    filter: { name: listSearchParams.name },
  });

  useEffect(() => {
    setListSearchParams({ ...listSearchParams, page: 1 });
  }, [listSearchParams.name]);

  const goToPreviousPage = () => {
    if (listSearchParams.page > 1) {
      setListSearchParams({ ...listSearchParams, page: listSearchParams.page - 1 });
    }
  };

  const goToNextPage = () => {
    if (data?.locations.info.pages) {
      setListSearchParams({ ...listSearchParams, page: listSearchParams.page + 1 });
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <Text>Name</Text>
        <TextInput
          value={listSearchParams.name}
          onChangeText={(value) => setListSearchParams({ ...listSearchParams, name: value, page: 1 })}
        />
      </View>

      <Loading isLoading={isFetching}>
        {!data?.locations?.results.length && <Text>No results found for this filter</Text>}

        {data?.locations.results.map((location) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("LocationDetails", { id: location.id })}
            key={location.id}>
            <View>
              <Text>{location.name}</Text>
              <Text>
                Type: {location.type}
                {"\n"}
                Dimension: {location.dimension}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        <View>
          <TouchableOpacity onPress={goToPreviousPage}>
            <Text>Previous</Text>
          </TouchableOpacity>

          <Text>Page: {listSearchParams.page}</Text>

          <TouchableOpacity onPress={goToNextPage}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </Loading>
    </ScrollView>
  );
};

export default LocationsList;
