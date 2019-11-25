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

router.get("/api/consulta-obrigatoria/1", async (req, res) => {
  try {
    const consulta1 = await tables.ConsultasObrigatorias.consulta1();
    res.json(consulta1);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-obrigatoria/2", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasObrigatorias.consulta2();
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-obrigatoria/3", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasObrigatorias.consulta3();
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-obrigatoria/4", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasObrigatorias.consulta4();
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-obrigatoria/5", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasObrigatorias.consulta5();
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-obrigatoria/6", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasObrigatorias.consulta6();
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-obrigatoria/7", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasObrigatorias.consulta7();
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-obrigatoria/8", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasObrigatorias.consulta8();
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-obrigatoria/9", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasObrigatorias.consulta9();
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/consulta-obrigatoria/10", async (req, res) => {
  try {
    const usuarios = await tables.ConsultasObrigatorias.consulta10();
    res.json(usuarios);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
