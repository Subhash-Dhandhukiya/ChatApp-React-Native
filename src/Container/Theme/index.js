import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Content, ListItem, Radio, Right, Left } from 'native-base';
import { color } from '../../Utility'

const Theme = ({ navigation }) => {

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.txt}>THEME</Text>
            </View>
            <View style={{ height: 1, width: "100%", backgroundColor: color.WHITE, shadowColor: 'rgba(0, 0, 0, 0.2)', elevation: 1 }} />


            <Container>
                <Content>
                    <ListItem>
                        <Left>
                            <Text>Dark</Text>
                        </Left>
                        <Right>
                            <Radio selected={false} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Light</Text>
                        </Left>
                        <Right>
                            <Radio selected={true} />
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        </View>
    )
}

export default Theme

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.WHITE
    },
    header: {
        height: 48,
        alignItems: 'center',
        justifyContent: "center",
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOpacity: 0.2,
        elevation: 6
    },
    txt: {
        fontSize: 20,
        color: color.FONT,
        letterSpacing: 0.7
    }
})