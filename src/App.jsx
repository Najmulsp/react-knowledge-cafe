
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmark, setBookmark] = useState([]);
  
  const handleAddToBookmark = (blog) =>{
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  }

  return (
    <div className='max-w-7xl mx-auto bg-indigo-50'>      
      <Header></Header>

      <main className='md:flex '>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmark={bookmark}></Bookmarks>
      </main>
           
    </div>
  )
}

export default App
