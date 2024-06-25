import * as Notifications from 'expo-notifications';

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

    Notifications.setNotificationCategoryAsync('questionnaire', [
        {
          identifier: 'YES',
          buttonTitle: 'Sim',
          options: { opensAppToForeground: false },
        },
        {
          identifier: 'NO',
          buttonTitle: 'Não',
          options: { opensAppToForeground: false },
        },
      ]);
  
      Notifications.addNotificationResponseReceivedListener(response => {
        const actionIdentifier = response.actionIdentifier;
        if (actionIdentifier === 'YES' || actionIdentifier == "NO") {
            sendFeedbackNotification();
        }   
      });
  
      Notifications.setNotificationCategoryAsync('feedback', [
        {
          identifier: 'SEND_FEEDBACK',
          buttonTitle: 'Enviar Feedback',
          options: { opensAppToForeground: false },
          textInput: {
            submitButtonTitle: 'Enviar',
            placeholder: 'Digite seu feedback',
          },
        },
      ]);
  
      Notifications.addNotificationResponseReceivedListener(response => {
        if (response.actionIdentifier === 'SEND_FEEDBACK') {
          const feedback = response.userText;
          console.log({
            response
          })
          console.log('Feedback:', feedback);
        }
      });
}