import {useState} from 'react'
import random_stuff from './random_stuff'
const Home=()=>{
  const [theme,setTheme]= useState("white")
  const [nicknameOne, setNicknameOne] = useState('');
  const [nicknameTwo, setNicknameTwo] = useState('');
  const [nicknameThree, setNicknameThree] = useState('');

  const { fruits, animals, colors, feelings } = random_stuff;
  function getRandomList() {
    const keys = Object.keys(random_stuff); // Get an array of keys from the object
    const randomKey = keys[Math.floor(Math.random() * keys.length)]; // Select a random key
    return random_stuff[randomKey]; // Return the corresponding list
  }
  function getRandomWord(wordList) {
    // Generate a random index between 0 and the length of the array
    const randomIndex = Math.floor(Math.random() * wordList.length);
  
    // Return the word at the random index
    return wordList[randomIndex];
  }
 const generateNicknames = () => {
    const random_list_one = getRandomList();
    const random_list_two = getRandomList();
    const random_word_one = getRandomWord(random_list_one);
    const random_word_two = getRandomWord(random_list_two);
    const random_word_three = getRandomWord(random_list_one);
    const random_word_four = getRandomWord(random_list_one);
    const random_word_five = getRandomWord(random_list_one);
    const random_word_six = getRandomWord(random_list_one);

    const nicknameOne = `${random_word_one}_${random_word_two}`;
    const nicknameTwo = `${random_word_three}_${random_word_four}`;
    const nicknameThree = `${random_word_five}_${random_word_six}`;

    setNicknameOne(nicknameOne);
    setNicknameTwo(nicknameTwo);
    setNicknameThree(nicknameThree);
  };
 

  const save = (item) => {
    // Retrieve the existing items from local storage
    const storedItems = localStorage.getItem('myItems');
  
    // Check if there are any existing items
    if (storedItems) {
      // Parse the stored items as an array
      const parsedItems = JSON.parse(storedItems);
  
      // Check if the item already exists in the array
      if (!parsedItems.includes(item)) {
        // Add the new item to the array
        parsedItems.push(item);
  
        // Store the updated array of items in local storage
        localStorage.setItem('myItems', JSON.stringify(parsedItems));
      }
    } else {
      // If no existing items, create a new array with the current item and store it in local storage
      localStorage.setItem('myItems', JSON.stringify([item]));
    }

  };


  
  return (
    <div className={`flex flex-col min-h-screen ${theme === "white" ? 'bg-white text-slate-800' : (theme === "red" ? 'bg-red-400 text-white' : (theme === "cyan" ? 'bg-cyan-900 text-white' : (theme === "yellow" ? 'bg-yellow-400 text-black' : (theme === "pink" ? 'bg-pink-400 text-white'  : (theme === "green" ? 'bg-green-400 text-black': '')))))}`}>
    
    <div className='absolute top-0 left-0 ml-3 mt-2'>
    <div className='flex flex-col '>
    <h1 className='mt-2 mb-1 text-2xl italic font-bold'>  Nickname Generator</h1>
    <div>    <a href={"/favorites"} className=' text-2xl animate-pulse'>Favorites</a>
    </div>
    </div>
    </div>
    <div className='absolute top-0 right-0 mr-2 mt-5'>
    <div className=' grid grid-cols-3 sm:grid-cols-6  '>
    <button onClick={() => setTheme("red")}><div className='mr-1 bg-red-400 rounded-full w-9 h-9'></div></button>
    <button onClick={() => setTheme("white")}><div className='mr-1 bg-white rounded-full w-9 h-9'></div></button>
    <button onClick={() => setTheme("pink")}><div className='mr-1 bg-pink-400 rounded-full w-9 h-9'></div></button>
    <button onClick={() => setTheme("yellow")}><div className='mr-1 mt-1 bg-yellow-400 rounded-full w-9 h-9'></div></button>
    <button onClick={() => setTheme("cyan")}><div className='mt-1 bg-cyan-900 rounded-full w-9 h-9'></div></button>
    <button onClick={() => setTheme("green")}><div className='mt-1 bg-green-400 rounded-full w-9 h-9'></div></button>

    </div>
    </div>
    <div className='flex flex-col  h-screen items-center justify-center'>
<div className='space-y-3'>  
{nicknameOne && (
  <div className='border-2 border-slate-600 text-center p-2 rounded flex flex-row space-x-1'>
    <p className='basis-5/6'>{nicknameOne}</p>
    <button onClick={() => save(nicknameOne)} className='basis-1/6'>❤️</button>

  </div>
)}
{nicknameTwo && (
  <div className='border-2 border-slate-600 text-center p-2 rounded flex flex-row space-x-1'>
    <p className='basis-5/6'>{nicknameTwo}</p>
    <button  onClick={() => save(nicknameTwo)} className='basis-1/6'>❤️</button>

  </div>
)}
{nicknameThree && (
  <div className='border-2 border-slate-600 text-center p-2 rounded flex flex-row space-x-1'>
    <p className='basis-5/6'>{nicknameThree}</p>
    <button onClick={() => save(nicknameThree)} className='basis-1/6'>❤️</button>

  </div>
)}

{!nicknameOne && !nicknameTwo && !nicknameThree && (
  <p className='text-2xl italic font-light mb-5'>generate some nicknames !</p>
)}




</div>    
    <div className='flex justify-center mt-5 rounded-3xl bg-orange-600 text-xl p-3' ><button onClick={generateNicknames}>Generate </button></div>
    
    </div>
    

    </div>
  )
}
export default Home

