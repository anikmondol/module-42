import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='bg-gray-300 ml-4 mt-2 pt-4 rounded-md'>
            <div>
                <h3 className='text-center bg-red-400 text-green-200 text-3xl rounded-lg'>Spent time on read:{readingTime} min</h3>
            </div>
            <div>
            <h2 className='text-3xl text-center'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
            }
            </div>
        </div>
    );
};


Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired 
}

export default Bookmarks;