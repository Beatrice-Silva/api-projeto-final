import { PrismaClient } from "@prisma/client";
import { PrismaPg  } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString:
    process.env.DATA
})

export const prisma = new PrismaClient ({ adapter})