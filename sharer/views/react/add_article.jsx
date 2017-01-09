const React       = require('react')
const Modal       = require('./my_modal.jsx')
const $           = require('jquery')
const Search_Tag  = require('./search_tag.jsx')
const Error_Input = require('./error_input.jsx')
const error       = require('../../../tools/form.js')().error

const Add_Article = React.createClass({

  propTypes: {
    admin: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      open: false,
      article: {
        admin_: this.props.admin.id,
        url: '',
        title: '',
        author: '',
        description: '',
        complexity: '',
        image: '',
        tags_: []
      }
    }
  },

  open_dialog: function () {
    this.setState({open: true})
  },

  close_dialog: function () {
    this.setState({open: false})
  },

  create_article: function () {
    if ($('.form-error').length > 0) return
    $.ajax({
      method: 'POST',
      url:'/add_article',
      data: this.state.article,
      success: () => this.confirmation('success'),
      error: (err) => this.confirmation('error')
    })
    this.close_dialog()
  },

  confirmation: function (type) {
    $('.confirmation.'+type).slideToggle('fast')
    setTimeout(() => $('.confirmation.'+type).slideToggle('fast'),5000)
  },

  handle_change: function (event) {
    let article = this.state.article
    article[event.target.id] = event.target.value
    this.setState({article})
  },

  add_tag: function (id) {
    let {article} = this.state
    article.tags_.push(id)
    this.setState({article})
  },

  remove_tag: function (i) {
    let {article} = this.state
    article.tags_ = article.tags_.splice(i,1)
    this.setState({article})
  },

  render: function() {
    const {admin} = this.props
    const {open, article} = this.state
    return (
      <div>
        <a href='#' id='add-article-button' className='glyphicon glyphicon-plus' onClick={this.open_dialog} ></a> 
        <Modal
          open={open}
          close={this.close_dialog}
          action={this.create_article}
          actionName="Create Article"
          title="Add a new article">
          <Error_Input value={article.url} error={error.empty} message='URL can not be empty' />
          <div className='input-group'>
            <span className="input-group-addon">URL</span>
            <input className='form-control' id='url' value={article.url} onChange={this.handle_change}/>
          </div>
          <Error_Input value={article.title} error={error.empty} message='Title can not be empty' />
          <div className='input-group'>
            <span className="input-group-addon">Title</span>
            <input className ='form-control' id='title' value={article.title} onChange={this.handle_change} />
          </div>
          <Error_Input value={article.author} error={error.empty} message='Author can not be empty' />
          <div className='input-group'>
            <span className="input-group-addon">Author</span>
            <input className='form-control' id='author' value={article.author} onChange={this.handle_change} />
          </div>
          <Error_Input value={article.description} error={error.empty} message='Description can not be empty' />
          <div className='input-group'>
            <span className="input-group-addon">Description</span>
            <input className='form-control' id='description' value={article.description} onChange={this.handle_change} />
          </div>
          <Error_Input value={article.complexity} error={error.out_of_range(1, 3)} message='Complexity must be a number from 1 to 3' />
          <div className='input-group'>
            <span className="input-group-addon">Complexity</span>
            <input type="number" min='1' max="3" className='form-control' id='complexity' value={article.complexity} onChange={this.handle_change} />
          </div>
          <Error_Input value={article.image} error={error.empty} message='Image can not be empty' />
          <div className='input-group'>
            <span className="input-group-addon">Image</span>
            <input className='form-control' id='image' value={article.image} onChange={this.handle_change} />
          </div>
          <Error_Input value={article.tags_} error={error.empty} message='You must select at least 1 tag'/>
          <Search_Tag add_tag={this.add_tag} remove_tag={this.remove_tag}/>
        </Modal>
      </div>
    )
  }

})

module.exports = Add_Article