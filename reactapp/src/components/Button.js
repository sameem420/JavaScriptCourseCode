

const Button = (props) => {
    const btnClick =  () => props.onButtonClick(props.incrementValue)
    return(
        <div>
            <button onClick={btnClick}>+{props.incrementValue}</button>
        </div>
    )
}

export default Button;