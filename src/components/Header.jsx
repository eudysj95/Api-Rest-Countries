// eslint-disable-next-line no-unused-vars
import React from 'react';
import moonIcon from "../assets/img/moon-solid.svg"

export const Header = () => {
  return (
    <header className='w-screen flex justify-between items-center px-8 mt-2 bg-veryLightGray border-2 shadow h-16 '>

        <h1 className='font-bold text-veryDarkBlueTx'>Where in the Word?</h1>

        <button className='flex h-4'>
            <img className='h-4 w-4 mr-1' src={moonIcon} alt="moon-svg" />
            <h3 className='leading-4 text-veryDarkBlueTx'>Dark Mode</h3>
        </button>

    </header>
  )
}
