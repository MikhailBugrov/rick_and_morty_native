import { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { useGetEpisodesQuery } from "../../../api/ApiRickAndMorty";
import Loading from "../../../components/loading";

const EpisodesList = ({ navigation }: any) => {
  const [listSearchParams, setListSearchParams] = useState({ name: "", episode: "", page: 1 });

  const { data, isFetching } = useGetEpisodesQuery({
    page: listSearchParams.page,
    filter: { name: listSearchParams.name, episode: listSearchParams.episode },
  });

  useEffect(() => {
    setListSearchParams((prevSearchParams) => ({ ...prevSearchParams, page: 1 }));
  }, [listSearchParams.name, listSearchParams.episode]);

  const goToPreviousPage = () => {
    if (listSearchParams.page > 1) {
      setListSearchParams((prevSearchParams) => ({ ...prevSearchParams, page: prevSearchParams.page - 1 }));
    }
  };

  const goToNextPage = () => {
    if (data?.episodes.info.pages) {
      setListSearchParams((prevSearchParams) => ({ ...prevSearchParams, page: prevSearchParams.page + 1 }));
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <Text>Name</Text>
        <TextInput
          value={listSearchParams.name}
          onChangeText={(value) =>
            setListSearchParams((prevSearchParams) => ({ ...prevSearchParams, name: value, page: 1 }))
          }
        />
        <Text>Episode</Text>
        <TextInput
          value={listSearchParams.episode}
          onChangeText={(value) =>
            setListSearchParams((prevSearchParams) => ({ ...prevSearchParams, episode: value, page: 1 }))
          }
        />
      </View>

      <Loading isLoading={isFetching}>
        {!data?.episodes?.results.length && <Text>No results found for this filter</Text>}

        {data?.episodes.results.map((episode) => (
          <TouchableOpacity onPress={() => navigation.navigate("EpisodeDetails", { id: episode.id })} key={episode.id}>
            <View>
              <Text>{episode.episode}</Text>
              <Text>
                Name: {episode.name}
                {"\n"}
                Air date: {episode.air_date}
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

export default EpisodesList;
