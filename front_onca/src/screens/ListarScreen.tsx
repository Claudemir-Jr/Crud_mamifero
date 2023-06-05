import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

type Caracteristica = {
  habitat: string;
  comidaFavorita: string;
  descricao: string;
  quantidadePatas: number;
  sexo: string;
  hibernacao: boolean;
  id: number;
};

const ListarScreen = () => {
  const [caracteristicas, setCaracteristicas] = useState<Caracteristica[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Caracteristica[]>('http://localhost:3000/listar');
        setCaracteristicas(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={caracteristicas}
        renderItem={({ item }) => (
          <View>
            <Text>Habitat: {item.habitat}</Text>
            <Text>Comida Favorita: {item.comidaFavorita}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <Text>Quantidade de Patas: {item.quantidadePatas}</Text>
            <Text>Sexo: {item.sexo}</Text>
            <Text>Hibernação: {item.hibernacao ? 'Sim' : 'Não'}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ListarScreen;


// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList } from 'react-native';
// import axios from 'axios';

// const ListarScreen = () => {
//   const [caracteristicas, setCaracteristicas] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/listar');
//         setCaracteristicas(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <View>
//       <FlatList
//         data={caracteristicas}
//         renderItem={({ item }) => (
//           <View>
//             <Text>Habitat: {item.habitat}</Text>
//             <Text>Comida Favorita: {item.comidaFavorita}</Text>
//             <Text>Descrição: {item.descricao}</Text>
//             <Text>Quantidade de Patas: {item.quantidadePatas}</Text>
//             <Text>Sexo: {item.sexo}</Text>
//             <Text>Hibernação: {item.hibernacao ? 'Sim' : 'Não'}</Text>
//           </View>
//         )}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// export default ListarScreen;