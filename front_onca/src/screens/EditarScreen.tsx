import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Editar: { id: string };
};

type EditarScreenRouteProp = RouteProp<RootStackParamList, 'Editar'>;

type Props = {
  route: EditarScreenRouteProp;
};

const EditarScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const [habitat, setHabitat] = useState('');
  const [comidaFavorita, setComidaFavorita] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidadePatas, setQuantidadePatas] = useState('');
  const [sexo, setSexo] = useState('');
  const [hibernacao, setHibernacao] = useState('');

  const editarCaracteristicas = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/editar/${id}`, {
        habitat,
        comidaFavorita,
        descricao,
        quantidadePatas: parseInt(quantidadePatas),
        sexo,
        hibernacao: hibernacao === 'true',
      });

      if (response.status === 205) {
        Alert.alert('Sucesso', 'Características alteradas com sucesso!');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao editar as características.');
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
      <Button title="Editar" onPress={editarCaracteristicas} />
    </View>
  );
};

export default EditarScreen;




// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert } from 'react-native';
// import axios from 'axios';
// import { RouteProp } from '@react-navigation/native';

// type Props = {
//   route: RouteProp<any, any>;
// };

// const EditarScreen: React.FC<Props> = ({ route }) => {
//   const { id } = route.params;
//   const [habitat, setHabitat] = useState('');
//   const [comidaFavorita, setComidaFavorita] = useState('');
//   const [descricao, setDescricao] = useState('');
//   const [quantidadePatas, setQuantidadePatas] = useState('');
//   const [sexo, setSexo] = useState('');
//   const [hibernacao, setHibernacao] = useState('');

//   const editarCaracteristicas = async () => {
//     try {
//       const response = await axios.put(`http://localhost:3000/editar/${id}`, {
//         habitat,
//         comidaFavorita,
//         descricao,
//         quantidadePatas: parseInt(quantidadePatas),
//         sexo,
//         hibernacao: hibernacao === 'true',
//       });

//       if (response.status === 205) {
//         Alert.alert('Sucesso', 'Características alteradas com sucesso!');
//       }
//     } catch (error) {
//       Alert.alert('Erro', 'Ocorreu um erro ao editar as características.');
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Habitat"
//         value={habitat}
//         onChangeText={setHabitat}
//       />
//       <TextInput
//         placeholder="Comida Favorita"
//         value={comidaFavorita}
//         onChangeText={setComidaFavorita}
//       />
//       <TextInput
//         placeholder="Descrição"
//         value={descricao}
//         onChangeText={setDescricao}
//       />
//       <TextInput
//         placeholder="Quantidade de Patas"
//         value={quantidadePatas}
//         onChangeText={setQuantidadePatas}
//         keyboardType="numeric"
//       />
//       <TextInput
//         placeholder="Sexo"
//         value={sexo}
//         onChangeText={setSexo}
//       />
//       <TextInput
//         placeholder="Hibernação"
//         value={hibernacao}
//         onChangeText={setHibernacao}
//       />
//       <Button title="Editar" onPress={editarCaracteristicas} />
//     </View>
//   );
// };

// export default EditarScreen;




// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert } from 'react-native';
// import axios from 'axios';
// import { RouteProp, NavigationProp } from '@react-navigation/native';

// const EditarScreen = ({ route }) => {
//   const { id } = route.params;
//   const [habitat, setHabitat] = useState('');
//   const [comidaFavorita, setComidaFavorita] = useState('');
//   const [descricao, setDescricao] = useState('');
//   const [quantidadePatas, setQuantidadePatas] = useState('');
//   const [sexo, setSexo] = useState('');
//   const [hibernacao, setHibernacao] = useState('');

//   const editarCaracteristicas = async () => {
//     try {
//       const response = await axios.put(`http://localhost:3000/editar/${id}`, {
//         habitat,
//         comidaFavorita,
//         descricao,
//         quantidadePatas: parseInt(quantidadePatas),
//         sexo,
//         hibernacao: hibernacao === 'true',
//       });

//       if (response.status === 205) {
//         Alert.alert('Sucesso', 'Características alteradas com sucesso!');
//       }
//     } catch (error) {
//       Alert.alert('Erro', 'Ocorreu um erro ao editar as características.');
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Habitat"
//         value={habitat}
//         onChangeText={setHabitat}
//       />
//       <TextInput
//         placeholder="Comida Favorita"
//         value={comidaFavorita}
//         onChangeText={setComidaFavorita}
//       />
//       <TextInput
//         placeholder="Descrição"
//         value={descricao}
//         onChangeText={setDescricao}
//       />
//       <TextInput
//         placeholder="Quantidade de Patas"
//         value={quantidadePatas}
//         onChangeText={setQuantidadePatas}
//         keyboardType="numeric"
//       />
//       <TextInput
//         placeholder="Sexo"
//         value={sexo}
//         onChangeText={setSexo}
//       />
//       <TextInput
//         placeholder="Hibernação"
//         value={hibernacao}
//         onChangeText={setHibernacao}
//       />
//       <Button title="Editar" onPress={editarCaracteristicas} />
//     </View>
//   );
// };

// export default EditarScreen;