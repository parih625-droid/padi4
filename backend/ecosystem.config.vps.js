module.exports = {
  apps: [
    {
      name: "ecommerce-backend",
      script: "./server.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 5000,
        DB_HOST: "localhost",
        DB_PORT: 3306,
        DB_NAME: "ecommerce_db",
        DB_USER: "ecommerce_user",
        DB_PASSWORD: "your_db_password"
      }
    }
  ]
}