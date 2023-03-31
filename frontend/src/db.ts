export async function getRefereeWithId(id: number) {
    const fetchRef = await fetch(`http://localhost:8080/referee/${id}`);
    const referee = await fetchRef.json();

    return referee;
}
