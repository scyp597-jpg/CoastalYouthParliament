import { PrismaClient, Prisma } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({ url: './dev.db' });
const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    const updated = await prisma.user.update({
      where: { email: 'admin@jkp.org' },
      data: { role: 'ADMIN' },
    });
    console.log('Admin user updated:', updated);
  } catch (error) {
    console.error('Error updating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
