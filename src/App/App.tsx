import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h5>Carregando...</h5>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}
