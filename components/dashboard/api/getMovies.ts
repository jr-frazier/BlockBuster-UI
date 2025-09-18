export const getMovies = async (genre: string | null) => {
    const genreParam = genre ? `?movie_genres=${genre}` : ""
    const response = await fetch(`http://localhost:8000/movies/${genreParam}`)

    if (!response.ok) {
        throw new Error("Failed to fetch movies")
    }

    return response.json()
}
