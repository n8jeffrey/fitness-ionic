import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import SmallHeader from '../components/header/SmallHeader'
import LargeHeader from '../components/header/LargeHeader'

const Trending = () => {
    return(
    <IonPage>
        <SmallHeader title='Trending'/>
        <IonContent fullscreen>
            <LargeHeader title='Trending'/>
        </IonContent>
    </IonPage>
    );
};

export default Trending;