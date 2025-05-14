import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const {onAdd, onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
        return (<div>
            <button 
            onClick={onAdd}
            className="btn-primary btn-sm m-2">Add Counter
            </button>
            <button 
            onClick={onReset}
            className="btn-warning btn-sm m-2">Reset All
            </button>
            {counters.map(counter => 
            <Counter 
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            />)}
        </div>);
    }
}
 
export default Counters;