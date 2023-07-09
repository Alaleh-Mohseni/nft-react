import { Link } from 'react-router-dom';
import './style.css';

const Button = ({ children, btnType, link, text }) => {
    return (
        <button className={`button ${btnType} gap-2`}>
            {children}
            <Link to={`/${link}`}>{text}</Link>
        </button>
    )
}

export default Button