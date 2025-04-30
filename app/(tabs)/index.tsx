import { Image, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Dashboard</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Stats Section */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Stats</ThemedText>
        <View style={styles.statsRow}>
          <ThemedView style={styles.statBox}>
            <ThemedText type="title">12</ThemedText>
            <ThemedText>Tasks</ThemedText>
          </ThemedView>
          <ThemedView style={styles.statBox}>
            <ThemedText type="title">5</ThemedText>
            <ThemedText>Messages</ThemedText>
          </ThemedView>
          <ThemedView style={styles.statBox}>
            <ThemedText type="title">3</ThemedText>
            <ThemedText>Alerts</ThemedText>
          </ThemedView>
        </View>
      </ThemedView>

      {/* Quick Actions Section */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Quick Actions</ThemedText>
        <View style={styles.actionsRow}>
          <ThemedView style={styles.actionButton}>
            <ThemedText type="defaultSemiBold">+ Add Task</ThemedText>
          </ThemedView>
          <ThemedView style={styles.actionButton}>
            <ThemedText type="defaultSemiBold">View Messages</ThemedText>
          </ThemedView>
        </View>
      </ThemedView>

      {/* Recent Activity Section */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Recent Activity</ThemedText>
        <ThemedText>- Task "Design UI" marked as complete</ThemedText>
        <ThemedText>- New message from Alex</ThemedText>
        <ThemedText>- Alert: Update available</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
    gap: 8,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#f0f4f8',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#e0e7ef',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
