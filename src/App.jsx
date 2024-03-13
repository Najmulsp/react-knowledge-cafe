
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  
  const handleAddToBookmark = (blog) =>{
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  }

  const handleMarkAsRead = time =>{
    setReadingTime(readingTime + time);
  }


  return (
    <div className='max-w-7xl mx-auto shadow-xl'>      
      <Header></Header>

      <main className='md:flex '>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmark={bookmark} readingTime={readingTime}></Bookmarks>
      </main>
           
    </div>
  )
}

export default App
