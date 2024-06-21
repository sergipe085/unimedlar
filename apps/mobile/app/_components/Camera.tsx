import { CameraView, useCameraPermissions } from "expo-camera";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { ThemedText } from "./ThemedText";
import { Button } from "./Button";
import { globals } from "@/utils/globals";
import { useRef } from "react";

type Props = {
    onCancel();
    onTakePicture(imageData: string);
}

export function Camera({ onCancel, onTakePicture }: Props) {
    const [permission, requestPermission] = useCameraPermissions();
    let cameraRef = useRef<CameraView>()

    console.log(permission)

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={{ flex: 1 }}>
                <ThemedText style={{ textAlign: 'center' }}>We need your permission to show the camera</ThemedText>
                <Button type='default' onPress={requestPermission}>Conceder permissao</Button>
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={onCancel}>
                        <ThemedText type="title">x</ThemedText>
                    </TouchableOpacity>
                </View>
                <View style={styles.takeContainer}>
                    <TouchableOpacity 
                        style={{
                            backgroundColor: globals.colors.bg,
                            width: 64,
                            height: 64,
                            borderRadius: 32,
                            borderColor: "white",
                            borderWidth: 4
                        }}
                        onPress={async () => {
                            const pic = await cameraRef.current.takePictureAsync();
                            onTakePicture(pic.uri);
                        }}
                    >
                        {/* <ThemedText type="title">x</ThemedText> */}
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 32
    },
    takeContainer: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 32
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
});