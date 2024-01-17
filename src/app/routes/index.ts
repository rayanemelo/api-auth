import express from "express";
import user from "./User";

export const routes = (app: express.Application) => {
  app.route("/").get((req, res) => res.status(200).send({ titulo: "Alô alô" }));

  app.use(user);
};

 