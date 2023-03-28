import { Text, View, SafeAreaView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import ButtonShowcase from './src/screens/ButtonShowcase';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <SafeAreaView className="flex-1 bg-light dark:bg-dark">
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <View className="h-20 items-center">
        <Pressable className="bg-dark/10 dark:bg-light/10 p-2 rounded-full" onPress={toggleColorScheme}>
          <Text className="text-3xl">{isDark ? '🌞' : '🌛'}</Text>
        </Pressable>
      </View>
      <ButtonShowcase />
    </SafeAreaView>
  );
}
