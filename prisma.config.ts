import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
    schema: 'prisma/schema.prisma',
    datasource: { url: process.env.DATABASE_URL="postgresql://neondb_owner:npg_YIxZs2wDO1ES@ep-solitary-butterfly-be5d4qvk-pooler.c-9.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require" },

});