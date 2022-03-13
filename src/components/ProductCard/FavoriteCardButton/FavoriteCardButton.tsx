import './FavoriteCardButton.styles.scss';
import { BsFillHeartFill } from 'react-icons/bs';
import {
  FavoriteCardButtonProps,
  FavoriteCardButtonTestIds,
} from './FavoriteCardButton.types';

const FavoriteCardButton = ({
  isFavorite,
  onClick,
}: FavoriteCardButtonProps) => {
  return (
    <>
      <button
        data-testid={FavoriteCardButtonTestIds.Button}
        className="favorite-button d-flex align-items-center justify-content-center"
        onClick={onClick}
      >
        <BsFillHeartFill
          className={`favorite-heart ${isFavorite ? 'favorite' : ''}`}
        />
      </button>
    </>
  );
};

export default FavoriteCardButton;
