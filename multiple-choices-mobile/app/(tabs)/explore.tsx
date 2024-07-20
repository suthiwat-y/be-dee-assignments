import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const rankings = [
  { name: "Joe", scores: 20 },
  { name: "Tim", scores: 19 },
  { name: "Max", scores: 15 },
  { name: "John", scores: 14 },
  { name: "Marry", scores: 12 },
];

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Leader board (Mock)</ThemedText>
      </ThemedView>
      {rankings.map((r, index) => (
        <View key={`${r.name}-${index}`} style={styles.ranking}>
          <ThemedText type="defaultSemiBold">
            {index + 1}. {r.name}
          </ThemedText>
          <ThemedText type="defaultSemiBold">{r.scores}</ThemedText>
        </View>
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  ranking: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
