import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";
import { Router } from "./router";

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}
