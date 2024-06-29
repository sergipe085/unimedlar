import { AuthProvider } from '@/data/auth/hooks/useAuth';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { Suspense, useEffect } from 'react';
import * as notifications from '@/lib/notifications';
import 'react-native-reanimated';
import { View } from 'react-native';
import { ThemedText } from '@/app/_components/ThemedText';
import { globals } from '@/utils/globals';
import { Camera } from 'expo-camera';
import { LoadingProvider } from '@/data/general/hooks/useLoading';
import "../global.css"
import { Header } from './_components/Header';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();
notifications.setupHandler();
Camera.requestCameraPermissionsAsync()

export default function Root() {

    notifications.useNotificationHandler()
    const [loaded] = useFonts({
        Poppins: require('../assets/fonts/Poppins-Bold.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    useEffect(() => {
        notifications.registerForPushNotificationsAsync().then(console.log);
    }, [])

    if (!loaded) {
        return null;
    }


    return (
        <ThemeProvider value={DarkTheme}>
            <AuthProvider>
                <LoadingProvider>
                    <GestureHandlerRootView style={{ flex: 1 }}>
                        <Header />
                        <Slot />
                    </GestureHandlerRootView>
                </LoadingProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}