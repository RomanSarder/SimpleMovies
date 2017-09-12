import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import debounce from 'lodash.debounce';

export class Navbar extends Component {
    state = {
        searchText: ""
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.searchText !== prevState.searchText) this.search();
    }

    handleSearchTextChange = (e) => {
        this.setState({searchText: e.target.value})
    }

    search = debounce(() => {
        let section = this.props.location.pathname.slice(1).toUpperCase();
        this.props.onSearchTextChange(this.state.searchText, section);
    }, 600)

    render() {
        return (
            <div className="ui menu" style={{marginTop: "20px"}}>
                <NavLink className="item" to="/popular" activeClassName="active">Popular</NavLink>
                <NavLink className="item" to="/now_playing" activeClassName="active">Now Playing</NavLink>
                <div className="ui icon input">
                    <input type="text" placeholder="Search..." onChange={this.handleSearchTextChange}/>
                    <i className="search icon"></i>
                </div>
            </div>
        )
    }
}

export default withRouter(Navbar)