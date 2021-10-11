import {IonSearchbar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {useLazyQuery} from '@apollo/client'
import {GET_POKEMON_QUERY} from '../graphql/Queries'

const Home: React.FC = () => {
  const [getPokemon, {loading, data, error}] = useLazyQuery(GET_POKEMON_QUERY,{
    variables: {name: "bulbasaur"}

  });
  if (error) return <h1>Error Found</h1>;
  if (data) {
    console.log(data)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
          <input type="text" />
          <button onClick={() => getPokemon()}>Search</button>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
