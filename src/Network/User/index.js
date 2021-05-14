import firebase from '../../Firebase/config'

export const AddUser=async(fname,lname,email,uid,profileImg)=>{
    try {
        return await firebase
            .database()
            .ref('user/'+uid)
            .set({
                firstname:fname,
                lastname:lname,
                email:email,
                uuid:uid,
                profileImg:profileImg,
            })
    } catch (error) {
        return error;
    }
}


export const UpdateUser=async(uuid,imgSource)=>{
    try {
        return await firebase.database().ref('user/'+uuid)
        .update({
            profileImg: "data:image;base64," + imgSource
        })
    } catch (error) {
        return error;
    }
}