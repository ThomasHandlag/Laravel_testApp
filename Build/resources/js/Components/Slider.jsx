import { useEffect, useState, useRef } from "react";

const Slider = () => {
    const [range, setRange] = useState(0);
    const [step, setStep] = useState(0);
    const ref = useRef(null);

    const getRange = (ev) => {
        setRange(ev.target.value);
    };

    useEffect(() => {
        const rangeLinePadding = 16;
        const calcStep =
            (ref.current.offsetWidth - rangeLinePadding) / ref.current.max;
        setStep(calcStep);
    }, []);
    return (
        <>
            <div className="flex flex-col gap-2 p-2">
                <label
                    htmlFor="range"
                    style={{
                        transform: `translateX(${range * step}px)`,
                    }}
                >
                    <span className="text-indigo-500 font-bold text-center"> {range}$ </span>
                </label>
                <input
                    type="range"
                    id="range"
                    min={0}
                    max={1000}
                    value={range}
                    onChange={getRange}
                    ref={ref}
                />
            </div>
        </>
    );
};

export default Slider;
