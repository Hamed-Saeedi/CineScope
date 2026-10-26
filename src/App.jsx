import { useMemo, useState } from "react";
import "./index.css";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    duration: "2h 49m",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "A journey beyond the stars to save humanity.",
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genre: "Thriller",
    rating: 8.8,
    duration: "2h 28m",
    image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description: "Enter a world where dreams become reality.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    duration: "2h 32m",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Gotham faces its most dangerous enemy.",
  },
  {
    id: 4,
    title: "Avatar",
    year: 2009,
    genre: "Adventure",
    rating: 7.9,
    duration: "2h 42m",
    image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    description: "Discover a breathtaking world beyond Earth.",
  },
  {
    id: 5,
    title: "La La Land",
    year: 2016,
    genre: "Romance",
    rating: 8.0,
    duration: "2h 8m",
    image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    description: "Two dreamers chase love and ambition in LA.",
  },
  {
    id: 6,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    duration: "2h 16m",
    image: "https://image.tmdb.org/t/p/w500/p96dm7sCMn4VYAStA6siNz30G1r.jpg",
    description: "Question everything you believe is real.",
  },
  {
    id: 7,
    title: "Gladiator",
    year: 2000,
    genre: "Action",
    rating: 8.5,
    duration: "2h 35m",
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    description: "A betrayed general fights for honor and justice.",
  },
  {
    id: 8,
    title: "Coco",
    year: 2017,
    genre: "Animation",
    rating: 8.4,
    duration: "1h 45m",
    image: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    description: "A magical journey through family and music.",
  },
];

const genres = [
  "All",
  "Action",
  "Adventure",
  "Animation",
  "Romance",
  "Sci-Fi",
  "Thriller",
];

function App() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesGenre = genre === "All" || movie.genre === genre;

      const matchesFavorite = !showFavorites || favorites.includes(movie.id);

      return matchesSearch && matchesGenre && matchesFavorite;
    });
  }, [search, genre, favorites, showFavorites]);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((movieId) => movieId !== id)
        : [...current, id],
    );
  }

  return (
    <div className="cine-app">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">C</span>
          Cine<span>Scope</span>
          <small>.</small>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#discover">Discover</a>
          <a href="#discover">Movies</a>
        </nav>

        <button
          className={`favorite-nav ${showFavorites ? "active" : ""}`}
          onClick={() => {
            setShowFavorites((current) => !current);
            document
              .getElementById("discover")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          ♥ <span>My List</span>
          <span className="favorite-count">{favorites.length}</span>
        </button>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="live-dot" />
              YOUR NEXT FAVORITE MOVIE STARTS HERE
            </span>

            <h1>
              Beyond the
              <br />
              <span>Screen.</span>
            </h1>

            <p>
              Explore unforgettable stories, discover hidden gems, and find your
              next cinematic obsession.
            </p>

            <a className="primary-button" href="#discover">
              Explore Movies <span>↗</span>
            </a>

            <div className="hero-stats">
              <div>
                <strong>08</strong>
                <span>Featured movies</span>
              </div>
              <div>
                <strong>07+</strong>
                <span>Genres to explore</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-glow" />
            <img
              className="hero-poster"
              src={movies[0].image}
              alt="Interstellar movie poster"
            />
            <div className="floating-card">
              <span className="rating-star">★</span>
              <div>
                <strong>8.7 / 10</strong>
                <span>Editor's pick</span>
              </div>
            </div>
            <span className="visual-caption">THE ART OF CINEMA</span>
          </div>
        </section>

        <section className="discover-section" id="discover">
          <div className="section-heading">
            <div>
              <span className="section-label">THE COLLECTION</span>
              <h2>
                Discover <span>movies.</span>
              </h2>
              <p>Stories worth your time. Experiences worth remembering.</p>
            </div>

            <span className="movie-total">
              {filteredMovies.length.toString().padStart(2, "0")} TITLES
            </span>
          </div>

          <div className="toolbar">
            <label className="search-box">
              <span>⌕</span>
              <input
                type="search"
                placeholder="Search your next favorite..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <kbd>⌕</kbd>
            </label>

            <button
              className={`filter-favorite ${showFavorites ? "active" : ""}`}
              onClick={() => setShowFavorites((current) => !current)}
            >
              ♥ My List
            </button>
          </div>

          <div className="genre-list">
            {genres.map((item) => (
              <button
                key={item}
                className={`genre-chip ${genre === item ? "selected" : ""}`}
                onClick={() => setGenre(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {filteredMovies.length > 0 ? (
            <div className="movie-grid">
              {filteredMovies.map((movie) => {
                const isFavorite = favorites.includes(movie.id);

                return (
                  <article className="movie-card" key={movie.id}>
                    <div className="poster-wrap">
                      <img
                        className="movie-poster"
                        src={movie.image}
                        alt={`${movie.title} poster`}
                        loading="lazy"
                      />

                      <span className="movie-rating">
                        <span>★</span> {movie.rating}
                      </span>
                      <button
                        className={`heart-button ${
                          isFavorite ? "is-favorite" : ""
                        }`}
                        onClick={() => toggleFavorite(movie.id)}
                        aria-label={
                          isFavorite
                            ? `Remove ${movie.title} from favorites`
                            : `Add ${movie.title} to favorites`
                        }
                        aria-pressed={isFavorite}
                      >
                        {isFavorite ? "♥" : "♡"}
                      </button>

                      <span className="poster-genre">{movie.genre}</span>
                    </div>

                    <div className="movie-info">
                      <div className="movie-title-row">
                        <h3>{movie.title}</h3>
                        <span className="movie-year">{movie.year}</span>
                      </div>

                      <p className="movie-description">{movie.description}</p>

                      <div className="movie-meta">
                        <span>◷ {movie.duration}</span>
                        <span className="movie-quality">HD</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <span>⌕</span>
              <h3>No movies found</h3>
              <p>Try another title, genre, or update your favorites.</p>
              <button
                className="primary-button"
                onClick={() => {
                  setSearch("");
                  setGenre("All");
                  setShowFavorites(false);
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-icon">C</span>
          Cine<span>Scope</span>
          <small>.</small>
        </a>

        <p>Made for the love of cinema.</p>

        <a className="back-to-top" href="#home">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
