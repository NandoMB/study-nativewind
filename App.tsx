import { Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import Button from './src/components/Button';
import ButtonShowcase from './src/screens/ButtonShowcase';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <View className="flex-1 pt-10 px-4 bg-neutral-300 dark:bg-neutral-800">
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Button onPress={toggleColorScheme}>
        Change theme to {isDark ? 'light' : 'dark'} mode!
      </Button>
      <ButtonShowcase />
    </View>
  );
}
