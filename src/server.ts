import fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const port: any = process.env.PORT;

const prisma = new PrismaClient();

const server = fastify();

server.register(cors, {
    //Opções
});

server.get('/', (request, reply) => {
    return "Servidor Exemplo on line...";
});

interface UseAttrs{
    email: string,
    password: string,
}

server.post<{ Body: UseAttrs}>('/user', (request, reply) => {
    const { email, password } = request.body;

    const newUser = prisma.user.create({
        data: {
            email,
            password,
        }
    });

   return reply.status(201).send(newUser); 
});

// server.listen({ port }, (error, address) => {
//     if (error) {
//         console.error(error);
//         process.exit(1);
//     } else {
//         console.log(`Servidor rodando em ${address}`);
//     }
// });