import { getTeams } from "../../../db";

export const ssr = false;

export async function load({ }) {

    return {
        teams: await getTeams(),
    }
}