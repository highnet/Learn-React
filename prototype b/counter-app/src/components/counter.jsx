import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag', 'tag2', 'tag3']
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    handleIncrement = product => {
        console.log(product.count);
        this.setState({count: this.state.count + 1});
    }



    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.handleIncrement({product: 1})} className='btn btn-secondary btn-sm'>Increment</button>
            {this.renderTags()}
        </div>
        );
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary"
        return classes;
    }
}
 
export default Counter;