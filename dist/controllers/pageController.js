"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fish = exports.cats = exports.dogs = exports.home = void 0;
const createMenuObject_1 = require("../helpers/createMenuObject");
const pet_1 = require("../models/pet");
const home = (req, res) => {
    let list = pet_1.Pet.getAll();
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("all"),
        banner: {
            title: "All animals",
            background: "allanimals.jpg",
        },
        list, //pego o list la de cima do model e coloco aqui pra usar no mustache
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = pet_1.Pet.getFromType("dog");
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("dog"),
        banner: {
            title: "Dogs",
            background: "banner_dog.jpg",
        },
        list,
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = pet_1.Pet.getFromType("cat");
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("cat"),
        banner: {
            title: "Cats",
            background: "banner_cat.jpg",
        },
        list,
    });
};
exports.cats = cats;
const fish = (req, res) => {
    let list = pet_1.Pet.getFromType("fish");
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("fish"),
        banner: {
            title: "Fish",
            background: "banner_fish.jpg",
        },
        list,
    });
};
exports.fish = fish;
