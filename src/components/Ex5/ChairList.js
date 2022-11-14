import React, { Component } from "react";
import { connect } from "react-redux";
import Chair from "./Chair";

export class ChairList extends Component {
  render() {
    console.log(this.props);
    const { chairList } = this.props;
    return (
      <div className="d-flex flex-column gap-3 align-items-center ">
        {chairList.map((item) => {
          return (
            <div key={item.hang} className="d-flex align-items-center" >
              <div style={{width: "30px"}} >{item.hang}</div>
              <div className="d-flex gap-3">
                {item.danhSachGhe.map((chair) => {
                  return <Chair key={chair.soGhe} item={chair} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

// kết nối reducer
const mapStateToProps = (state) => {
  return {
    chairList: state.chair.chairList,
  };
};

export default connect(mapStateToProps)(ChairList);
