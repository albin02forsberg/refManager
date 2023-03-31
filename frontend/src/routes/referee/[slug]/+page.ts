import { getRefereeWithId } from "../../../db";

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const { slug } = params;

    return {
        referee: await getRefereeWithId(parseInt(slug))
    }
}
