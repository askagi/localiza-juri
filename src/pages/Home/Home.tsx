import { Suspense, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ListLawyersCard } from "../../components/ListLawyersCard/ListLawyersCard";
import { Loading } from "../../components/Loading/Loading";
import { MapLawyers } from "../../components/MapLawyers/MapLawyers";
import { NavbarCustom } from "../../components/Navbar/NavbarCustom";
import { userMock } from "../../dataBase/user.mock";
import { User } from "../../types/User.type";
import "./Home.scss";

export function Home() {
  // fetch('https://randomuser.me/api/?results=10&nat=br')
  const [users, setUsers] = useState<User[]>(userMock);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  function handleViewMode(mode: "list" | "map") {
    setViewMode(mode);
  }

  async function getUsers() {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=100&nat=br"
      );
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formatedData: User[] = data.results.map((user: any) => ({
        id: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`,
        image: user.picture.large,
      }));

      setUsers([...users, ...formatedData]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="home vh-100">
        <NavbarCustom
          authenticated
          togglViewMode={handleViewMode}
          viewMode={viewMode}
        />
        <Container fluid>
          {viewMode === "map" && <MapLawyers />}
          {viewMode === "list" && <ListLawyersCard users={users} />}
        </Container>
      </div>
    </Suspense>
  );
}
