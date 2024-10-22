import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Background, Info, Poster,Container, ContainerButton } from "./styles";
import Button from '../../components/Button'
import Slider from "../../components/Slider";
import SliderPeople from "../../components/SliderPeople";
import getImages from '../../utils/getImages'
import Modal from "../../components/Modal";
import { getMovies, getTopMovies, getTopSeries, getPopularSeries, getTopPeoples } from "../../services/getData";


function Home() {
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [topPeoples, setTopPeoples] = useState()
  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
    
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeoples()
      ])
      .then(([movie, topMovies, TopSeries, PopularSeries, topPeople]) => {
        setMovie(movie);
        setTopMovies(topMovies);
        setTopSeries(TopSeries);
        setPopularSeries(PopularSeries);
        setTopPeoples(topPeople);
      })
      .catch((error) => console.error(error))
    }

    getAllData();

  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && <Modal movieId={movie.id} setShowModal={setShowModal}/>}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButton>
                <Button onClick={() => navigate(`/detalhe/${movie.id}`)} red={true}>Detalhes do Filme</Button>
                <Button onClick={() => setShowModal(true)} red={false}>Assista ao Trailer</Button>
              </ContainerButton>
            </Info>
            <Poster>
              <img
                src={getImages(movie.poster_path)}
                alt="capa-do-filme"
              />
            </Poster>
          </Container>
        </Background>
      )}
      { topMovies && <Slider info={topMovies} title={"Top Filmes"}/> }
      { topSeries && <Slider info={topSeries} title={"Top Series"} /> }
      { popularSeries && <Slider info={popularSeries} title={"Séries Mais Populares"} /> }
      { topPeoples && <SliderPeople people={topPeoples} title={"Artitas Mais Populares"} /> }
    </>
  );
}

export default Home;
