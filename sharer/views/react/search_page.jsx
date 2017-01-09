const React   = require('react')
const $       = require('jquery')
const Page    = require('./page.jsx')
const Article = require('./article.jsx')

const Search_Page = React.createClass({

  propTypes: {
    params: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      articles: []
    }
  },

  componentWillMount: function () {
    $.ajax({
      url: '/articles_by_tags',
      data: {tags: [this.props.params.tag]},
      success: (articles) => this.setState({articles})
    })
  },

  render: function() {
    const {articles} = this.state
    return (
      <Page navigation={[{name: 'Search', link: '/search_page/'+this.props.params.tag}]}>
        {articles.map(
          (article) => {
            return (<Article 
              key={article._id}
              url={article.url}
              title={article.title}
              author={article.author}
              description={article.description}
              complexity={article.complexity}
              image={article.image}
              tags_={article.tags_}
              added={article.added}
            />)
          }
        )}
      </Page>
    )
  }

})

module.exports = Search_Page