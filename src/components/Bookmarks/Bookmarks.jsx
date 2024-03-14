import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmark, readingTime}) => {
    return (
        <div className="md:w-1/3  ">
            <div className='w-full text-center p-6 bg-purple-200 rounded-xl mb-6 mt-6'>
                <h1 className='text-blue-600 text-xl font-semibold'>Spent time on read: {readingTime} min</h1>
            </div>
           <div className='bg-gray-200 h-full rounded-xl'>
           <h2 className="text-center text-2xl font-bold pt-6 ">Bookmarked Blogs: {bookmark.length}</h2>
            {bookmark.map((bookmark, idx) => <Bookmark
                bookmark={bookmark}
                key= {idx}
            ></Bookmark>)}
           </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmark: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;