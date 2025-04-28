export const JWT_SECRET = process.env.JWT;
export const MONGODB_USER = process.env.mongo_username || "";
export const MONGODB_PASSWORD = process.env.mongo_password || "";
export const MONGODB_DB = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@secondbrain.zxd0dxn.mongodb.net/SecondBrain`;

export const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
