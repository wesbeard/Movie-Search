import create from 'zustand'

const API_KEY = '9571ec5f'

type IMovieResponse = {
    Title: String;
    Actors: String;
    Director: String;
    Genre: String;
    Plot: String;
    Poster: string;
    imdbID: String;
    Released: String;
    Writer: String;
    Error: String;
    Year: String;
}

type IUseMovieStore = {
    movieData: IMovieResponse | undefined,
    watchlist: IMovieResponse[],
    fetchMovies: (title: String) => Promise<void>;
}

const useMovieStore = create<IUseMovieStore>((set) => ({
    movieData: undefined,
    watchlist: [],

    fetchMovies: async (title) => {
        const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);
        const json = await response.json();
        console.log(json);

        if (response) {
            set({movieData: json});
        }
    },
}))

export default useMovieStore;