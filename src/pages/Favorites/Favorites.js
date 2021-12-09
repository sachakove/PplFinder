import React from "react";
import Text from "components/Text";
import * as S from "./style";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";

const Favorites = () => {
  const { favorites, handleFavorites } = usePeopleFetch();

  return (
    <S.Favorites>
      <S.Fcontent>
        {favorites.length === 0 ? (
          <Text size="26px">There are no favorites yet</Text>
        ) : (
          <>
            <Text size="40px" bold>
              Your Favorites
            </Text>

            <UserList
              users={favorites}
              handleFavorites={handleFavorites}
              favorites={favorites}
            />
          </>
        )}
      </S.Fcontent>
    </S.Favorites>
  );
};

export default Favorites;
