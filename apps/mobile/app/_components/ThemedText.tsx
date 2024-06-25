import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/data/general/hooks/useThemeColor';
import { globals } from '@/utils/globals';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'modulo';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'modulo' ? styles.modulo : undefined,
        {
          color: type != 'modulo' ? globals.colors.primary : globals.colors.white,
          fontFamily: "Poppins",
        }, style
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 12,
    lineHeight: 16,
  },
  defaultSemiBold: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 18,
  },
  modulo: {
    fontSize: 13,
    color: '#fff'
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
