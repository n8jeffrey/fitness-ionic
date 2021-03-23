import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import SmallHeader from '../components/header/SmallHeader'
import LargeHeader from '../components/header/LargeHeader'

const Home = () => {
    return(
    <IonPage>
        <SmallHeader title='Health'/>
        <IonContent fullscreen>
            <LargeHeader title='Health'/>
        </IonContent>
    </IonPage>
    );
};

export default Home;