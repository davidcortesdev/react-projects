import PropTypes from 'prop-types';

export const Card = ({ book }) => {

    const limitedTitle = (str, maxLength = 23) => {
        return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
      };

  return (
    <>
        <div className="card">
            <h2 className='card-title'>{limitedTitle(book.volumeInfo.title)}</h2>
            <img className='card-image' src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title}/>
        </div>
    </>
  )
}

Card.propTypes = {
    book: PropTypes.object.isRequired
}