import React from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {searchPosts} from '../Actions/postAction';

export class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : '',
            sr : []
        }
        this.setThings= this.setThings.bind(this);
        this.AfterSub= this.AfterSub.bind(this);

    }
    componentWillReceiveProps(n){
        if(n){
            console.log(n.item.login);
            document.getElementById('bitch').innerHTML = 'Found : <br> Name : ' + n.item.login + '<br> Id : '+n.item.id +'<br>'+ '<img style="border-radius:50%;width:100px;height=100px;" src=' + n.item.avatar_url + '/>' ;
        }
    }
    setThings (q)  {
        this.setState({text : q});
        //getQuery(q);
    }

    AfterSub  (e)  {
        e.preventDefault();
        console.log(this.state.text);
        this.props.searchPosts(this.state.text);
    }
    render(){
        return (
            <div>
            <hr /><h1>Search App</h1> 
                <form onSubmit={(e)=>{this.AfterSub(e)}}>               
                    <input type='text'
                    name='name' 
                    placeholder='Search by Name'
                    value={this.text}
                    onChange={(e)=>{this.setThings(e.target.value)}} 
                    autoFocus
                    />
                    <button type='submit'>Search</button> 
                    <br />
                
                </form> 
                <div id='bitch'></div>
                
            </div>
        )
    }
}

Search.propTypes = {
    searchPosts : PropTypes.func.isRequired,
    searchPost : PropTypes.object,
    item : PropTypes.array.isRequired
}
const mapStateToProps = state => ({
     
    searchPosts : state.posts.item,
    item : state.posts.item
});

export default connect(mapStateToProps,{searchPosts})(Search);