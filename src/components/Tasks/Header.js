import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import { URLs } from '../../routes/routes'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  const taskspage = URLs.homepage + URLs.tasksPage
  // const onClick = () => {
  //     console.log("click");
  // }
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === taskspage && (
        <Button
          color={!showAdd ? 'green' : 'red'}
          text={!showAdd ? 'Add' : 'Close'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
