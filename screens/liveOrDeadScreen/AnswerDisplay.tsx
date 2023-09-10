import { Text, Button } from "react-native-paper";

interface AnswerDisplayProps {
  status: "correct" | "incorrect" | null;
  onNextQuestion: (answer: string) => void;
}

const AnswerDisplay = ({ status, onNextQuestion }: AnswerDisplayProps) => {
  if (status === "correct") {
    return <Text>Correct!</Text>;
  }

  if (status === "incorrect") {
    return <Text>Incorrect!</Text>;
  }

  return (
    <>
      <Button onPress={() => onNextQuestion("Dead")}>Dead</Button>
      <Button onPress={() => onNextQuestion("Alive")}>Alive</Button>
      <Button onPress={() => onNextQuestion("unknown")}>Unknown</Button>
    </>
  );
};

export default AnswerDisplay;
