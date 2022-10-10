import { MantineProvider, Text, Button, Stack, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import { useState } from "react";
import Shell from "./shell";

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
    <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
      <Shell></Shell>
      
      {/* <Stack align="center" mt={50}>
        <Text size="xl" weight={500}>
          Welcome to Mantine!
        </Text>
        <Button color='red'>Click the button</Button>
      </Stack> */}
    </MantineProvider></ColorSchemeProvider>
  );
}
