import React from 'react';
import { IonCard, IonContent, IonPage } from '@ionic/react';
import { personCircleOutline, mailOutline } from 'ionicons/icons'
import UserContext from '../contexts/UserContext'
import firebase from '../firebase'
import { toast } from '../utils/toast'
import SmallHeader from '../components/header/SmallHeader'
import LargeHeader from '../components/header/LargeHeader'

const Profile = () => {
    const {user} = React.useContext(UserContext)

    async function logoutUser() {
        try {
            await firebase.logout();
            props.history.push("/")
            toast('You have successfully logged out.')
        } catch (err) {
            console.error('Logout Error', err)
            toast(err.message)
        }
    }

    return(
    <IonPage>
        <SmallHeader title='Profile'/>
        <IonContent fullscreen>
            <LargeHeader title='Profile'/>\
            {user ? (
                <>
                    <IonCard>
                </>
            )}
        </IonContent>
    </IonPage>
    );
};

export default Profile;