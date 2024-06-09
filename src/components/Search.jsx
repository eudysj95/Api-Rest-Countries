/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import glass from "../assets/img/glass-solid.svg";
import data from "../assets/data.json";
/* import arrow from "../assets/img/down-solid.svg"; */

export const Search = ({listado, setListado}) => {

  const [busqueda, setBusqueda] = useState('');

  const filter = (e) => {
    let option = e.target.value;

    if(option === "Filter by Region"){
      setListado(data);
    }else{
      let filtradas = data.filter(filtrada => {
        return filtrada.region === option
      });
      
      setListado(filtradas);
    }
    
  }

  const buscar = (e) => {

    setBusqueda(e.target.value);
    
    let filtradas = listado.filter(filtrada => filtrada.name.toLowerCase().includes(busqueda.toLowerCase()))
    
    if(busqueda.length <= 1){
      filtradas = data;
    }

    setListado(filtradas);

  }

  return (
    <div className=' mt-8 h-42 text-veryDarkBlueTx mb-4'>

        <div className='ml-2 flex items-center p-4 w-[90%] border-2 shadow h-14'>

            <img className='h-4 w-4' src={glass} alt="glass-svg" />
            <input onChange={buscar} className='ml-4 leading-8 w-[80%]' type="text" placeholder='Search for a country' />

        </div>

        <div className='flex justify-between items-center ml-2 w-[70%] mt-10 border-2 shadow p-4 h-14'>

            {/* <p>Filter by Region</p>
            <img className='h-4 w-4' src={arrow} alt="down-svg" /> */}

            <select onChange={filter} className='h-10 w-full p-2 flex justify-between items-center'>

              <option value="Filter by Region">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europa</option>
              <option value="Oceania">Oceania</option>

            </select>

        </div>

    </div>
  )
}
