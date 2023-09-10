import { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { useGetCharactersQuery } from "../../../api/ApiRickAndMorty";
import Loading from "../../../components/loading";
const CharactersList = ({ navigation }: any) => {
  const [listSearchParams, setListSearchParams] = useState<{ name: string; page: number }>({
    name: "",
    page: 1,
  });

  const { data, isFetching } = useGetCharactersQuery({
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
    if (data?.characters.info.pages) {
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
        {!data?.characters?.results.length && <Text>No results found for this filter</Text>}

        {data?.characters.results.map((character) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("CharacterDetails", { id: character.id })}
            key={character.id}>
            <View>
              <Text>{character.name}</Text>
              <Image source={{ uri: character.image }} style={{ width: 100, height: 100 }} />
              <Text>
                Status: {character.status}
                {"\n"}
                Location: {character.location.name}
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

export default CharactersList;
