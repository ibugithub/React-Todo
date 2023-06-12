import PropTypes from 'prop-types'
const TodoItem = (props) => {
    const { propItem } = props;
    return (
        <li>{propItem.title}</li>
    )
}

TodoItem.propTypes = {
    propItem : PropTypes.object.isRequired
};


export default TodoItem