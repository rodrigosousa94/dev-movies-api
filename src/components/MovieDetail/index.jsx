import { useEffect, useState } from "react";
import { Container, Background, Cover, Info, ContainerMovies } from "./styles";
import { useParams } from "react-router-dom";
import getImages from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits";
import Slider from "../../components/Slider"
import {
  getMovieById,
  getMovieVideos,
  getMovieCredits,
  getMovieSimilar,
} from "../../services/getData";

function MovieDetail() {
  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function getAllData() {
      try {
        const [movie, videos, credits, similar] = await Promise.all([
          getMovieById(id),
          getMovieVideos(id),
          getMovieCredits(id),
          getMovieSimilar(id),
        ]);
        setMovie(movie);
        setMovieVideos(videos);
        setMovieCredits(credits);
        setMovieSimilar(similar);
      } catch (error) {
        console.error(error);
      }
    }
    getAllData();
  }, [id]); // Adicione o `id` como dependência
  

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres}/>
              <p>{movie.overview}</p>
              <Credits credits={movieCredits}/>
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos && movieVideos.map( (video) => (
              <div key={video.id}>
                <h4>{video.name}</h4>
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title="Yotube Video Player"
                  height="500px"
                  width="100%"
                ></iframe>
              </div>
            ))}
          </ContainerMovies>
          <Slider info={movieSimilar} title="Filmes Similares"/>
        </>
      )}
    </>
  );
}

export default MovieDetail;
