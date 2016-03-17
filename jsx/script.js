var Photo = React.createClass({

  render: function() {
    return (
      <div className='photo'>
        <img src={this.props.src} />
        <span>{this.props.caption}</span>
      </div>
    );
  }
});


React.render(<Photo src='http://tinyurl.com/lkevsb9' caption='Bla bla!' />, document.querySelectorAll(".testClass")[0]);

React.render(<Photo src='http://tinyurl.com/lkevsb9' caption='Hong Kong!' />, document.querySelector(".testClass2"));