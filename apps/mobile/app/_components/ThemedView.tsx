import { View, type ViewProps } from 'react-native';

import { globals } from '@/utils/globals';

export type ThemedViewProps = ViewProps;

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  return <View style={[{ backgroundColor: globals.colors.bg }, style]} {...otherProps} />;
}
