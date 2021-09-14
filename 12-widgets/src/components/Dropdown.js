import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({selected, onSelectedChanged, options, label}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener("click", onBodyClick, {capture: true});

        return () => {
            document.body.removeEventListener("click", onBodyClick, {
                capture: true,
            });
        };
    }, []);

    const renderedOptions = options
        .filter((option) => option.value !== selected.value)
        .map((option) => {
            return (
                <div
                    key={option.value}
                    className="item"
                    onClick={() => {
                        onSelectedChanged(option)
                    }}>
                    {option.label}
                </div>
            );
        });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)}
                     className={`ui selection dropdown ${open ? 'visible open' : ''} `}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''} `}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;
