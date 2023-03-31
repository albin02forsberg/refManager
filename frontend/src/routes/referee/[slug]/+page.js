import { getRefereeWithId } from '../../../../../../refManager/frontend/src/db';

export async function load({ params }) {
    const { slug } = params;

    return {
        id: slug,
        referee: await getRefereeWithId(slug)
    }
}
