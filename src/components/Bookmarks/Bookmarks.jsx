import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmark}) => {
    return (
        <div className="md:w-1/3 bg-gray-200">
            <h2 className="text-center">Bookmarked Blogs: {bookmark.length}</h2>
            {bookmark.map(bookmark => <Bookmark
                bookmark={bookmark}
                key= {bookmark.id}
            ></Bookmark>)}
        </div>
    );
};
Bookmarks.propTypes = {
    bookmark: PropTypes.array.isRequired
}
export default Bookmarks;