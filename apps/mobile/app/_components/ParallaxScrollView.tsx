import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet } from 'react-native';

import { ThemedView } from '@/app/_components/ThemedView';

type Props = PropsWithChildren;

export default function ParallaxScrollView({
  children,
}: Props) {

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>{children}</ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 12,
    paddingBottom: 0,
    paddingTop: 12,
    gap: 16,
    overflow: 'hidden',
  },
});
