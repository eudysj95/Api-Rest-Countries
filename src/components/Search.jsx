// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import glass from "../assets/img/glass-solid.svg";
/* import arrow from "../assets/img/down-solid.svg"; */

export const Search = () => {

  return (
    <div className=' mt-8 h-42 text-veryDarkBlueTx mb-4'>

        <div className='ml-2 flex items-center p-4 w-[90%] border-2 shadow h-14'>

            <img className='h-4 w-4' src={glass} alt="glass-svg" />
            <input className='ml-4 leading-8' type="text" placeholder='Search for a country' />

        </div>

        <div className='flex justify-between items-center ml-2 w-[60%] mt-10 border-2 shadow p-4 h-14'>

            {/* <p>Filter by Region</p>
            <img className='h-4 w-4' src={arrow} alt="down-svg" /> */}

            <select className='h-10 w-full p-2 flex justify-between items-center'>

              <option value="Filter by Region">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oseania">Oseania</option>

            </select>

        </div>

    </div>
  )
}
