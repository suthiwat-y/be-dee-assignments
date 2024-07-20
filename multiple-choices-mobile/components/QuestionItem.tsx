import { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AnswerItem from "./AnswerItem";

interface Props {
  title: string;
  answers: string[];
}

const QuestionItem: FC<Props> = ({ title, answers }) => {
  const [selectedIndex, set] = useState<number>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {answers.map((a, index) => {
        return (
          <AnswerItem
            key={`${a}-${index}`}
            name={a}
            isSelected={index == selectedIndex}
            onPress={() => set(index)}
          />
        );
      })}
    </View>
  );
};

export default QuestionItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 8,
  },
});
