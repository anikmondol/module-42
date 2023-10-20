import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const { author, cover, title, author_img, posted_date, reading_time, hashtags, id } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8 rounded-xl' src={cover} alt={`Cover picture of the title`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-16 ' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className="text-2xl">{author}</h2>
                        <p>{posted_date}</p>
                        <button></button>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span className='mr-2'>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmarks(blog, id)} className='font-bold text-2xl text-red-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4"> {title}</h2>
            <p>
            {
                hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
            }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time, id)} className='underline text-blue-400'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;