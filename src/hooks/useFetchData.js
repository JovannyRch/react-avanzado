import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window
      .fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCategories(data);
      });
  }, []);
  return { categories, loading };
};
