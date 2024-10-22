import { Container } from "./style";
import getImages from "../../utils/getImages";


function CardPeople({ item }) {
  return (
    <Container>
        <img src={getImages(item.poster_path || item.profile_path || '')} alt={item.original_title || item.name || 'Imagem'} />
        <h3>{item.original_title || item.name || ''}</h3>
    </Container>
  );
}

export default CardPeople;
