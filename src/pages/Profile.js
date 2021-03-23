import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import SmallHeader from '../components/header/SmallHeader'
import LargeHeader from '../components/header/LargeHeader'

const Profile = () => {
    return(
    <IonPage>
        <SmallHeader title='Profile'/>
        <IonContent fullscreen>
            <LargeHeader title='Profile'/>
        </IonContent>
    </IonPage>
    );
};

export default Profile;