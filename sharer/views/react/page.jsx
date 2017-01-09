const React = require('react')
const {Link}  = require('react-router')

const Page = React.createClass({

  propTypes: {
    navigation: React.PropTypes.array.isRequired
  },

  render: function() {
    let {navigation} = this.props
    return (
      <div>
        <ol className="breadcrumb">
          <li><Link to='/' className='text-capitalize'>
            Home
          </Link></li>
          {navigation.map(link => {
            return (
              <li><Link to={link.url} className='text-capitalize'>
                {link.name}
              </Link></li>
            )
          })}
        </ol>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }

})

module.exports = Page