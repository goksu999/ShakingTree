import React, { useState } from 'react';
import AppleIcon from '../icons/apple-icon';
import { useSelector, useDispatch } from 'react-redux';
import { finalize } from '../AppReducer';
import './Apple.scss';

const Apple = (props) => {
    const shakeTree = useSelector((state) => state.shake.shake);
    const isFinalized = useSelector((state) => state.shake.finalize);
    const [startToFall, setStartToFall] = useState(false);
    const dispatch = useDispatch();

    // if tree shaking is finished and apple is marked as fallable.
    if (shakeTree === false && props.fall) {
        // for different falling time seperation.
        setTimeout(() => {
            setStartToFall(true);
            // finalize and count 1 second after all animations are finished. 3750 + 1000
            setTimeout(() => {
                dispatch(finalize());
            }, 4750);
        }, props.delay);
    }

    return (
        <div className={`apple-container ${shakeTree === false && props.fall && startToFall ? "apple-container--falling" : ""}`} style={{ left: props.x + 'px', display: shakeTree === false && props.fall && startToFall && isFinalized ? "none" : "block" }}>
            <AppleIcon size="24" />
        </div>
    );
};

export default Apple;