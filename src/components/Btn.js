
const Btn = ({text, altText, className, onclick }) => {
  function onclick() {
    const Hbtn = document.querySelector('.header-btn');
        Hbtn.classList.toggle('active');
        if (Hbtn.classList.contains('active')) {
        localStorage.setItem('data-theme', 'dark');
       document.documentElement.setAttribute('data-theme', localStorage.getItem('data-theme'))
        } else {
        localStorage.setItem('data-theme', 'light');
        document.documentElement.setAttribute('data-theme', localStorage.getItem('data-theme'))
        }
    }
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
