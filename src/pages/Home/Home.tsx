import { Suspense, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ListLawyersCard } from "../../components/ListLawyersCard/ListLawyersCard";
import { Loading } from "../../components/Loading/Loading";
import { MapLawyers } from "../../components/MapLawyers/MapLawyers";
import { NavbarCustom } from "../../components/Navbar/NavbarCustom";
import "./Home.scss";

import userData from "../../dataBase/data.json";
import { userMock } from "../../dataBase/user.mock";

export type Position = {
  latitude: number;
  longitude: number;
};
export function Home() {
  // fetch('https://randomuser.me/api/?results=10&nat=br')
  const users = [
    ...userMock,
    ...userData.results
      .filter((user) => user.location.state === "Bahia")
      .map((user: any) => ({
        id: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`,
        image: user.picture.large,
        city: user.location.city,
        state: user.location.state,
        position: {
          lat: Number(user.location.coordinates.latitude),
          lng: Number(user.location.coordinates.longitude),
        },
      })),
  ];
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  function handleViewMode(mode: "list" | "map") {
    setViewMode(mode);
  }

  function getPositionSuccess(position: any) {
    const { latitude, longitude } = position.coords;
    setPosition({ latitude, longitude });
    console.log(position);
  }
  // navigator.geolocation.getCurrentPosition(getPositionSuccess);

  useEffect(() => {
    navigator.geolocation.watchPosition(getPositionSuccess);
  }, [position]);
  return (
    <Suspense fallback={<Loading />}>
      <div className="home vh-100">
        <NavbarCustom
          authenticated
          togglViewMode={handleViewMode}
          viewMode={viewMode}
        />
        <Container fluid>
          {viewMode === "map" && (
            <MapLawyers users={users} userPosition={position} />
          )}
          {viewMode === "list" && users.length > 0 && (
            <ListLawyersCard users={users} />
          )}
        </Container>
      </div>
    </Suspense>
  );
}
