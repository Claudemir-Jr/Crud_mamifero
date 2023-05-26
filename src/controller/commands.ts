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