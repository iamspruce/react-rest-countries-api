
const Btn = ({text, altText, className, onclick }) => {
    
    return (
        <button className={className} onClick={onclick}>
            {text} <span className="not-mobile">{altText}</span>
        </button>
    )
}

Btn.defaultProps = {
    text: 'button',
    color: 'transparent',
}

export default Btn
