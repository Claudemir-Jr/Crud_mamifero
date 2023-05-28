import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Função para adicionar características
async function adicionarCaracteristicas(req: any, res: any) {
  const {
    habitat,
    comidaFavorita,
    descricao,
    quantidadePatas,
    sexo,
    hibernacao,
  } = req.body;

  const novoOnca = await prisma.onca.create({
    data: {
      habitat,
      comidaFavorita,
      descricao,
      quantidadePatas,
      sexo,
      hibernacao,
    },
  });

  return res.status(201).send("Características Salvas!");
}

// Função para listar todas características
async function listarCaracteristicas() {
    const listarOnca = await prisma.onca.findMany();
  
    return listarOnca;
  }
  
  async function buscaCaracteristicas(req: any, res: any) {
    // const { query: query } = req.query;
    // console.log(req.query);
    const { q, query } = req.params;
  
    if (typeof q !== "string") {
      throw new Error(res.send("Busca Inválida"));
    }
  
    const buscaOnca = await prisma.onca.findMany({
      where: {
        OR: [
          {
            habitat: {
              contains: q,
              mode: "insensitive",
            },
          },
          {
            comidaFavorita: {
              contains: q,
              mode: "insensitive",
            },
          },
          {
            descricao: {
              contains: q,
              mode: "insensitive",
            },
          },
          {
            sexo: {
              contains: q,
              mode: "insensitive",
            },
          },
        ],
      },
    });
  
    return res.send(buscaOnca);
  }
  
  async function editarCaracteristicas(req: any, res: any) {
    const { id } = req.params;
    const {
      habitat,
      comidaFavorita,
      descricao,
      quantidadePatas,
      sexo,
      hibernacao,
    } = req.body;
    const editarOnca = await prisma.onca.update({
      where: {
        id: Number(id),
      },
      data: {
        habitat: habitat,
        comidaFavorita: comidaFavorita,
        descricao: descricao,
        quantidadePatas: quantidadePatas,
        sexo: sexo,
        hibernacao: hibernacao,
      },
    });
  
    return res.status(205).send("Características alteradas com sucesso!");
  }
  
  async function deletarCaracteristicas(req: any, res: any) {
    const { id } = req.params;
  
    const deletarOnca = await prisma.onca.delete({
      where: {
        id: Number(id),
      },
    });
  
    return res.status(205).send("Onca excluído com sucesso!");
  }
  
  export default {
    adicionarCaracteristicas,
    listarCaracteristicas,
    buscaCaracteristicas,
    editarCaracteristicas,
    deletarCaracteristicas,
  };