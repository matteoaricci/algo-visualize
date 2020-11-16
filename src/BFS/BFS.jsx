import React, { Component } from "react";
import "./BFS.css";

class BFS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasSize: {
        canvasWidth: 800,
        canvasHeight: 600,
      },
      hexSize: 20,
    };
  }

  componentDidMount() {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    this.canvasHex.width = canvasWidth;
    this.canvasHex.height = canvasHeight;
    this.drawHex(this.canvasHex, { x: 50, y: 50 });
  }

  getHexCornerCoord(center, i) {
    const angleDeg = 60 * i - 30;
    const angleRad = (Math.PI / 180) * angleDeg;
    let x = center.x + this.state.hexSize * Math.cos(angleRad);
    let y = center.y + this.state.hexSize * Math.sin(angleRad);
    return this.Point(x, y);
  }

  Point(x, y) {
    return { x: x, y: y };
  }

  drawHex(canvasID, center) {
    for (let i = 0; i <= 5; i++) {
      let start = this.getHexCornerCoord(center, i);
      let end = this.getHexCornerCoord(center, i + 1);

      this.drawLine(
        canvasID,
        { x: start.x, y: start.y },
        { x: end.x, y: end.y }
      );
    }
  }

  drawLine(canvasID, start, end) {
    const ctx = canvasID.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  }

  render() {
    return (
      <div className="BFS">
        <canvas ref={(canvasHex) => (this.canvasHex = canvasHex)}></canvas>
      </div>
    );
  }
}

export default BFS;
