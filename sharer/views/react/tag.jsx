const React = require('react')
const {Link} = require('react-router')

const Tag = React.createClass({

  propTypes: {
    _id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },

  render: function() {
    const {name,_id} = this.props
    return (
      <Link to={"/search_page/"+_id} id='tag' className='text-capitalize'>
        {name}
      </Link>
    )
  }

})

module.exports = Tag