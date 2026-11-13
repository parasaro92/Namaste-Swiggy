// import { useState } from 'react';
import React, { useEffect } from 'react';

class User extends React.Component {
	constructor(props) {
		super(props);
		// console.log("1. Child Constructor")
		
		this.state = {
			userInfo: {
				name: 'dummy',
				location: 'Def'
			}
			
		};
	}

	async componentDidMount() {
		const data = await fetch("https://api.github.com/users/parasaro92");
		const json = await data.json()

		console.log(json)

		this.setState({
			userInfo: json
		})

		this.timer = setInterval(() => {
			console.log('timer')
		}, 1000);
	}

	componentDidUpdate() {

	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	render() {
		// const { name, location, contact } = this.props;
		const {name, location, avatar_url} = this.state.userInfo

		// console.log("2. Child Render")

		return (
			<div className="user-card">
				<img src={avatar_url} alt="avatar" />
				<h2>Name: {name}</h2>
				<h3>Location: {location}</h3>
			</div>
		);
	}
}

// const User = ({ name, location, contact }) => {
// 	const [count, setCount] = useState(0);

// useEffect(() => {
// 	console.log("use effect")

// component will unmount
// 	return () => {
// 		console.log("useEffect return")
// 	}
// }, [])

// 	return (
// 		<div className="user-card">
// 			<h2>Name: {name}</h2>
// 			<p>Count: {count}</p>
// 			<button onClick={() => setCount(count + 1)}>Increment Count</button>
// 			<h3>Location: {location}</h3>
// 			<h4>Contact: {contact}</h4>
// 		</div>
// 	);
// }

export default User;