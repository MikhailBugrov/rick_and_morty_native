import { View, Text, Button } from "react-native";

interface Steps {
  label: string;
  question: string;
  options: string[];
}

interface QuestionnaireProps {
  steps: Steps[];
  currentQuestion: number;
  onQuestionAnswered: () => void;
}

const Questions = ({ steps, currentQuestion, onQuestionAnswered }: QuestionnaireProps) => (
  <View>
    <Text>Which character from Rick and Morty are you?</Text>
    <Text>Answer five questions to find out</Text>
    <View style={{ flexDirection: "row" }}>
      {steps.map(({ label }, index) => (
        <Text key={label} style={{ fontWeight: currentQuestion === index + 1 ? "bold" : "normal" }}>
          {label}
        </Text>
      ))}
    </View>

    {steps.map(({ label, question, options }, index) => (
      <View key={label} style={{ display: currentQuestion === index + 1 ? "flex" : "none" }}>
        <Text>{question}</Text>

        {options.map((option) => (
          <Button key={option} onPress={onQuestionAnswered} title={option} />
        ))}
      </View>
    ))}
  </View>
);

export default Questions;
