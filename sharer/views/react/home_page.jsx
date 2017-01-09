const React       = require('react')
const $           = require('jquery')
const Add_Article = require('./add_article.jsx')
const Search_Box  = require('./search_box.jsx')

const Home_Page = React.createClass({

  getInitialState: function () {
    return {
      admin: {
        id: false,
        name: false,
        picture: false
      }
    }
  },

  componentWillMount: function () {
    $.get('get_admin', admin => {
      this.setState((prev_state) => ({
        admin: admin.name ? admin : prev_state.admin
      }))
    })
  },

  render: function() {
    const {admin} = this.state
    return (
      <div>
        <Search_Box/>
        {admin.name
          ?
            <Add_Article admin={admin} />
          :
            <a href='/auth/facebook' id='log-in-button' className='glyphicon glyphicon-user'></a>
        }
      </div>
    )
  }

})

module.exports = Home_Page