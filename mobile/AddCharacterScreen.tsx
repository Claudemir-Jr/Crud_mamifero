// Exemplo de componente de tela para adicionar uma característica
// AddCharacterScreen.tsx

import React, { useState} from 'react';
import { View, TextInput, Button, Alert  } from 'react-native';
import axios from 'axios';



const AddCharacterScreen = () => {
    const [habitat, setHabitat] = useState('');
    const [comidaFavorita, setComidaFavorita] = useState('');
    //outros campos de caracteristicas aqui...
}

const adicionarCaracteristicas = async () => {
    try {
      await axios.post('http://seu-backend.com/adicionar', {
        habitat,
        comidaFavorita,
        // Outros campos de característica aqui...
      });
      Alert.alert('Sucesso', 'Características salvas!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível adicionar as características.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Habitat"
        value={habitat}
        onChangeText={setHabitat}
      />
      <TextInput
        placeholder="Comida Favorita"
        value={comidaFavorita}
        onChangeText={setComidaFavorita}
      />
      {/* Outros campos de entrada para as características */}
      <Button title="Adicionar" onPress={adicionarCaracteristicas} />
    </View>
  );
};

export default AddCharacterScreen;