// prisma/seed.js: preenche a tabela categorias com dados de exemplo.
// Rode com: npm run seed
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const categorias = ['lazer', 'culinária', 'estética', 'entreterimento'];

for (const nome of categorias) {
  await prisma.categoria.upsert({
    where: { nome },
    update: {},
    create: { nome },
  });
}

console.log('Categorias cadastradas:', categorias.join(', '));
await prisma.$disconnect();