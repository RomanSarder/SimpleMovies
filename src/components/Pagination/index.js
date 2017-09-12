import React, {Component} from 'react';

export default class Pagination extends Component {
    state = {
        visible: Array.apply(null, {length: 10}).map((num, i) => 1 + i)
    }
    handlePageChanged = (page) => {
        let {visible} = this.state;
        let {current} = this.props;
        if (page >= visible[8]) {
            this.setState({
                visible: Array.apply(null, {length: 10}).map((num, i) => visible[1] + i)
            })
        } else if (current >= visible[2] && page <= visible[2] && visible[0] > 1) {
            this.setState({
                visible: Array.apply(null, {length: 10}).map((num, i) => {
                    return visible[0] + i - 1;
                })
            })
        }
        this.props.onPageChanged(page);
    }
    render() {
        let {current} = this.props;
        let {visible} = this.state;
        return  (
        <ul className="ui pagination menu">
            <li className="item">Previous</li>
                {visible.map((num, i) => {
                    return (
                        <li className={`item ${current === num ? 'active' : ''}`} 
                            onClick={this.handlePageChanged.bind(this, num)}
                            style={{cursor: "pointer"}}
                            key={i}
                            >{num}</li>
                    )
                })}
            <li className="item">Next</li>
        </ul>)
    }
}