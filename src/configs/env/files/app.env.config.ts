export const appConfig = () => ({
  app: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
});
