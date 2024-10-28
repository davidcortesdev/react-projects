import PropTypes from 'prop-types'

export const TodoItem = ({ todo = {}, onDeleteTodo, onToggleTodo }) => {

    
  
    return (
        <li className={`list-group-item d-flex justify-content-between ${todo.done ? 'bg-danger text-light' : ''}`}>
            <span 
                className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
                onClick={ () => onToggleTodo( todo.id )}
                aria-label='span'> 
                
                {todo.description} 
            </span>

            <button className={`btn btn-danger ${todo.done ? 'btn-light' : ''}`} 
                    onClick={ () => onDeleteTodo(todo.id)}> 
                Borrar 
            </button>
        </li>
  )
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    onDeleteTodo: PropTypes.func,
    onToggleTodo: PropTypes.func
}