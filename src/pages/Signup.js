import React from 'react'
import { IonRow, IonCol, IonContent, IonItem, IonLabel, IonPage, IonInput, IonButton } from '@ionic/react'
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
                    <IonCol>
                        <IonButton type='submit' color='primary' expand='block'>Sign Up</IonButton>                                                
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Signup