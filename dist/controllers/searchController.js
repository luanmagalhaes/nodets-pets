"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const createMenuObject_1 = require("../helpers/createMenuObject");
const pet_1 = require("../models/pet");
const search = (req, res) => {
    let query = req.query.q;
    let list = pet_1.Pet.getFromName(query);
    if (!query) {
        res.redirect("/"); // se nao tiver nada no search, ele tava aparecendo todos os animais, quando apertava em enter
        return; // pra funcao parar
    }
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("all"),
        list,
        query, // coloco isso pra ele aparecer no input e mando ele no value do input do mustache
    });
};
exports.search = search;
