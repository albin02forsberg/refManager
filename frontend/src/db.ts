export async function getRefereeWithId(id: number) {
    const fetchRef = await fetch(`http://localhost:8080/referee/${id}`);
    const referee = await fetchRef.json();

    return referee;
}

export async function getReferee() {
    const fetchRef = await fetch(`http://localhost:8080/referee`);
    const referee = await fetchRef.json();

    return referee;
}

export async function getTeams() {
    const fetchTeams = await fetch(`http://localhost:8080/team`);
    const teams = await fetchTeams.json();

    return teams;
}

export async function getGames() {
    const fetchGames = await fetch(`http://localhost:8080/game`);
    const games = await fetchGames.json();

    return games;
}

export async function getSchedules() {
    const fetchSchedules = await fetch(`http://localhost:8080/schedule`);
    const schedules = await fetchSchedules.json();

    return schedules;
}
