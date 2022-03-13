import './RemoveCardButton.styles.scss';
import { BsXCircleFill } from 'react-icons/bs';
import {
  RemoveCardButtonProps,
  RemoveCardButtonTestIds,
} from './RemoveCardButton.types';

const RemoveCardButton = ({ onClick }: RemoveCardButtonProps) => {
  return (
    <>
      <button
        className="remove-button d-flex align-items-center justify-content-center"
        data-testid={RemoveCardButtonTestIds.Button}
        onClick={onClick}
      >
        <BsXCircleFill className="remove-icon" />
      </button>
    </>
  );
};

export default RemoveCardButton;
