import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import SmallHeader from '../components/header/SmallHeader'
import LargeHeader from '../components/header/LargeHeader'

const Search = () => {
    return(
    <IonPage>
        <SmallHeader title='Search'/>
        <IonContent fullscreen>
            <LargeHeader title='Search'/>
        </IonContent>
    </IonPage>
    );
};

export default Search;