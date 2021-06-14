export default () => ({
  database: {
    prefix: process.env.DATABASE_PREFIX || 'mongodb',
    database: process.env.DATABASE_NAME || '',
    username: process.env.DATABASE_USERNAME || '',
    password: process.env.DATABASE_PASSWORD || '',
    getUrl: function () {
      if (process.env.APP_ENVIRONMENT === 'local') {
        return `mongodb://localhost/${this.database}`;
      } else {
        return `${this.prefix}://${this.username}:${this.password}@sandbox.drngb.mongodb.net/${this.database}`;
      }
    },
  },
});
