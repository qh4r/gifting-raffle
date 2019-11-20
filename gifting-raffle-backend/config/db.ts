import * as path from "path";

module.exports = (env: any) => ({
  type: "postgres",
  url: env.POSTGRES_URL,
  synchronize: false,
  logging: true,
  entities: [path.join(__dirname, "../src/**/*.model.*")],
  migrations: [path.join(__dirname, "../src/migrations/*")],
  cli: {
    migrationsDir: "src/migrations",
  },
});
