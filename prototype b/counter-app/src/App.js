import React, { Component } from 'react';
import Navbar from './components/navbar'
import './App.css';
import Counters from './components/counters';

class App extends Component {
    state = { 
        counters: [
            {id: 0, value: 0},
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0}

        ]
    }
    
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        console.log(this.state.counters[index]);
        this.setState({counters});
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        console.log(this.state.counters[index]);
        this.setState({counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState(counters);
    }

    handleDelete = (counterId) => {
        console.log("Handling Deletion " , counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }

    render(){
        return(
            <div>
            <Navbar
            totalCounters={this.state.counters.length}
            />
            <main className="container">
                <Counters
                counters={this.state.counters}
                onReset={this.handleReset} 
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                />
            </main>
            </div>
        )
    }
}

export default App;