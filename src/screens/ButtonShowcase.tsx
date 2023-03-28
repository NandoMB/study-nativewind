import { Text, View } from 'react-native';
import Button from '../../src/components/Button';

export default function ButtonShowcase() {
  return (
    <View className="flex-1 pt-8 gap-4">
      <Text className="text-2xl color-black dark:color-white">Buttons</Text>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </View>
  );
}
