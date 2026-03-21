db = db.getSiblingDB(process.env.API_GATEWAY_MONGO_DB);

db.createRole({
  role: process.env.API_GATEWAY_MONGO_ROLE,
  privileges: [
    {
      resource: {
        db: process.env.API_GATEWAY_MONGO_DB,
        collection: "",
      },
      actions: ["find", "insert", "update", "remove", "createCollection"],
    },
  ],
  roles: [],
});

db.createUser({
  user: process.env.API_GATEWAY_MONGO_USER,
  pwd: process.env.API_GATEWAY_MONGO_PASSWORD,
  roles: [
    {
      role: process.env.API_GATEWAY_MONGO_ROLE,
      db: process.env.API_GATEWAY_MONGO_DB,
    },
  ],
});
