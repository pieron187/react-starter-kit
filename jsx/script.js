(function() {
	var myReact = {};

	myReact.Photo = React.createClass({

		getInitialState: function() {
			return {
				liked: false,
				color: 'red'
			};
		},

		toggleLiked: function() {
			this.setState({
				liked: !this.state.liked,
				color: this.state.color === 'red' ? 'blue' : 'red'
			});
		},


		render: function() {
			var buttonClass = this.state.liked ? 'active' : '';

			return (
				<div className='photo'>
					<img src={this.props.src} className={this.state.color} />
					<div className='bar'>
						<button onClick={this.toggleLiked} className={buttonClass}>♥</button>
						<span>{this.props.caption}</span>
					</div>
				</div>
			);
		}
	});


	myReact.setEvents = function() {
		document.getElementsByTagName('body')[0].addEventListener('click', function( event ) {
			console.log('click count: ' + event.detail);
			console.log('event.target.innerHTML: ' + event.target.innerHTML);
		}, false);
	};


	myReact.init = function() {
		React.render(<myReact.Photo src='http://tinyurl.com/lkevsb9' caption='Bla bla!' />, document.querySelectorAll('.testClass')[0]);
		React.render(<myReact.Photo src='http://tinyurl.com/lkevsb9' caption='Hong Kong!' />, document.querySelector('.testClass2'));

		myReact.setEvents();

	};


	myReact.init();

}());