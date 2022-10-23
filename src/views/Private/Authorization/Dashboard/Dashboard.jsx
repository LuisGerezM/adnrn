import { SubtitleTextStyled } from "styled-components/App.styled";

import { PublicRoutes } from "models/routes";
import { Navigate } from "react-router-dom";

export const Dashboard = () => {
  return (
    <SubtitleTextStyled>
      Dashboard In Develop
      <Navigate to={PublicRoutes.HOME} />
    </SubtitleTextStyled>
  );
};
