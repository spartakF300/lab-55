import React from 'react';
import './Burger.css'

const Burger = (props) => {
    const arrayCounter = [];

    for (let i = 0; i < props.counter.length; i++) {
        for (let j = 0; j < props.counter[i].count; j++) {
            arrayCounter.push(props.counter[i].name)
        }
    }

    return (
        <div className={'burger-wrap'}>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {arrayCounter.map((item, index) =>
                    <div key={index} className={item}></div>
                )}
                <div className="BreadBottom"></div>
            </div>
            <p>{'Price: ' + props.total + ' сом'}</p>
        </div>
    );
};

export default Burger;