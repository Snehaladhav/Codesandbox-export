import { Component } from "react";
import MountainTal1 from "../assets/Tal1.jpg";
import MountainTal4 from "../assets/Tal4.jpg";
import MountainDaguldul from "../assets/Daguldul.jpg";
import MountainDaguldul2 from "../assets/Daguldul2.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img4} />
          <img alt="img" src={this.props.img} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default DestinationData;
