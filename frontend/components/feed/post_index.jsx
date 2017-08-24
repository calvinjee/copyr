import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.requestAllPosts();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then(this.props.history.push("/"));
  }

  render () {
    const posts = this.

    return (
      <div className="main-nav">
        <h3 className="nav-logo main-nav-logo">c</h3>
        <input
            className="search"
            placeholder="Search Copyr"
            value={this.state.search}
            onChange={this.handleChange('search')} />
        <Link to="/dashboard">
          <button className="home-dashboard">Home</button>
          </Link>
        <RecentActivity />
        <AccountInfo />
        <button className="compose">Compose</button>
        <button onClick={this.handleClick}>Logout</button>
      </div>
    );
  }
}

export default PostIndex;
