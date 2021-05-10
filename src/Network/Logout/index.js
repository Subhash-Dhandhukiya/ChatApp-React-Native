import firebase from '../../Firebase/config'

const LogoutUser=async()=>{
    try {
        return await firebase.auth().signOut();
    } catch (error) {
        return error
    }
}

export default LogoutUser;