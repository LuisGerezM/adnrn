import { Header } from "components/Header/Header";
import { useThemeApp } from "hooks/useThemeApp";
import { ThemeProvider } from "styled-components";
import { RowStyled } from "styled-components/App.styled";
import { GlobalStyle } from "styled-components/GlobalStyle.styled";
import { Route } from "react-router-dom";
import { Home } from "views/Home/Home";
import { windowSize } from "utilities/windowSize.util";
import Login from "views/Login/Login";
import { AdminRoutes, PrivateRoutes, PublicRoutes } from "models/routes";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";
import { News } from "views/News/News";
import { NewsProvider } from "views/News/context/NewsProvider";
import { ModalConfirmProvier } from "context/ModalConfirmProvier";
import { ModalConfirm } from "components/Modals/ModalConfirm/ModalConfirm";
import { AlertUserFeedback } from "components/Alerts/AlertUserFeedback/AlertUserFeedback";
import AuthenticationGuard from "guards/authentication.guard";
import { RoutesWithAuthentication } from "views/Private/Authentication/RoutesWithAuthentication";
import AuthorizationGuard from "guards/authorization.guard";
import { RoutesWithAuthorization } from "views/Private/Authorization/RoutesWithAuthorization";
import { SectionProductAndDonate } from "views/SectionProductAndDonate/SectionProductAndDonate";
import { FormPossibleNewMember } from "views/FormPossibleNewMember/FormPossibleNewMember";

function App() {
  const { themeSelect, themesStyled, handleChangeTheme } = useThemeApp();

  return (
    <ThemeProvider theme={themesStyled[themeSelect]}>
      <GlobalStyle windowSize={windowSize()} />
      <ModalConfirmProvier>
        <Header
          themeSelect={themeSelect}
          handleChangeTheme={handleChangeTheme}
        />
        <RowStyled className="RowStyled">
          <ModalConfirm />
          <AlertUserFeedback />
          <RoutesNoMatch>
            <Route path={PublicRoutes.HOME} element={<Home />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route
              path={PublicRoutes.FORMNEWPOSSIBLEMEMBER}
              element={<FormPossibleNewMember />}
            />
            <Route
              path={PublicRoutes.PRODANDDONATE}
              element={<SectionProductAndDonate />}
            />

            <Route
              path={PublicRoutes.NEWS}
              element={
                <NewsProvider>
                  <News />
                </NewsProvider>
              }
            />

            <Route element={<AuthenticationGuard />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<RoutesWithAuthentication />}
              />
            </Route>

            <Route element={<AuthorizationGuard />}>
              <Route
                path={`${AdminRoutes.PRIVATEAUTH}/*`}
                element={<RoutesWithAuthorization />}
              />
            </Route>
          </RoutesNoMatch>
        </RowStyled>
      </ModalConfirmProvier>
    </ThemeProvider>
  );
}

export default App;
