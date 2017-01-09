const React = require('react')
const Tag   = require('./tag.jsx')
const $     = require('jquery')

const Search_Box = React.createClass({

  getInitialState: function () {
    return {
      tags: []
    }
  },

  componentWillMount: function () {
    $.get('/tags', (tags) => {
      this.setState({tags: tags})
    })
  },

  render: function() {
    const {tags} = this.state
    return (
      <div id='tags-box' className='col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4'>
        {tags.map((tag) => 
          <Tag key={tag._id}
               _id={tag._id}
               name={tag.name}
          />
        )}
      </div>
    )
  }

})

module.exports = Search_Box