import React from 'react'
import { IonRow, IonCol, IonContent, IonItem, IonLabel, IonPage, IonInput, IonButton, IonRouterLink } from '@ionic/react'
import NavHeader from '../components/header/NavHeader'

const Login = () => {
    return (
        <IonPage>
            <NavHeader title='Login' />
            <IonContent>

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
                        <IonButton type='submit' color='primary' expand='block'>Log In</IonButton>                                                
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonRouterLink routerLink={'/forgot'}>
                            Forgot Password    
                        </IonRouterLink>                                               
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Login