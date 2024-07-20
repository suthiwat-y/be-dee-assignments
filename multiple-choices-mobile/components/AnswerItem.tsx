import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  name: string;
  isSelected: boolean;
  onPress: () => void;
}

const AnswerItem: FC<Props> = ({ name, isSelected, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.row}>
          <View
            style={isSelected ? styles.selectedIndicator : styles.indicator}
          ></View>
          <Text>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AnswerItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  indicator: {
    borderRadius: 99,
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#EDEDF3",
  },
  selectedIndicator: {
    borderRadius: 99,
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#EDEDF3",
    backgroundColor: "#22EE99",
  },
});
