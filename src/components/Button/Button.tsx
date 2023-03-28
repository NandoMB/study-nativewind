import { Text, Pressable, PressableProps, TextProps } from 'react-native'

type ColorScheme = 'default' | 'primary' | 'secondary' | 'tertiary';
type Variant = 'solid' | 'outline' | 'ghost';
type ComponentProps = Omit<PressableProps, 'children'> & TextProps & {
  colorScheme?: ColorScheme;
  variant?: Variant;
};

const VARIANT_STYLES_LIGHT = {
  solid: {
    default: {
      container: `
        bg-gray-400
        border-gray-400
        active:bg-gray-500
        active:border-gray-500
      `,
      text: `
        text-white
      `
    },
    primary: {
      container: `
        bg-primary-400
        border-primary-400
        active:bg-primary-500
        active:border-primary-500
      `,
      text: `
        text-white
      `
    },
    secondary: {
      container: `
        bg-secondary-400
        border-secondary-400
        active:bg-secondary-500
        active:border-secondary-500
      `,
      text: `
        text-white
      `
    },
    tertiary: {
      container: `
        bg-tertiary-400
        border-tertiary-400
        active:bg-tertiary-500
        active:border-tertiary-500
      `,
      text: `
        text-white
      `
    }
  },
  outline: {
    default: {
      container: `
        bg-transparent
        border-gray-400
        active:bg-gray-400/30
      `,
      text: `
        text-gray-500
      `
    },
    primary: {
      container: `
        bg-transparent
        border-primary-100
        active:bg-primary-400/20
      `,
      text: `
        text-primary-200
      `
    },
    secondary: {
      container: `
        bg-transparent
        border-secondary-200
        active:bg-secondary-400/20
      `,
      text: `
        text-secondary-200
      `
    },
    tertiary: {
      container: `
        bg-transparent
        border-tertiary-300
        active:bg-tertiary-400/20
      `,
      text: `
        text-tertiary-600
      `
    }
  },
  ghost: {
    default: {
      container: `
        bg-transparent
        border-transparent
        active:bg-gray-400/30
      `,
      text: `
        text-gray-500
      `
    },
    primary: {
      container: `
        bg-transparent
        border-transparent
        active:bg-primary-400/20
      `,
      text: `
        text-primary-200
      `
    },
    secondary: {
      container: `
        bg-transparent
        border-transparent
        active:bg-secondary-400/20
      `,
      text: `
        text-secondary-200
      `
    },
    tertiary: {
      container: `
        bg-transparent
        border-transparent
        active:bg-tertiary-400/20
      `,
      text: `
        text-tertiary-600
      `
    }
  }
};

const VARIANT_STYLES_DARK = {
  solid: {
    default: {
      container: `
        bg-gray-400
        border-gray-400
        active:bg-gray-500
        active:border-gray-500
      `,
      text: ``
    },
    primary: {
      container: `
        dark:bg-primary-300
        dark:border-primary-300
        dark:active:bg-primary-400
        dark:active:border-primary-400
      `,
      text: ``
    },
    secondary: {
      container: `
        dark:bg-secondary-500
        dark:border-secondary-500
        dark:active:bg-secondary-600
        dark:active:border-secondary-600
      `,
      text: ``
    },
    tertiary: {
      container: `
        dark:bg-tertiary-600
        dark:border-tertiary-600
        dark:active:bg-tertiary-700
        dark:active:border-tertiary-700
      `,
      text: ``
    }
  },
  outline: {
    default: {
      container: `
        dark:active:bg-gray-400/10
      `,
      text: `
        dark:text-gray-400
      `
    },
    primary: {
      container: `
        dark:active:bg-primary-400/10
      `,
      text: `
        dark:text-primary-100
      `
    },
    secondary: {
      container: `
        dark:border-secondary-100
        dark:active:bg-secondary-400/10
      `,
      text: `
        dark:text-secondary-100
      `
    },
    tertiary: {
      container: `
        dark:border-tertiary-400
        dark:active:bg-tertiary-400/10
      `,
      text: `
        dark:text-tertiary-400
      `
    }
  },
  ghost: {
    default: {
      container: `
        dark:active:bg-gray-400/10
      `,
      text: `
        dark:text-gray-400
      `
    },
    primary: {
      container: `
        dark:active:bg-primary-400/10
      `,
      text: `
        dark:text-primary-100
      `
    },
    secondary: {
      container: `
        dark:active:bg-secondary-400/10
      `,
      text: `
        dark:text-secondary-100
      `
    },
    tertiary: {
      container: `
        dark:active:bg-tertiary-400/10
      `,
      text: `
        dark:text-tertiary-400
      `
    }
  }
};

export default function Button({ children, colorScheme, variant, className, ...props }: ComponentProps) {
  return (
    <Pressable
      className={`
        component
        items-center justify-center px-8 py-4 border-2 rounded-2xl
        ${VARIANT_STYLES_LIGHT[variant ?? 'solid'][colorScheme ?? 'default'].container}
        ${VARIANT_STYLES_DARK[variant ?? 'solid'][colorScheme ?? 'default'].container}
      `}
      {...props}>
      <Text className={`
        text-[16px] font-bold
        ${VARIANT_STYLES_LIGHT[variant ?? 'solid'][colorScheme ?? 'default'].text}
        ${VARIANT_STYLES_DARK[variant ?? 'solid'][colorScheme ?? 'default'].text}
      `}>
        {children}
      </Text>
    </Pressable>
  );
}
