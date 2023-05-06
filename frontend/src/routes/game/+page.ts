import { getGames } from "../../db";

export const ssr = false;

export async function load({ }) {

    return {
        games: await getGames(),
    }
}