interface ButtonTextProps {
    label: string;
}

const ButtonText: React.FC<ButtonTextProps> = ({
    label
}) => {
    return (
        <div className="w-full h-full">
            <p className="w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:opacity-0 group-hover:[transform:translateY(-100%)]">
                {label}
            </p>
            <p className="w-full h-full flex items-center justify-center absolute opacity-0 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] [transform:translateY(100%)] group-hover:opacity-100 group-hover:[transform:translateY(-100%)]">
                {label}
            </p>
        </div>
    );
}
 
export default ButtonText;
