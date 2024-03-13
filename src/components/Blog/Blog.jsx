import PropTypes from 'prop-types'; 
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title,cover_img, author_img, author, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='space-y-4 mt-6'>
            <img className='w-full  h-96 rounded-lg ' src= {cover_img} alt="" />
            <div className='flex justify-between items-center  w-full pl-4 mx-auto'>
                <div className='flex  items-center gap-4'>
                    <img className='w-24 h-20 rounded-full' src= {author_img} alt="" />
                    <div>
                        <h1 className='text-2xl'>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center pr-2'>
                    <span>{reading_time} min read</span> &nbsp;
                    <button className='text-2xl text-green-400'
                     onClick={() => handleAddToBookmark(blog)}><IoBookmarkOutline></IoBookmarkOutline></button>
                </div>
            </div>
            <h1 className='text-4xl text-left w-full pl-4  mx-auto'> {title} </h1>
            <p className='w-full pl-4'>
                {hashtags.map((hash, idx) => <span key={idx}><a>{hash} </a> </span> )}
            </p>
            <button className='w-full pl-4 text-left  text-blue-500 underline'  onClick={() => handleMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired,
   handleAddToBookmark: PropTypes.func.isRequired,
   handleMarkAsRead: PropTypes.func.isRequired
} 
    
 
export default Blog;