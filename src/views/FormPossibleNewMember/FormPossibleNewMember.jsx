import { PublicRoutes } from "models/routes";
import { Navigate } from "react-router-dom";
import { SubtitleTextStyled } from "styled-components/App.styled";

export const FormPossibleNewMember = () => {
  console.log("FormPossibleNewMembers");
  return (
    <SubtitleTextStyled>
      FormPossibleNewMember In Develop <Navigate to={PublicRoutes.HOME} />
    </SubtitleTextStyled>
  );
};
