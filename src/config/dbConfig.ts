export const dbConfig = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  },
});
