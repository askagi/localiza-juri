import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(async () =>
  import("../pages/Home/Home").then((m) => ({ default: m.Home }))
);
const Login = lazy(async () =>
  import("../pages/Login/Login").then((m) => ({ default: m.Login }))
);

// eslint-disable-next-line react-refresh/only-export-components
export const ROUTER = {
  login: "/localiza-juri",
  home: "/localiza-juri/home",
} as const;

export function Router() {
  return (
    <Routes>
      <Route path={ROUTER.login}>
        <Route path={ROUTER.login} Component={Login} />
        <Route path={ROUTER.home} Component={Home} />
      </Route>
    </Routes>
  );
}
