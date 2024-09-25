import React from 'react';

import './Main.css';

const clients = [
  {
    name: 'Cliente 1',
    profilePicture: 'https://via.placeholder.com/80',
    whatsapp: '5511999999999', 
    pageLink: '/cliente1', 
  },
  {
    name: 'Cliente 2',
    profilePicture: 'https://via.placeholder.com/80',
    whatsapp: '5511988888888',
    pageLink: '/cliente2',
  },
  
];


const Main = ({ renderComponent, data }) => {
  return (
    <>
      {data.map((item, index) =>
        React.cloneElement(renderComponent(item), { key: index })
      )}
    </>
  );
};

export default Main;
