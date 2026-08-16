"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_better_sqlite3_1 = require("@prisma/adapter-better-sqlite3");
const adapter = new adapter_better_sqlite3_1.PrismaBetterSqlite3({ url: './dev.db' });
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    try {
        const updated = await prisma.user.update({
            where: { email: 'admin@jkp.org' },
            data: { role: 'ADMIN' },
        });
        console.log('Admin user updated:', updated);
    }
    catch (error) {
        console.error('Error updating admin user:', error);
    }
    finally {
        await prisma.$disconnect();
    }
}
main();
//# sourceMappingURL=fix-admin.js.map