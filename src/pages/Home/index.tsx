import React, {useState, useEffect, useCallback, useRef} from 'react';
import { ScrollView , Text, Alert} from 'react-native';
import {FormHandles} from '@unform/core'
import Icon from 'react-native-vector-icons/Feather';


import Search from '../../components/Search';
import api from '../../services/api';

import { Container, Header, Grid, Card, Button, DigimonFoto, DigimonLevel, DigimonNivel, DigimonNome, DigimonTitle, Formu  } from './styles';
import search from '../../components/Search';

interface Digimon {
  id: number;
  name: string;
  img: string;
  level: string;

}

interface Data {

  data: {
    search: string;
  };
}

const Home: React.FC = () => {
  const [cards, setCards] = useState<Digimon[]>([]);
  const [digimonName, setDigimonName] = useState<string>('');
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    if(digimonName === '') {
      try {
        api.get('/').then(response => {
           setCards(response.data);
         });            
      } catch (error) {
          Alert.alert('Error','Falha na requisisão');
      }
    } else {
      try {
        api.get(`name/${digimonName}`).then(response => {
           setCards(response.data);
         });            
      } catch (error) {
          Alert.alert('Error','Falha na requisisão');
      }
    }  
  },[digimonName]);

  const handleSearch = useCallback((data) => {
    const name = data.search;
    setDigimonName(name);
  },[]); 

  return (
    <Container>
      <Header source={require('../../assets/logo.png')} />
      <Formu ref={formRef} onSubmit={handleSearch}>
        <Search 
          name="search" 
          placeholder="Digite o nome do digimon"
        >

        </Search>
       <Button
         onPress={() => {
          formRef.current?.submitForm();
        }}
       > 
        <Icon 
          name="search" 
          size={24} 
          color="#FFAF47"             
        />
       </Button>

      </Formu>

      <ScrollView>
        <Grid>
          {cards.map(card => (
            <Card key={card.name}>
              <DigimonFoto source={{ uri: `${card.img}`}}/>

              <Text>
                Nome
              </Text>

              <DigimonNome>
                {card.name}
              </DigimonNome>

              <Text>
                Level
              </Text>

              <DigimonNivel>
                {card.level}
              </DigimonNivel>
            </Card>

            
          ))}
       </Grid>
      </ScrollView>
    </Container>
  );
};

export default Home;
