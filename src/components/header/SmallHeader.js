import React from 'react';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'

const SmallHeader = ({ title }) => {
    return(
    <IonHeader>
        <IonToolbar style={{ background: '#f05a28', }} color="primary">
            <IonTitle size="Large">{title}</IonTitle>
        </IonToolbar>
    </IonHeader>
    );
};

export default SmallHeader; 