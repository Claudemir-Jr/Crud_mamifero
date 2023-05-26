import fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";

dotenv.config();
const port: any = process.env.PORT;

const server = fastify();

server.register(cors, {
    //Opções
});

server.get('/', (request, reply) => {
    return "Servidor Exemplo on line...";
});


server.listen({ port }, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    } else {
        console.log(`Servidor rodando em ${address}`);
    }
});