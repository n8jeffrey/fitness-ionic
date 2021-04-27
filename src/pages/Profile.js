import React from 'react';
import { IonButton, IonCard, IonCardContent, IonGrid, IonCol, IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow } from '@ionic/react';
import { personCircleOutline, mailOutline, person } from 'ionicons/icons'
import UserContext from '../contexts/UserContext'
import firebase from '../firebase'
import { toast } from '../utils/toast'
import SmallHeader from '../components/header/SmallHeader'
import LargeHeader from '../components/header/LargeHeader'

const Profile = (props) => {
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
                        <IonCardContent>
                            <IonList lines='none'>
                                <IonItem>
                                    <IonIcon icon={personCircleOutline} slot='start'></IonIcon>
                                    <IonLabel>
                                        <strong>{user.displayName}</strong>
                                        <p>Username</p>
                                    </IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonIcon icon={mailOutline} slot='start'></IonIcon>
                                    <IonLabel>
                                        <strong>{user.email}</strong>
                                        <p>E-mail</p>
                                    </IonLabel>
                                </IonItem>
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                    <IonRow>
                        <IonCol>
                            <IonButton expand='block' routerLink={'/edit-profile'} color='primary' fill='outline'>
                                Edit Profile
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand='block' color='primary' onClick>={logoutUser}
                                Logout
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </>
            ): (
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton expand='block' color='primary' routerLink={'/register'}>
                                Sign Up
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand='block' color='primary' routerLink={'/login'} fill='outline'>
                                Log In
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            )}
        </IonContent>
    </IonPage>
    );
};

export default Profile;