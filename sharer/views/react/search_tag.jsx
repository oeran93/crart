const React = require('react')
const $     = require('jquery')

const Search_Tag = React.createClass({

  propTypes: {
    add_tag: React.PropTypes.func.isRequired,
    remove_tag: React.PropTypes.func.isRequired
  },

  getInitialState: function () {
    return {
      input: '',
      search_results: [],
      article: {
        tag_names: []
      }
    }
  },

  handle_change: function (event) {
    this.setState({input: event.target.value})
    if (event.target.value !== '') {
      $.ajax({
        method: 'POST',
        url:'/tag_by_name',
        data: {tag_name: event.target.value},
        success: (r) => this.setState({search_results: r})
      })
    } else {
      this.setState({search_results: []})
    } 
  },

  add_tag: function (id, name) {
    let {add_tag} = this.props
    let {article} = this.state
    article.tag_names.push(name)
    add_tag(id)
  },

  remove_tag: function (i) {
    let {remove_tag} = this.props
    let {article} = this.state
    article.tag_names.splice(i,1)
    remove_tag(i)
  },

  render: function() {
    let {search_results, input, article} = this.state
    return (
      <div>
        <div className='input-group'>
          <span className="input-group-addon">Tags</span>
          <input className='form-control' id='string_tags' value={input} onChange={this.handle_change} />
          <span className="input-group-addon">
            {search_results.map((r,i) => {
              return <span key={r._id} className='tag label-primary margin-left' onClick={ () => this.add_tag(r._id, r.name)}>{r.name}</span> 
            })}
          </span>
        </div>
        {article.tag_names.map((name,i) => {
          return (<span key={name} className='tag label-success margin-left'>
              {name} <span onClick={() => this.remove_tag(i)}>x</span>
            </span>)
        })}
      </div>
    )
  }

})

module.exports = Search_Tag