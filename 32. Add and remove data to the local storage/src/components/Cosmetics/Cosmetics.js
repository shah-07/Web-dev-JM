import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch('./something.json')
      .then(res => res.json())
      .then(data => setCosmetics(data))
  }, []);

  // const totalAge = cosmetics.reduce((previous, current) => {
  //   return previous + current.age
  // }, 0);
  // console.log(totalAge);


  return (
    <div>
      {
        cosmetics.map(cosmetic => <Cosmetic
          key={cosmetic._id}
          cosmetic={cosmetic}
        ></Cosmetic>)
      }
    </div>
  );
};

export default Cosmetics;