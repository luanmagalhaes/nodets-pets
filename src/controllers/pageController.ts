import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll();
  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "All animals",
      background: "allanimals.jpg",
    },
    list, //pego o list la de cima do model e coloco aqui pra usar no mustache
  });
};

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType("dog");
  res.render("pages/page", {
    menu: createMenuObject("dog"),
    banner: {
      title: "Dogs",
      background: "banner_dog.jpg",
    },
    list,
  });
};

export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType("cat");
  res.render("pages/page", {
    menu: createMenuObject("cat"),
    banner: {
      title: "Cats",
      background: "banner_cat.jpg",
    },
    list,
  });
};

export const fish = (req: Request, res: Response) => {
  let list = Pet.getFromType("fish");
  res.render("pages/page", {
    menu: createMenuObject("fish"),
    banner: {
      title: "Fish",
      background: "banner_fish.jpg",
    },
    list,
  });
};
