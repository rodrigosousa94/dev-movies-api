import { useEffect, useState } from "react";
import { Container, Background, Cover, Info, ContainerMovies } from "./styles";
import { useParams } from "react-router-dom";
import getImages from "../../utils/getImages";
import SpanGenres from "../SpanGenres"
import Credits from "../Credits";
import Slider from "../Slider"
import {
  getSerieById,
  getSeriesVideos,
  getSerieCredits,
  getSeriesSimilar,
} from "../../services/getData";

function SerieDetail() {
  const [serie, setSerie] = useState();
  const [serieVideos, setSerieVideos] = useState();
  const [serieCredits, setSerieCredits] = useState();
  const [serieSimilar, setSerieSimilar] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function getAllData() {
      try {
        const [serie, videos, credits, similar] = await Promise.all([
          getSerieById(id),
          getSeriesVideos(id),
          getSerieCredits(id),
          getSeriesSimilar(id),
        ]);
        setSerie(serie);
        setSerieVideos(videos);
        setSerieCredits(credits);
        setSerieSimilar(similar);
      } catch (error) {
        console.error(error);
      }
    }
    getAllData();
  }, [id]); // Adicione o `id` como dependência
  

  return (
    <>
      {serie && (
        <>
          <Background image={getImages(serie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(serie.poster_path)} />
            </Cover>
            <Info>
              <h2>{serie.name}</h2>
              <SpanGenres genres={serie.genres}/>
              <p>{serie.overview}</p>
              <Credits credits={serieCredits}/>
            </Info>
          </Container>
          <ContainerMovies>
            {serieVideos && serieVideos.map( (video) => (
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
          <Slider info={serieSimilar} title="Filmes Similares"/>
        </>
      )}
    </>
  );
}

export default SerieDetail;
