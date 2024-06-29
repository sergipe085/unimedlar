import { Expo } from "expo-server-sdk";

type SendNotification = {
    expoPushToken: string;
    title: string;
    message: string;
}

export async function sendPushNotification({ expoPushToken, title, message }: SendNotification) {
    const expo = new Expo();
    if (!Expo.isExpoPushToken(expoPushToken)) {
        console.log(`${expoPushToken} is not a valid push token`);
        return;
    }
    const chunks = expo.chunkPushNotifications([
        { to: expoPushToken, sound: "default", body: message, title }
    ]);

  const sendChunks = async () => {
    // This code runs synchronously. We're waiting for each chunk to be send.
    // A better approach is to use Promise.all() and send multiple chunks in parallel.
    chunks.forEach(async chunk => {
      console.log("Sending Chunk", chunk);
      try {
        const tickets = await expo.sendPushNotificationsAsync(chunk);
        console.log("Tickets", tickets);
      } catch (error) {
        console.log("Error sending chunk", error);
      }
    });
  };

  await sendChunks();
}