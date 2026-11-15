import User from "./User";
import React from "react";
import UserContext from "./utils/UserContext";

// React.Component same as Component class in React
class About extends React.Component {

  constructor(props) {
    super(props);
    // console.log("1. Parent - About constructor");
  }

  componentDidMount() {
    // console.log("3. Parent - About componentDidMount");
  }

  render() {
    // console.log("2. Parent - About render");
    return (
      <div>
        <h1>About Us</h1>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({loggedInUser}) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}         
          </UserContext.Consumer>
        </div>
        <p>This is the About page.</p>
        <User name={"Gullu"} location={"New York"} contact={"john.doe@example.com"} />
      </div>
    )
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>This is the About page.</p>

//       <User name={"Gullu"} location={"New York"} contact={"john.doe@example.com"} />
//     </div>
//   );
// }

export default About;