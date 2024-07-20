import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import QuestionItem from "@/components/QuestionItem";

export default function QuestionsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      {shuffleArray(questions).map((q, index) => (
        <QuestionItem
          key={`${q.title}-${index}`}
          title={q.title}
          answers={q.answer}
        />
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

const questions: { title: string; answer: string[] }[] = [
  {
    title: "What is the capital of France?",
    answer: ["Berlin", "Madrid", "Paris", "Lisbon"],
  },
  {
    title: "Which planet is known as the Red Planet?",
    answer: ["Earth", "Mars", "Jupiter", "Venus"],
  },
  {
    title: "What is the largest ocean on Earth?",
    answer: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
  },
  {
    title: "Who wrote 'Hamlet'?",
    answer: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
  },
  {
    title: "Which element has the chemical symbol 'O'?",
    answer: ["Gold", "Oxygen", "Silver", "Iron"],
  },
  {
    title: "What is the speed of light?",
    answer: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
  },
  {
    title: "Which is the smallest prime number?",
    answer: ["0", "1", "2", "3"],
  },
  {
    title: "Who painted the Mona Lisa?",
    answer: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
  },
  {
    title: "Which country is the largest by land area?",
    answer: ["China", "United States", "Canada", "Russia"],
  },
  {
    title: "What is the hardest natural substance on Earth?",
    answer: ["Gold", "Iron", "Diamond", "Platinum"],
  },
  {
    title: "Which organ is responsible for pumping blood through the body?",
    answer: ["Lungs", "Brain", "Heart", "Kidneys"],
  },
  {
    title: "What is the main ingredient in traditional Japanese miso soup?",
    answer: ["Soybean paste", "Rice", "Seaweed", "Fish"],
  },
  {
    title: "Which gas is most abundant in the Earth's atmosphere?",
    answer: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
  },
  {
    title: "What is the smallest unit of life?",
    answer: ["Atom", "Molecule", "Cell", "Organ"],
  },
  {
    title: "In which year did the Titanic sink?",
    answer: ["1905", "1912", "1918", "1923"],
  },
  {
    title: "Which continent is the Sahara Desert located in?",
    answer: ["Asia", "North America", "Australia", "Africa"],
  },
  {
    title: "What is the capital city of Japan?",
    answer: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
  },
  {
    title: "Who is known as the 'Father of Computers'?",
    answer: [
      "Albert Einstein",
      "Isaac Newton",
      "Charles Babbage",
      "Nikola Tesla",
    ],
  },
  {
    title: "What is the boiling point of water at sea level?",
    answer: ["50°C", "100°C", "150°C", "200°C"],
  },
  {
    title: "Which language is primarily spoken in Brazil?",
    answer: ["Spanish", "French", "Portuguese", "English"],
  },
];

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
