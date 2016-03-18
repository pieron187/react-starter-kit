(function() {
	'use strict';

	var myReact = {};

	var data = [
		{url: 'http://tinyurl.com/lkevsb9', caption: 'Hong Kong!'},
		{url: 'http://tinyurl.com/mxkwh56', caption: 'Cows'},
		{url: 'http://tinyurl.com/nc7jv28', caption: 'Scooters'}
	];

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


	myReact.PhotoGallery = React.createClass({

		render: function() {

			var photos = this.props.photos.map(function(photo){
				return <myReact.Photo src={photo.url} caption={photo.caption} />
			});

			return (
				<div className='photo-gallery'>
					{photos}
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
		React.render(<myReact.PhotoGallery photos={data} />, document.querySelectorAll('.testClass')[0]);

		myReact.setEvents();
	};


	myReact.init();

}());