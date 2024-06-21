import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform, Alert } from 'react-native';
import ParallaxScrollView from '@/app/_components/ParallaxScrollView';
import { ThemedText } from '@/app/_components/ThemedText';
import { useAuth } from '@/data/auth/hooks/useAuth';
import { Card } from '@/app/_components/Card';
import { Linking } from 'react-native';

export default function HomeEmergencia() {
  const { auth } = useAuth();

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestCallPermission();
    }
  }, []);

  async function requestCallPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
        {
          title: 'Call Phone Permission',
          message: 'This app needs access to your phone to make calls.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permission denied', 'You need to grant phone call permission to use this feature.');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  function callNumber(numero) {
    return Linking.openURL(`tel:${numero}`);
  }

  return (
    <ParallaxScrollView>
      <ThemedText type="default">Emergência</ThemedText>

      <Card type={'outline'} style={{ padding: 10 }} onPress={() => callNumber('190')}>
        <ThemedText type='title'>190 - Polícia</ThemedText>
      </Card>
      <Card type={'outline'} style={{ padding: 10 }} onPress={() => callNumber('191')}>
        <ThemedText type='title'>191 - Bombeiro</ThemedText>
      </Card>
      <Card type={'outline'} style={{ padding: 10 }} onPress={() => callNumber('192')}>
        <ThemedText type='title'>192 - Samu</ThemedText>
      </Card>
    </ParallaxScrollView>
  );
}
