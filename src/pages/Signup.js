import React from 'react'
import { IonCol, IonContent, IonItem, IonLabel, IonPage, IonInput } from '@ionic/react'
import NavHeader from '../components/header/NavHeader'

const Signup = () => {
    return (
        <IonPage>
            <NavHeader title='Sign Up' />
            <IonContent>
                <IonItem lines='full'>
                    <IonLabel position='floating'>Username</IonLabel>
                    <IonInput name='name' type='text' required></IonInput>
                </IonItem>

                <IonItem lines='full'>
                    <IonLabel position='floating'>Email</IonLabel>
                    <IonInput name='email' type='text' required></IonInput>
                </IonItem>

                <IonItem lines='full'>
                    <IonLabel position='floating'>Password</IonLabel>
                    <IonInput name='password' type='password' required></IonInput>
                </IonItem>

                <IonRow>
                    <IonCol></IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}