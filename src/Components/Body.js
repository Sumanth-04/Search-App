import React from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import {fetchPosts} from '../Actions/postAction';
import PropTypes from 'prop-types';

class Body extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            svalue : '',
        }
        this.filtering = this.filtering.bind(this);
    }
    componentDidMount () 
    {
        this.props.fetchPosts();
    }
    filtering(event){
        this.setState({svalue : event.target.value})
    }
    
    render(){
        var filteredposts = this.props.posts.filter((post)=>{
            return post.login.toLowerCase().indexOf(this.state.svalue.toLowerCase()) !== -1 ;
        }) ;
        return (
            <div>
                 <Search />
                    <h1>Users :</h1>
                    <input type='text' placeholder='Filter' value={this.state.svalue} onChange={this.filtering = this.filtering.bind(this)} />
                    {filteredposts.map((post) =>
                        <li key={post.id}>{post.login}</li>
                    )}
            </div>
        )
    }
}

Body.propTypes = {
    fetchPosts : PropTypes.func.isRequired,
    posts : PropTypes.array.isRequired,
   
}

const mapStateToProps = state => ({
    posts : state.posts.items,
    //searchPosts : state.posts.item
});

export default connect(mapStateToProps , {fetchPosts})(Body) ;
