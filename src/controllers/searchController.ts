import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;
  let list = Pet.getFromName(query);

  if (!query) {
    res.redirect("/"); // se nao tiver nada no search, ele tava aparecendo todos os animais, quando apertava em enter
    return; // pra funcao parar
  }

  res.render("pages/page", {
    menu: createMenuObject("all"),
    list,
    query, // coloco isso pra ele aparecer no input e mando ele no value do input do mustache
  });
};
