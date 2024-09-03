import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

interface DropdownProps {
    selected: string;
    setSelected: (option: string) => void;
}

export function Dropdown({ selected, setSelected }: DropdownProps) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Some Option', 'Another Option', 'A disabled Option', 'Potato'];
    const defaultOption = options[0]; // Set the first option as the default

    useEffect(() => {
        if (!selected) {
            setSelected(defaultOption);
        }
    }, [selected, defaultOption, setSelected]);

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
                {selected}
                <span className="fas fa-caret-down"
                      style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
                </span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map(option => (
                        <div
                            key={option}
                            onClick={() => {
                                if (option !== 'A disabled Option') {
                                    setSelected(option);
                                    setIsActive(false);
                                }
                            }}
                            style={{ color: option === 'A disabled Option' ? '#ccc' : '#333' }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
