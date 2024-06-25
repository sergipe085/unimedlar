import * as Notifications from 'expo-notifications';
import { router, useRouter } from 'expo-router';
import { useEffect } from 'react';

const sendQuestionnaireNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Questionário',
        body: 'O profissional realizou o atendimento?',
        categoryIdentifier: 'questionnaire',
      },
      trigger: null,
    });
  };

  const sendFeedbackNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Feedback',
        body: 'Você deseja nos enviar algum feedback?',
        categoryIdentifier: 'feedback',
      },
      trigger: null,
    });
  };

export async function registerForPushNotificationsAsync() {
    let token;

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }
    if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
    }
    token = (await Notifications.getExpoPushTokenAsync({
        projectId: "0fafb0ba-853a-4bf4-b095-0edb7b2b8ad6"
    })).data;

    return token;
}

export async function setupHandler() {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: true
        }),
    });   

    sendQuestionnaireNotification()
}

export function useNotificationHandler() {
    const router = useRouter();

    const lastNotificationResponse =
        Notifications.useLastNotificationResponse();

        useEffect(() => {
            if (lastNotificationResponse) {
                if (lastNotificationResponse.actionIdentifier == "YES") {
                    router.navigate("historico")
                }    
            }
        }, [lastNotificationResponse]);

    useEffect(() => {

        Notifications.setNotificationCategoryAsync('questionnaire', [
            {
                identifier: 'YES',
                buttonTitle: 'Sim',
                options: { opensAppToForeground: true },
            
            },
            {
                identifier: 'NO',
                buttonTitle: 'Não',
                options: { opensAppToForeground: false },
            },
        ]);
  
        const subscription = Notifications.addNotificationResponseReceivedListener(response => {
            const actionIdentifier = response.actionIdentifier;

            if (actionIdentifier === 'YES' || actionIdentifier == "NO") {
                // router.navigate("historico")
                
            }  
        });

        return () => {
            subscription.remove()
        }
    }, [])
}