import { Spinner } from "react-bootstrap";
// import MapImg from "../../assets/map.png";
import "./Loading.scss";
export function Loading() {
  return (
    <div className="loading">
      {/* <img src={MapImg} alt="" /> */}
      <Spinner animation="border" />
      <h5 className="text-center text-muted">Carregando...</h5>
    </div>
  );
}
