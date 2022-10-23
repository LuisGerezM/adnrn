import { PublicRoutes } from "models/routes";
import { Navigate } from "react-router-dom";
import { SubtitleTextStyled } from "styled-components/App.styled";

export const SeePossibleNewMembers = () => {
  return (
    <SubtitleTextStyled>
      SeePossibleNewMembers In Develop <Navigate to={PublicRoutes.HOME} />
    </SubtitleTextStyled>
  );
};
