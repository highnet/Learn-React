import React, { Component } from 'react';
import Navbar from './components/navbar'
import './App.css';
import Counters from './components/counters';

class App extends Component {
    state = { 
        counters: [
            {id: Math.random(), value: 0},
            {id: Math.random(), value: 0},
            {id: Math.random(), value: 0},
            {id: Math.random(), value: 0}

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
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }

    handleAdd = () => {
        this.setState(prevState => ({
        counters: [ {id: Math.random(), value: 0}, ...prevState.counters]
        }))
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
                onAdd={this.handleAdd}
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