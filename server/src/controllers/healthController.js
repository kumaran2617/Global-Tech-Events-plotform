export const rootMessage = (req, res) => {
  res.json({ ok: true, message: "Server is running" });
};

export const healthCheck = (req, res) => {
  res.json({ status: "healthy" });
};
