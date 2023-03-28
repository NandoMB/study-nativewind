import { Text, ScrollView } from 'react-native';
import Button from '../../src/components/Button';

export default function ButtonShowcase() {
  return (
    <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }} showsVerticalScrollIndicator={false}>
      <Text className="text-2xl color-black dark:color-white">Solid</Text>
      <Button variant="solid" colorScheme="default">Default</Button>
      <Button variant="solid" colorScheme="primary">Primary</Button>
      <Button variant="solid" colorScheme="secondary">Secondary</Button>
      <Button variant="solid" colorScheme="tertiary">Tertiary</Button>

      <Text className="text-2xl color-black dark:color-white">Outline</Text>
      <Button variant="outline" colorScheme="default">Default</Button>
      <Button variant="outline" colorScheme="primary">Primary</Button>
      <Button variant="outline" colorScheme="secondary">Secondary</Button>
      <Button variant="outline" colorScheme="tertiary">Tertiary</Button>

      <Text className="text-2xl color-black dark:color-white">Ghost</Text>
      <Button variant="ghost" colorScheme="default">Default</Button>
      <Button variant="ghost" colorScheme="primary">Primary</Button>
      <Button variant="ghost" colorScheme="secondary">Secondary</Button>
      <Button variant="ghost" colorScheme="tertiary">Tertiary</Button>
    </ScrollView>
  );
}
