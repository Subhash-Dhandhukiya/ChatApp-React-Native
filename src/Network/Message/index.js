import firebase from '../../Firebase/config'

export const senderMsg = async (msgValue, currentUserId, guestUserId, img) => {
    try {
        return await firebase
            .database()
            .ref('message/' + currentUserId)
            .child(guestUserId)
            .push({
                message: {
                    sender: currentUserId,
                    reciver: guestUserId,
                    msg: msgValue,
                    img: img
                }
            })
    } catch (error) {
        return error;
    }
}


export const recieveMsg = async (msgValue, currentUserId, guestUserId, img) => {
    try {
        return await firebase
            .database()
            .ref('message/' + guestUserId)
            .child(currentUserId)
            .push({
                message: {
                    sender: currentUserId,
                    reciver: guestUserId,
                    msg: msgValue,
                    img: img
                }
            })
    } catch (error) {
        return error;
    }
}