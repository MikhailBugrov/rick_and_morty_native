import { View, Text, Button, Image } from "react-native";

import { Character } from "../../../api/types";
import { useNavigation } from "@react-navigation/native";

interface CardCharacterProps {
  data?: Character;
  onTryAgain: () => void;
}

const CardCharacter = ({ data, onTryAgain }: CardCharacterProps) => {
  const navigation: any = useNavigation();
  return (
    <View>
      <Text>
        Congratulations!
        {"\n"}
        Now you're {data?.character.name}
      </Text>
      <Text>
        Status: {data?.character.status}
        {"\n"}
        Location: {data?.character.location.name}
      </Text>
      <Image source={{ uri: data?.character.image }} style={{ width: 200, height: 200 }} />

      <Button onPress={() => navigation.navigate("CharacterDetails", { id: data?.character.id })} title="Details" />
      <Button onPress={onTryAgain} title="Try again" />
    </View>
  );
};

export default CardCharacter;
