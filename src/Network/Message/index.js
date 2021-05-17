import firebase from '../../Firebase/config'

export const senderMsg = async (msgValue, currentUserId, guestUserId, img,seen_msg) => {
  try {
    return await firebase
      .database()
      .ref('messeges/' + currentUserId)
      .child(guestUserId)
      .push({
        messege: {
          sender: currentUserId,
          reciever: guestUserId,
          msg: msgValue,
          img: img,
          seen_msg:seen_msg
        },
      });
  } catch (error) {
    return error;
  }
};
  
  
export const recieverMsg = async (
  msgValue,
  currentUserId,
  guestUserId,
  img,
  seen_msg
) => {
  try {
    return await firebase
      .database()
      .ref('messeges/' + guestUserId)
      .child(currentUserId)
      .push({
        messege: {
          sender: currentUserId,
          reciever: guestUserId,
          msg: msgValue,
          img: img,
          seen_msg:seen_msg
        },
      });
  } catch (error) {
    return error;
  }
};