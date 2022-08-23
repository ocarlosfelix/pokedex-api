import { ThemeProvider } from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import theme from "./src/global/styles/theme";
import { Welcome } from "./src/pages/Welcome";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
}
