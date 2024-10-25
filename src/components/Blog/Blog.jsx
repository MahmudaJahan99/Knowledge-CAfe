import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full h-80 object-cover' src={cover} alt={`cover picture of ${title}`}/>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 h-14 object-cover rounded-full mr-6' src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-3 text-2xl'><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span className='mr-3' key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(reading_time)}
                className='text-purple-800 font-bold underline'
                >Mark As Read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}

export default Blog;