/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import data from "../assets/data.json";

export const List = ({listado, setListado}) => {

  useEffect(() => {
    conseguirLista();
  },[])

  const conseguirLista = () => {
    setListado(data);
  }

  return (
    <div className='flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center'>

        {listado.map(item => {
            
            return(<article key={item.numericCode} className='w-[80%] text-veryDarkBlue mt-2 mb-16 border-2 shadow'>

                    <img src={item.flags.svg} alt="countrie-svg" />
                    <h3 className='ml-8 mt-6 text-lg font-bold'>{item.name}</h3>
                    <p className='ml-8 mt-2'>Population: {item.population}</p>
                    <p className='ml-8 mt-2'>Region: {item.region}</p>
                    <p className='ml-8 mt-2 mb-8'>Capital: {item.capital}</p>
                
                   </article>);

        })}

    </div>
  )
}
