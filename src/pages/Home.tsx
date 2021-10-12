import { useState } from 'react';
import {IonLabel, IonItem, IonList, IonSearchbar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import {useQuery} from '@apollo/client'
import {GET_SPACEX_QUERY} from '../graphql/Queries'

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('')
  const  {data, error} = useQuery(GET_SPACEX_QUERY,{
    variables: {find: {mission_name: "Starlink"}}
  });
  if (error) return <h1>Error Found</h1>;
  if (data) {
    console.log(data)
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SPACEX</IonTitle>
          <IonSearchbar value={searchText} onIonChange={e => setSearchText}/>
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


