import api from './api'

export async function getMovies(){
    const {
        data: { results }
      } = await api.get("/movie/popular");

      return results[0]
}

export async function getTopMovies(){
    const {
        data: { results }
      } = await api.get("/movie/top_rated");

      return results
}

export async function getTopSeries(){
    const {
        data: { results }
      } = await api.get("/tv/top_rated");

      return results
}

export async function getPopularSeries(){
    const {
        data: { results }
      } = await api.get("/tv/popular");

      return results
}

export async function getTopPeoples(){
    const {
        data: { results }
      } = await api.get("/person/popular");

      return results
}

//ESSE PEGA O PRIMEIRO VIDEO DO ARRAY DE VIDEOS PARA A PARTE DE ASSISTIR O TRAILER
export async function getMovieVideo(movieId){ 
  const {
      data: { results }
    } = await api.get(`/movie/${movieId}/videos`);

    return results[0]
}


//ESSE PEGA TODOS OS VIDEOS PARA OS DETALHES DO FILME
export async function getMovieVideos(movieId){
    const {
        data: { results }
      } = await api.get(`/movie/${movieId}/videos`);

      return results
}

export async function getMovieCredits(movieId){
  const { data: {cast} } = await api.get(`/movie/${movieId}/credits`);

    return cast
}

export async function getMovieSimilar(movieId){
  const {
      data: { results }
    } = await api.get(`/movie/${movieId}/similar`);

    return results
}

export async function getMovieById(movieId){
  const { data } = await api.get(`/movie/${movieId}`);

    return data
}

/////////SERIES////

export async function getSeriesVideos(seriesId){
  const {
      data: { results }
    } = await api.get(`/tv/${seriesId}/videos`);

    return results
}

export async function getSerieCredits(seriesId){
  const { data: {cast} } = await api.get(`/tv/${seriesId}/credits`);

    return cast
}

export async function getSeriesSimilar(seriesId){
  const {
      data: { results }
    } = await api.get(`/tv/${seriesId}/similar`);

    return results
}

export async function getSerieById(seriesId){
  const { data } = await api.get(`/tv/${seriesId}`);

    return data
}