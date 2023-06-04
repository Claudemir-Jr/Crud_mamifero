// Exemplo de componente de tela para listar características
// ListCharactersScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { NavigationScreenProp } from 'react-navigation';

interface Characteristic {
  id: number;
  habitat: string;
  comidaFavorita: string;
  // Outros campos de característica
}

const ListCharactersScreen = () => {
  const [caracteristicas, setCaracteristicas] = useState<Characteristic[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Characteristic[]>(
          'http://seu-backend.com/listar'
        );
        setCaracteristicas(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {caracteristicas.map(caracteristica => (
        <Text key={caracteristica.id}>
          {caracteristica.habitat} - {caracteristica.comidaFavorita}
          {/* Outros campos de característica */}
        </Text>
      ))}
    </View>
  );
};

interface Props {
    navigation: NavigationScreenProp<any, any>;
  }
  
  const ListCharactersScreen = ({ navigation }: Props) => {
    const [caracteristicas, setCaracteristicas] = useState<Characteristic[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get<Characteristic[]>(
            'http://seu-backend.com/listar'
          );
          setCaracteristicas(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <View>
        {caracteristicas.map(caracteristica => (
          <Text key={caracteristica.id}>
            {caracteristica.habitat} - {caracteristica.comidaFavorita}
          </Text>
        ))}
  
        <Button
          title="Voltar"
          onPress={() => navigation.navigate('AddCharacter')}
        />
      </View>
    );
  };

export default ListCharactersScreen;