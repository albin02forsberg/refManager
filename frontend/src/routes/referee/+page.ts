import { getReferee } from '../../db';

export const ssr = false;

export async function load({ params }) {

    return {
        referees: await getReferee()
    }
}