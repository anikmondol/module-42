import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const{author} = blog;
    return (
        <div>
            <h2>Author: {author}</h2>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
}

export default Blog;