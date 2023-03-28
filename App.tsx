import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import Button from './src/components/Button';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-white dark:bg-black">
      <Text className="color-black dark:color-white">Open up App.tsx to start working on your app!</Text>
      <Button variant="default" onPress={toggleColorScheme}>
        Change theme to {isDark ? 'light' : 'dark'} mode
      </Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </View>
  );
}
