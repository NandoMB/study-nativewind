import { Text, Pressable, PressableProps, TextProps } from 'react-native'

type ComponentProps = Omit<PressableProps, 'children'> & TextProps & {
  variant?: keyof typeof variantStyles
};

const variantStyles = {
  default: {
    container: 'bg-gray-500 border-gray-500 active:bg-gray-600 active:border-gray-700 dark:bg-gray-400 dark:active:bg-gray-500 dark:border-gray-400 dark:active:border-gray-600',
    text: 'text-gray-100 dark:text-gray-900',
  },
  primary: {
    container: 'bg-blue-500 border-blue-500 active:bg-blue-600 active:border-blue-700 dark:bg-blue-400 dark:active:bg-blue-500 dark:border-blue-400 dark:active:border-blue-600',
    text: 'text-blue-100 dark:text-blue-900',
  },
  secondary: {
    container: 'bg-yellow-500 border-yellow-500 active:bg-yellow-600 active:border-yellow-700 dark:bg-yellow-400 dark:active:bg-yellow-500 dark:border-yellow-400 dark:active:border-yellow-600',
    text: 'text-yellow-100 dark:text-yellow-900',
  },
  tertiary: {
    container: 'bg-green-500 border-green-500 active:bg-green-600 active:border-green-700 dark:bg-green-400 dark:active:bg-green-500 dark:border-green-400 dark:active:border-green-600',
    text: 'text-green-100 dark:text-green-900',
  }
};

export default function Button({ children, variant, ...props }: ComponentProps) {
  return (
    <Pressable
      className={`
        px-8 py-4
        border-2 rounded-2xl
        ${variantStyles[variant ?? 'default'].container}
      `}
      {...props}>
      <Text className={`
        text-[16px] font-bold
        ${variantStyles[variant ?? 'default'].text}
      `}>
        {children}
      </Text>
    </Pressable>
  );
}
