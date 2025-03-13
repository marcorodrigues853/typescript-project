import './Button.css';
interface IButton {
    label: string;
    disabled?: boolean;
    variant: 'primary' | 'secondary';
    onClick?: () => void;
}

function Button({ label, disabled = false, variant, onClick }: IButton) {
    console.log('passarFunccaoDeFora', onClick);
    return (
        <button
            className={`${variant}`}
            disabled={disabled}
            // onClick={() => alert(label)}>
            onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;
