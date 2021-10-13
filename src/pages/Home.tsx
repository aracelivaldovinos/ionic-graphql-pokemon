// import { useState } from 'react';
import {IonLabel, IonItem, IonList, IonSearchbar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import {useQuery} from '@apollo/client'
import {GET_SPACEX_QUERY} from '../graphql/Queries'

const Home: React.FC = () => {
  
  const  {data, error} = useQuery(GET_SPACEX_QUERY,{
    variables: {find: {mission_name: "Starlink-15"}}
  });
  if (error) {
    console.log(error)
  };
  if (data) {
    console.log(data)
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SPACEX</IonTitle>
          <IonSearchbar/>
          {/* <input type="text" />
          <button onClick={() => getPokemon()}>Search</button> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {data &&
          <>
          
          {data.launchesPast.map((launchesPast: { mission_name: any; }) =>
          <IonItem>
            <IonLabel>
              
              <h1>{launchesPast.mission_name}</h1>
              </IonLabel>
          </IonItem>
          )}
          </>
          }
        </IonList>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;


function FilterData(ev: any, any: any) {
  throw new Error('Function not implemented.');
}

function ev(ev: any, any: any) {
  throw new Error('Function not implemented.');
}

