import React, { useEffect, useState } from 'react';

const SavedNicknameComponent = () => {
  const [savedNicknames, setSavedNicknames] = useState([]);

  useEffect(() => {
    const storedNicknames = localStorage.getItem('myItems');
    if (storedNicknames) {
      const parsedNicknames = JSON.parse(storedNicknames);
      setSavedNicknames(parsedNicknames);
    }
  }, []);
  const removeItem = (index) => {
    const updatedNicknames = [...savedNicknames];
    updatedNicknames.splice(index, 1);
    setSavedNicknames(updatedNicknames);
    localStorage.setItem('myItems', JSON.stringify(updatedNicknames));
  };
  

  return (
    <div className='flex flex-col h-80  space-y-3'>

      {savedNicknames.length > 0 ? (
        <ul className=' p-5 text-center rounded-2xl '>
          {savedNicknames.map((nickname, index) => (
            <li className=" border-2 bg-lime-500 border-b-gray-600 p-3 rounded-full text-red-800" key={index}>{nickname}
            <button className="bg-blue-600 ml-2 p-2 rounded-full" onClick={() => removeItem(index)}>➖</button>

            </li>
          ))}
        </ul>
      ) : (
        <div className='bg-orange-400 rounded-3xl text-center '> 
        <p className='p-2 text-2xl'> Save nicknames with ❤️</p>
        </div> 
      )}
    </div>
  );
};

export default SavedNicknameComponent;
