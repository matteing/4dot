import React, { Component } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Dot from "features/dots/Dot";
import Spinner from "components/Spinner";
import { firestore } from "utils/firebase";

// todo figure out how to add profiles

const items = [
  {
    description: "Lovely colors #pallettes",
    image:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  },
  {
    description: "Amazing art #pallettes",
    image:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
  },
  {
    description: "An awesome thing",
    image:
      "https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  },
];

export const collectIdsAndData = (doc) => ({ id: doc.id, ...doc.data() });

class UserWall extends Component {
  state = {
    loading: true,
    dots: [],
    failed: false,
    errorMessages: [],
  };

  componentDidMount() {
    this.getDots();
    this.subscribe();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getQuery = () => {
    return firestore.collection("dots");
  };

  subscribe = () => {
    this.subscribedId = this.getQuery().onSnapshot(async (snapshot) => {
      const dots = snapshot.docs.map(collectIdsAndData);
      this.setState({ dots });
    });
  };

  unsubscribe = () => {
    this.subscribedId();
  };

  getDots = async () => {
    try {
      this.setState({ loading: true, failed: false });
      const dots = [];
      const snapshot = await this.getQuery().get();
      snapshot.forEach((dot) => dots.push(dot.data()));
      this.setState({ loading: false, failed: false, dots });
    } catch (e) {
      console.error("Could not fetch.");
    }
  };

  render() {
    if (this.state.loading)
      return (
        <center>
          <Spinner text="Loading your dots..." />
        </center>
      );
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 5 }}>
        <Masonry gutter={"1rem"}>
          {this.state.dots.map((i) => (
            <Dot dot={i} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    );
  }
}

export default UserWall;
