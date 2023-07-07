import './PopUp.css';

const PopUp = ({ active, setActive, children }) => {
    return (
        <div className={active ? "popUp active" : "popUp"} onClick={() => setActive(false)}>
            <div className={active ? "popUp__content active" : "popUp__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default PopUp;