import './Button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, type, ...otherProps }) => {

    return (
            <button 
                className={`button-container ${BUTTON_TYPE_CLASSES[otherProps.buttonType]}`} 
                {...otherProps}
            >
                {children}
            </button>
    )
}

export default Button