import { fireEvent, render, screen } from '@testing-library/react';
import FavoriteCardButton from './FavoriteCardButton';
import { FavoriteCardButtonTestIds } from './FavoriteCardButton.types';

describe('FavoriteCardButton', () => {
  test('calls correctly the click function', () => {
    const onClick = jest.fn().mockName('favorite onClick');

    render(<FavoriteCardButton onClick={() => onClick()} isFavorite={false} />);
    const buttonElement = screen.getByTestId(FavoriteCardButtonTestIds.Button);

    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalled();
  });
});
