import { createContext, useEffect, useLayoutEffect, useState } from "react";
export const AppContext = createContext(null);

export default function ContextProvider(props) {
  const [favs, setFavs] = useState([]);

  const removeFav = (uuid) => {
    if (window.confirm("are you sure?")) {
      var filtered = favs.filter((fav) => {
        return fav.login.uuid !== uuid;
      });
      localStorage.setItem("favs", JSON.stringify(filtered));
      setFavs(filtered);
    }
  };

  const addFav = (newEmployee) => {
    localStorage.setItem("favs", JSON.stringify([...favs, newEmployee]));
    setFavs([...favs, newEmployee]);
  };

  const isSaved = (uuid) => {
    var filtered = favs.filter((fav) => {
      return fav.login.uuid === uuid;
    });
    if (filtered.length == 0) {
      return false;
    }
    return true;
  };
  const globalVal = {
    favs,
    addFav,
    removeFav,
    isSaved,
  };
  useLayoutEffect(() => {
    if (localStorage.getItem("favs")) {
      setFavs(JSON.parse(localStorage.getItem("favs")));
    }
  }, []);
  useEffect(() => {
    console.table(favs);
  }, [favs]);
  return (
    <AppContext.Provider value={globalVal}>
      {props.children}
    </AppContext.Provider>
  );
}
