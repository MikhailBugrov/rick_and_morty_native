import { useState } from "react";
import { useGetCharacterByIdQuery } from "../../api/ApiRickAndMorty";
import Loading from "../../components/loading";
import MAX_CHARACTERS from "../../constants/constants";
import AnswerDisplay from "./AnswerDisplay";
import { Text, Button, View, Image } from "react-native";

const LiveOrDead = () => {
  const [characterId, setCharacterId] = useState(Math.floor(Math.random() * MAX_CHARACTERS) + 1);
  const { data, isLoading } = useGetCharacterByIdQuery(characterId);
  const [answer, setAnswer] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  function handleNext() {
    setAnswer(null);
    setCharacterId(Math.floor(Math.random() * 826) + 1);
  }

  function handleAnswer(userAnswer: string) {
    if (data?.character.status === userAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    setAnswer(userAnswer);
    setTimeout(() => {
      handleNext();
    }, 1000);
  }

  const status = data?.character.status === answer ? "correct" : "incorrect";

  return (
    <>
      <Text>Live or Dead</Text>
      <Loading isLoading={isLoading}>
        <View>
          <View>
            <Text>Correct answers: {correctAnswers}</Text>
            <Text>Incorrect answers: {incorrectAnswers}</Text>
          </View>
          <Text>{data?.character.name}</Text>
          <Text>Location: {data?.character.location.name}</Text>
          <Image source={{ uri: data?.character.image }} style={{ width: 200, height: 200 }} />
          <View>
            <AnswerDisplay status={answer ? status : null} onNextQuestion={(userAnswer) => handleAnswer(userAnswer)} />
          </View>
        </View>
      </Loading>
    </>
  );
};

export default LiveOrDead;
