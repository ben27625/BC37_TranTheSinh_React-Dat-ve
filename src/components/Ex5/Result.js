import React, { Component } from "react";
import { connect } from "react-redux";

export class Result extends Component {
  render() {
    // lấy về tách ra
    const {item, chairSelectedList , handlePay, handleRemove } = this.props;
    return (
      <div>
        <h3> Kết quả đặt vé </h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td>Số Ghế</td>
                <td>Giá tiền </td>
                <td>Hủy</td>
              </tr>
            </thead>
            <tbody>
              {chairSelectedList.map((item) => {
                return (
                  <tr key={item.soGhe}>
                    <td>{item.soGhe}</td>
                  
                    <td>{item.gia.toLocaleString()}</td>
                    <td><button className="btn btn-danger" onClick={() => {handleRemove(item)}}> X</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mt-5">
            Tổng tiền : {
              chairSelectedList.reduce((total,item) => {
                return (total += item.gia)
              }, 0).toLocaleString() 
            }
            {' '} VND
          </div>
          <div className="btn btn-success mt-3" onClick={
            handlePay
          }>
            Thanh Toán
          </div>
        </div>
      </div>
    );
  }
}

// lấy
const mapStateToProps = (state) => {
  return {
    chairSelectedList: state.chair.chairSelectedList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePay: () => {
      dispatch ({
        type: "PAY"
      })
     
    },
    handleRemove: (chair) => {
      dispatch ({
        type: "CHANG_CHAIR", 
        payload: chair,
      })
     
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Result);
