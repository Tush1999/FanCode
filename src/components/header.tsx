import { useState, useEffect } from "react";
import { Outlet, Link, useParams } from "react-router-dom";

import { fetchAllGenres } from "../apis/movies";

import logoImg from "../logo.png";

const Header = () => {
  const { id: activeId } = useParams();

  const [genresList, setGeneresList] = useState([]);

  useEffect(() => {
    fetchAllGenres().then((res) => {
      const genres = res?.data?.genres;
      setGeneresList(genres);
    });
  }, []);

  return (
    <>
      <div className="header-container">
        <div className="logo">
        <Link to="/"><img src={logoImg} alt="logo"/></Link>
        </div>
        <div className="header-containerMain">
          {genresList.map(({ id, name }) => (
            <Link
              to={`/${id}`}
              className={`header ${id == activeId ? "activeLink" : ""}`}
              key={id}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
