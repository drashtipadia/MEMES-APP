import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);
  return (
    <div className="flex justify-content-center row">
      {data.map((e1) => (
        <MemeCard img={e1.url} title={e1.name} />
      ))}
      <MemeCard />
    </div>
  );
};

export default HomePage;
