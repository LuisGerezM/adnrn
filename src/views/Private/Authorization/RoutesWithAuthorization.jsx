import { AdminRoutes } from "models/routes";
import { Route } from "react-router-dom";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";
import { Dashboard } from "./Dashboard/Dashboard";
import { RegisterNewUser } from "./RegisterNewUser/RegisterNewUser";

export const RoutesWithAuthorization = () => {
  return (
    <RoutesNoMatch>
      <Route path={AdminRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={AdminRoutes.REGISTERNEWUSER} element={<RegisterNewUser />} />
    </RoutesNoMatch>
  );
};
