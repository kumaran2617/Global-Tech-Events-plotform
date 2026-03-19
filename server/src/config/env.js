export const getPort = () => {
  const value = process.env.PORT;
  const port = Number(value);
  if (!Number.isFinite(port) || port <= 0) {
    return 4000;
  }
  return port;
};

export const getMongoUri = () => {
  const uri = process.env.MONGODB_URI;
  if (!uri || uri.trim().length === 0) {
    throw new Error("MONGODB_URI is not set");
  }
  return uri;
};
