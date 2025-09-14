export const getMovies = async () => {
    const response = await fetch("http://localhost:8000/movies/?page=1&size=50")

    if (!response.ok) {
        throw new Error("Failed to fetch movies")
    }

    return response.json()
}