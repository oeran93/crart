var React = require('react')

var Article = React.createClass({

  propTypes: {
    url: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    complexity: React.PropTypes.number.isRequired,
    image: React.PropTypes.string,
    tags_: React.PropTypes.array.isRequired,
    added: React.PropTypes.string.isRequired
  },

  getDefaultProps: function () {
    return {
      image: 'some default image'
    }
  },

  render: function() {
    let {url, title, author, description, complexity, image, tags_, added} = this.props 
    return (
      <a target="_blank" href={url}>
      <div className='row'>
        <div className='article col-xs-12'>
          <div className='article-image col-xs-3'>
            <img className='img-responsive float-xs-left' src={image} alt={title + 'image'} />
          </div>
          <div className='col-xs-9'>
            <div className='article-title'>
              {title}
            </div>
            <div>
              <span className='article-author'>
                {author}
              </span>
              <span className='article-added margin-left'>
                {added}
              </span>
              <span className='article-complexity label-success margin-left'>
                {complexity}
              </span>
            </div>
            <div className='article-description'>
              {description}
            </div>
          </div>
          <div className='article-tags'>
          </div>
        </div>
      </div>
      </a>
    )
  }

})

module.exports = Article