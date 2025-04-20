import { Text, View, StyleSheet, Image } from 'react-native'

export default function PhoneScreen() {

    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/Logo1.png')} style={styles.image} />
            <Image source={require('../assets/img/Rectangle.png')} style={styles.rec} />
            <Image source={require('../assets/img/Rectangle.png')} style={styles.small} />


            <View style={{ alignItems: 'center', top: 169 }}><Text>+234    ∨             phone number</Text>

            </View>

            <Text style={styles.text}>PickEAT PickIT</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: 192.08145141601562,
        height: 150,
        top: 64,
        left: 99,

    },
    text: {
        width: 151,
        height: 24,
        top: -7,
        left: 145,
        fontSize: 20,
        fontWeight: 900,
        color: '#228B22'

    },
    rec: {
        width: 230,
        height: 55,
        top: 260,
        left: 135,
        borderRadius: 10,

    },
    small: {
        width: 100,
        height: 55,
        top: 205,
        left: 25,
        borderRadius: 10,
    },
    pen: {
        marginRight: 20
    }
})
