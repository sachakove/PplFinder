import React, { useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import * as C from "constant";
import { useHistory } from "react-router";

const UserList = ({ users, isLoading, handleChecked, handleFavorites, favorites }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [extand, setExtand] = useState(false);
  const history = useHistory();

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  return (
    <S.UserList>
      {history.location.pathname === "/" && (
        <S.Filters isExpand={extand}>
          <S.Expand color="primary" onClick={() => setExtand(!extand)}>
            {extand ? "less" : "more..."}
          </S.Expand>
          {C.NAT.map((nat, index) => (
            <CheckBox
              key={index}
              value={nat.code}
              label={nat.name}
              onChange={handleChecked}
            />
          ))}
        </S.Filters>
      )}
      <S.List>
        {users.map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper
                isVisible={favorites?.includes(user) || index === hoveredUserId}
              >
                <IconButton onClick={() => handleFavorites(user)}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
