import React, { useState, useEffect } from "react";
import Category from "..";
import { List, Item } from "./styles";

const useSetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window
      .fetch("https://petgram-server-24iykciv5.now.sh/categories")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCategories(data);
      });
  }, []);
  return { categories, loading };
};

const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useSetCategories();

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener("scroll", onScroll);

      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  if (loading) return <h2>Cargando</h2>;
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export default ListOfCategories;
