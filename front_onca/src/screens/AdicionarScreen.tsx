import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const AdicionarScreen = () => {
  const [habitat, setHabitat] = useState('');
  const [comidaFavorita, setComidaFavorita] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidadePatas, setQuantidadePatas] = useState('');
  const [sexo, setSexo] = useState('');
  const [hibernacao, setHibernacao] = useState('');

  const adicionarCaracteristicas = async () => {
    try {
      const response = await axios.post('http://localhost:3000/adicionar', {
        habitat,
        comidaFavorita,
        descricao,
        quantidadePatas: parseInt(quantidadePatas),
        sexo,
        hibernacao: hibernacao === 'true',
      });

      if (response.status === 201) {
        Alert.alert('Sucesso', 'Características salvas!');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao adicionar as características.');
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
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        placeholder="Quantidade de Patas"
        value={quantidadePatas}
        onChangeText={setQuantidadePatas}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Sexo"
        value={sexo}
        onChangeText={setSexo}
      />
      <TextInput
        placeholder="Hibernação"
        value={hibernacao}
        onChangeText={setHibernacao}
      />
      <Button title="Adicionar" onPress={adicionarCaracteristicas} />
    </View>
  );
};

export default AdicionarScreen;