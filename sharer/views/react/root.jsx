const React                                    = require('react')
const {Router, Route, hashHistory, IndexRoute} = require('react-router')
const Home_Page                                = require('./home_page.jsx')
const Search_Page                              = require('./search_page.jsx')

const Root = React.createClass({

  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home_Page} />
        <Router path="/search_page/:tag" component={Search_Page} />
      </Router>
    )
  }

})

module.exports = Root