"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const data = [
    {
        type: "dog",
        image: "pastor-alemao.jpg",
        name: "Pastor-alemão",
        color: "Amarelo e Preto",
        sex: "Male",
    },
    {
        type: "dog",
        image: "labrador.jpg",
        name: "Labrador-retriever",
        color: "Branco",
        sex: "Male",
    },
    {
        type: "dog",
        image: "zwergspitz.jpg",
        name: "Zwergspitz",
        color: "Amarelo",
        sex: "Female",
    },
    {
        type: "dog",
        image: "husky.jpg",
        name: "Husky Siberiano",
        color: "Branco e Preto",
        sex: "Male",
    },
    {
        type: "dog",
        image: "golden.jpg",
        name: "Golden Retriever",
        color: "Amarelo",
        sex: "Male",
    },
    {
        type: "dog",
        image: "poodle.jpg",
        name: "Poodle",
        color: "Branco",
        sex: "Female",
    },
    {
        type: "dog",
        image: "bulldog.jpg",
        name: "Bulldog",
        color: "Branco e Amarelo",
        sex: "Male",
    },
    {
        type: "cat",
        image: "persa.jpg",
        name: "Persa",
        color: "Amarelo",
        sex: "Male",
    },
    {
        type: "cat",
        image: "mainecoon.jpg",
        name: "Maine Coon",
        color: "Preto e Branco",
        sex: "Male",
    },
    {
        type: "cat",
        image: "bengal.jpg",
        name: "Bengal",
        color: "Branco, Preto e Amarelo",
        sex: "Female",
    },
    {
        type: "cat",
        image: "siames.jpg",
        name: "Siamês",
        color: "Amarelo e Preto",
        sex: "Male",
    },
    {
        type: "cat",
        image: "sphynx.jpg",
        name: "Sphynx",
        color: "Branco",
        sex: "Male",
    },
    {
        type: "fish",
        image: "neon.jpg",
        name: "Tetra Neon",
        color: "Vermelho e Azul",
        sex: "Male",
    },
    {
        type: "fish",
        image: "matogrosso.jpg",
        name: "Mato Grosso",
        color: "Laranja",
        sex: "Male",
    },
    {
        type: "fish",
        image: "limpavidro.jpg",
        name: "Limpa Vidro",
        color: "Verde e Branco",
        sex: "Male",
    },
    {
        type: "fish",
        image: "tanictis.jpg",
        name: "Tanictis",
        color: "Vermelho",
        sex: "Male",
    },
    {
        type: "fish",
        image: "acara.jpg",
        name: "Acará Bandeira",
        color: "Preto",
        sex: "Male",
    },
];
exports.Pet = {
    getAll: () => {
        return data;
    },
    getFromType: (type) => {
        return data.filter((item) => item.type === type);
    },
    getFromName: (name) => {
        return data.filter((item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    },
};
