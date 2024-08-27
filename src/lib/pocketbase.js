import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');



export async function create_user(usernam,emai,passwor,confirmpasswor,firstnam,lastnam){
    const data = {
        "username": usernam,
        "email": emai,
        "password": passwor,
        "passwordConfirm": confirmpasswor,
        "first_name": firstnam,
        "last_name": lastnam
    };  
    await pb.collection('users').create(data);
    const record = await pb.collection('users').authWithPassword(
        username,
        password,
    );
    return record
}
