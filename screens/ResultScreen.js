import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const ResultScreen = ({ result }) => {
    const [image, setImage] = useState("")

    useEffect(() => {
        handleImage()
    }, [])

    const handleImage = () => {
        if (result === "win") {
            setImage(win)
            return
        }
        setImage(
            "https://portal.33bits.net/wp-content/uploads/2018/12/gameoverphrase.jpg"
        )
    }
    return (
        <View style={styles.container}>
            <Card>
                <Text>
                    {result}
                </Text>
            </Card>
            <Image
                source={{
                    uri: image
                }} />
        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 200,
        width: 200,
    }
})