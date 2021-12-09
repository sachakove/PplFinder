import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nationalities, setNationalities] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const existing = localStorage.getItem("powerLinkFavorites");
    return existing ? JSON.parse(existing) : [];
  });

  const handleFavorites = (f) => {
    const arr = favorites;
    if (!arr.includes(f)) {
      arr.push(f);
    } else {
      arr.splice(arr.indexOf(f), 1);
    }
    setFavorites([...arr]);
    localStorage.setItem("powerLinkFavorites", JSON.stringify(arr));
  };

  const handleChecked = (n) => {
    const arr = nationalities;
    if (!arr.includes(n)) {
      arr.push(n);
    } else {
      arr.splice(arr.indexOf(n), 1);
    }
    setNationalities([...arr]);
  };

  useEffect(() => {
    fetchUsers(nationalities);
  }, [nationalities]);

  async function fetchUsers(n) {
    setIsLoading(true);
    const response = await axios.get(
      `https://randomuser.me/api/?nat=${n?.join()}&results=25&page=1`
    );
    setIsLoading(false);
    setUsers(response.data.results);
  }

  return { users, favorites, isLoading, fetchUsers, handleChecked, handleFavorites };
};
