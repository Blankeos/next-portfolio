import path from "path";
import postgres from "postgres";

const CONNECTION_STRING =
  Bun.env.DATABASE_URL ??
  "postgresql://postgres:password123@127.0.0.1:5432/postgis_playground";

const sql = postgres(CONNECTION_STRING);

const fileName = Bun.argv[2];

if (!fileName) {
  console.log(
    "Please provide the name of the .sql file in database/seed/* as an argument.\n"
  );

  const C_GOLD1 = `\x1b[38;5;220m`;
  const NO_FORMAT = `\x1b[0m`;

  console.log(`${C_GOLD1}example: bun run seed add_routes.sql${NO_FORMAT}`);
  process.exit(1);
}

const main = async () => {
  const filePath = path.join("database/seed/", fileName);
  const result = await sql.file(filePath);

  console.log(`-- ✨ --`);
  console.log("Finished seeding...");
  sql.end();
};

main();
