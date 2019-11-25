const express = require("express");

const tables = require("./db/tables");
const router = express.Router();

router.get("/api/hello", (req, res, next) => {
  res.json("World");
});

router.get("/api/avaliacoes", async (req, res) => {
  try {
    const avaliacoes = await tables.Avaliacoes.all();
    res.json(avaliacoes);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/filmes", async (req, res) => {
  try {
    const filmes = await tables.Filmes.all();
    res.json(filmes);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/filme-genero", async (req, res) => {
  try {
    const filme_genero = await tables.FilmeGenero.all();
    res.json(filme_genero);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/generos", async (req, res) => {
  try {
    const generos = await tables.Generos.all();
    res.json(generos);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/palavras-chave", async (req, res) => {
  try {
    const palavras_chave = await tables.PalavrasChave.all();
    res.json(palavras_chave);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/usuarios", async (req, res) => {
  try {
    const usuarios = await tables.Usuarios.all();
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-basica/1", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasBasicas.consulta1;
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-basica/2", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasBasicas.consulta2;
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-basica/3", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasBasicas.consulta3;
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-basica/4", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasBasicas.consulta4;
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-basica/5", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasBasicas.consulta5;
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-basica/6", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasBasicas.consulta6;
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-basica/7", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasBasicas.consulta7;
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-basica/8", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasBasicas.consulta8;
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-basica/9", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasBasicas.consulta9;
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-basica/10", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasBasicas.consulta10;
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
