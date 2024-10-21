import { Container } from "./style";
import getImages from "../../utils/getImages";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Container>
      <Link to={item.original_title ? `/movie/${item.id}` : `/serie/${item.id}`}>
        <img src={getImages(item.poster_path || item.profile_path || '')} alt={item.original_title || item.name || 'Imagem'} />
        <h3>{item.original_title || item.name || ''}</h3>
      </Link>
    </Container>
  );
}

export default Card;
