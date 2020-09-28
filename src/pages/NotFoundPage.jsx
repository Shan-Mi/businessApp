import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
class NotFoundPage extends React.Component {
  render() {
    return (
      <FlexContainer>
        <div>
          <img
            src="https://i.imgur.com/Q2BAOd2.png"
            alt="not-found-img-placeholder"
          />
          <p className="text-center">
            <strong>
              Please check your URL and try agian.
              <span role="img" aria-label="crying face">
                😢
              </span>
            </strong>
          </p>
          <p className="text-center">
            <Link to="/">Go back to HomePage</Link>
          </p>
        </div>
      </FlexContainer>
    );
  }
}
export default NotFoundPage;

const FlexContainer = styled.div`
  display: flex;
  /* place-self: center; */

  img {
    width: 40%;

    @media screen and (min-width: 1300px) {
      width: unset;
    }
  }
`;
