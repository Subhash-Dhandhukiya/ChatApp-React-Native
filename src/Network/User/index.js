import firebase from '../../Firebase/config'

export const AddUser=async(name,email,uid,profileImg)=>{
    try {
        return await firebase
            .database()
            .ref('user/'+uid)
            .set({
                name:name,
                email:email,
                uuid:uid,
                profileImg:profileImg,
            })
    } catch (error) {
        return error;
    }
}
