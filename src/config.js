const config = () => {
  const env = {
    production: {
      featureToggles: {
        UIRefresh2022: true,
      },
      port: process.env.PORT,
      host: process.env.HOST,
    },
    development: {
      featureToggles: {
        UIRefresh2022: true,
      },
      port: process.env.PORT || '3000',
      host: process.env.HOST || 'localhost',
    },
  }
  return process.env.ENVIRONMENT ? env[process.env.ENVIRONMENT] : env
}
module.exports = config
