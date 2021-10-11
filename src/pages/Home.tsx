import {IonLabel, IonItem, IonList, IonSearchbar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import {useQuery} from '@apollo/client'
import {GET_POKEMON_QUERY} from '../graphql/Queries'

const Home: React.FC = () => {
  const  {data, error} = useQuery(GET_POKEMON_QUERY,{
    // variables: {name: "bulbasaur"}

  });
  if (error) return <h1>Error Found</h1>;
  if (data) {
    console.log(data)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pokemon</IonTitle>
          <IonSearchbar/>
          {/* <input type="text" /> */}
          {/* <button onClick={() => getPokemon()}>Search</button> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {data &&
          <>
          
          {data.allPokemon.map((pokemon: { name: any; }) =>
          <IonItem>
            <IonLabel>
              <h1>{pokemon.name}</h1>
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
