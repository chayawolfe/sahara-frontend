// utils
import axios, { endpoints } from 'src/utils/axios';

// ---------------------------------------------------------------------- zeus casino --------------------------

// casino all games
export async function get_provider(data: any) {
    const gameList = endpoints.casinogame.provider;
    const res = await axios.post(gameList, data);
    return res;
}

// List of games for providers gamelist
export async function gameget(title: string) {
    const providerGame = endpoints.casinogame.gamelist;
    const res = await axios.post(providerGame, { title });
    return res;
}

export async function allgameget(title: string) {
    const providerGame = endpoints.casinogame.allgameget;
    const res = await axios.post(providerGame, { title });
    return res;
}

// open game
export async function opengame(gameId: any, title: string, pathname: string) {
    const openGame = endpoints.casinogame.opengame;
    const res = await axios.post(openGame, { gameId, title, pathname });
    return res.data;
}

// live casino list
export async function liveCasinoList(gamename: string) {
    const gameList = endpoints.casinogame.liveList;
    const res = await axios.post(gameList, { gamename });
    return res;
}

// virtual game list
export async function virtualgamelist() {
    const gameList = endpoints.casinogame.virtualgamelist;
    const res = await axios.post(gameList);
    return res;
}

// search game
export async function searchGameName(gameName: any) {
    const gameList = endpoints.casinogame.searchGame;
    const res = await axios.post(gameList, gameName);
    return res;
}

// ----------------------------------------------------------------------Two casino API----------------

// casino all games
export async function twogamelist() {
    const gameList = endpoints.casinogame.gamelist;
    const res = await axios.post(gameList);
    return res;
}

// List of games for providers
export async function twogameGet(title: string) {
    const providerGame = endpoints.casinogame.provider;
    const res = await axios.post(providerGame, { title });
    return res;
}

// open game
export async function twogamePlay(gameId: string, title: string) {
    const getgame = endpoints.casinogame.opengame;
    const res = await axios.post(getgame, { gameId, title });
    return res.data;
}

// live casino list
export async function twoliveCasinoList(gamename: string) {
    const gameList = endpoints.casinogame.liveList;
    const res = await axios.post(gameList, { gamename });
    return res;
}

// virtual game list
export async function twovirtualgamelist() {
    const gameList = endpoints.casinogame.virtualgamelist;
    const res = await axios.post(gameList);
    return res;
}

// search game
export async function twosearchGameName(gameName: string) {
    const gameList = endpoints.casinogame.searchGame;
    const res = await axios.post(gameList, { gameName });
    return res;
}

// game history

export async function gametransaction() {
    const gamehistory = endpoints.casinogame.history;
    const res = await axios.post(gamehistory);
    return res;
}

// multigames

export async function multigameOpen(gameId: any, title: string) {
    const openGame = endpoints.multigames.opengame;
    const res = await axios.post(openGame, { gameId, title });
    return res.data;
}

// jackpot

export async function getJackpot() {
    const res = await axios.get(endpoints.jackpot.get);
    return res.data;
}

// message

export async function getMessage() {
    const res = await axios.get(endpoints.message.get);
    return res.data;
}

export async function isReadMessage() {
    const res = await axios.post(endpoints.message.isRead);
    return res.data;
}

export async function getSelectCateogry() {
    const res = await axios.get(endpoints.selectCategory);
    return res.data;
}

export async function set_free_bonus(value: number) {
    const res = await axios.post(endpoints.freespin.set, { value });
    return res.data;
}

export async function get_free_bonus() {
    const res = await axios.get(endpoints.freespin.get);
    return res.data;
}

// open game
export async function pragmaticPlay(gameId: string, title: string) {
    const getgame = endpoints.casinogame.pragmaticPlay;
    const res = await axios.post(getgame, { gameId, title });
    return res.data;
}

// each game get list
export async function eachgameget(id: any) {
    const getgame = endpoints.casinogame.eachgameget;
    const res = await axios.post(getgame, { id });
    return res.data;
}

// open sports
export async function sportsOpen(active: string) {
    const getgame = endpoints.sports.open;
    const res = await axios.post(getgame, { active });
    return res.data;
}

// set favorite game
export async function setFavoriteGame(gameId: any) {
    const res = await axios.post(endpoints.favorite.set, { gameId });
    return res.data;
}

export async function getFavoriteGames(categoryName: string) {
    const res = await axios.post(endpoints.favorite.get, { categoryName });
    return res.data;
}

export async function getRanking() {
    const res = await axios.get(endpoints.ranking.get);
    return res.data;
}

export async function getMonthlyRanking() {
    const res = await axios.get(endpoints.ranking.getMonthly);
    return res.data;
}

export async function getRecentlyGames(categoryName: string) {
    const res = await axios.post(endpoints.recently.get, { categoryName });
    return res.data;
}
