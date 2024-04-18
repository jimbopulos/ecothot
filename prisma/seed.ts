import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userData = [
  {
    name: 'Eco',
    updated_at: '2024-04-16',
    email: 'test_ecothot@ecothot.com',
    points: 2,
  },
  {
    name: 'Thotty',
    updated_at: '2024-04-16',
    email: 'test_thotty@ecothot.com',
    points: 24,
  },
  {
    name: 'McGee',
    updated_at: '2024-04-16',
    email: 'test_mcgee@ecothot.com',
    points: 12,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
