import './ui.style.css';

const Button = ({className, handleClick, content }) => {
    return (
        <button className={className} onClick={handleClick}>{content}</button>
    )
}

export default Button;
