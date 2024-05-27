import { useEffect,useState } from 'react';
import './App.css';
import SearchIcon from './Search.svg';
import Moviecard from './Moviecard';

const API_URL = 'http://www.omdbapi.com?apikey=e1aa55bb';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');
        const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            setMovies(data.Search);
    }
        useEffect(() => {
            searchMovie('spider man');
        }
    , []);
    return (
        <div className='app'>
            <h1>MOVIE PARADE</h1>
            <div className='search'>
                <input placeholder='Search for movies'
                    value={searchTerm}
                    onChange={
                        (e) => {
                            setsearchTerm(e.target.value)
                        }
                    }
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={
                        () => {
                            searchMovie(searchTerm)
                        }
                    }
                />
            </div>

            { movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <Moviecard movie={movie} />
                        ))}
                        </div>
                    ) :
                    (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )
            }
            
        </div>
    );
}
export default App;