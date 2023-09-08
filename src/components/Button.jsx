function Button({text,disabled=false,onClickHandle}) {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClickHandle}
        >
            {text}
        </button>
    )
}

export default Button;