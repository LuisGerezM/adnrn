import { SubtitleTextStyled } from "styled-components/App.styled";

import { PublicRoutes } from "models/routes";
import { Navigate } from "react-router-dom";

export const SeeOrders = () => {
  return (
    <SubtitleTextStyled>
      SeeOrders In Develop
      <Navigate to={PublicRoutes.HOME} />
    </SubtitleTextStyled>
  );
};
