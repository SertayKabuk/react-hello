// import "./Card.css";

// type CardProps = {
//   children: React.ReactNode;
// };

// const Card = ({ children }: CardProps): JSX.Element => {
//   return <div className="card">{children}</div>;
// };

// export { Card };

import React from "react";

type CardProps = {
  className: string;
}

export class Card extends React.Component<CardProps> {
  render() {
    const classes = "card " + this.props.className;
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}
