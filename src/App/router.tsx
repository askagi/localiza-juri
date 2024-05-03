import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(async () =>
  import("../pages/Home").then((m) => ({ default: m.Home }))
);

export function Router() {
  return (
    <Routes>
      <Route path="/localiza-juri" Component={Home} />
    </Routes>
  );
}
