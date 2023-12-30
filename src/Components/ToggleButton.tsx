import * as React from 'react';

interface ToggleButtonProps {
    initialIsOn?: boolean;
    onClick?: () => void; // Define the onClick prop as a function that takes no arguments and returns void
    size?: 'small' | 'medium' | 'large'; // Define the size prop as one of the available sizes
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
    initialIsOn = false,
    onClick,
    size = 'medium'
}) => {
    const [isOn, setIsOn] = React.useState(initialIsOn);

    const handleClick = () => {
        setIsOn(!isOn);
        if (onClick) {
            onClick(); // Call the onClick callback if it is provided
        }
    };

    const buttonSizeClass = `px-4 py-2 ${
        size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base'
    }`;

    return (
        <button
            onClick={handleClick}
            className={`bg-blue-500 text-white rounded ${buttonSizeClass}`}>
            {isOn ? 'ON' : 'OFF'}
        </button>
    );
};

export { ToggleButton };
