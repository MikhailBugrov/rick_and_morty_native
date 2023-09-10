import { useState } from "react";
import { useGetCharacterByIdQuery } from "../../../api/ApiRickAndMorty";
import MAX_CHARACTERS from "../../../constants/constants";
import steps from "./steps";
import Questions from "./Questions";
import CardCharacter from "./CardCharacter";

const WhoYou = () => {
  const [showCharacter, setShowCharacter] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [id, setId] = useState(Math.floor(Math.random() * MAX_CHARACTERS) + 1);

  const { data } = useGetCharacterByIdQuery(id);

  const handleQuestionAnswered = () => {
    if (currentQuestion === steps.length) {
      setShowCharacter(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleTryAgain = () => {
    setId(Math.floor(Math.random() * MAX_CHARACTERS) + 1);
    setShowCharacter(false);
    setCurrentQuestion(1);
  };

  if (showCharacter) {
    return <CardCharacter data={data} onTryAgain={handleTryAgain} />;
  }

  return <Questions steps={steps} currentQuestion={currentQuestion} onQuestionAnswered={handleQuestionAnswered} />;
};

export default WhoYou;
