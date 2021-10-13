import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import {useQuery} from '@apollo/client'
import {GET_SPACEX_QUERY} from '../graphql/Queries'

const Details: React.FC = () => {
  const  {data, error} = useQuery(GET_SPACEX_QUERY,{
    variables: {sort: "mission_name"}
    
  });
  if (error) return <h1>Error found</h1>;
  if (data) {
    console.log(data)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>New Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};
export default Details;