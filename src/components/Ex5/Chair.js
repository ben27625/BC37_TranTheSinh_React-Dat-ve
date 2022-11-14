import React, { Component } from 'react'
import clsx from 'clsx'
import './chair.css'
import { connect } from 'react-redux'


export class Chair extends Component {
  render() {
   const { item , chairSelectedList, handleChair } = this.props
    return (
        <div>
            <button className={clsx('chair',
            {
              booked: item.daDat,
              booking: chairSelectedList.find((ele) => ele.soGhe === item.soGhe),
            }
            
            )} 
            disabled={item.daDat}
            onClick={
              () => handleChair(item)
            }
            >{item.soGhe}</button> 
        </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    chairSelectedList: state.chair.chairSelectedList,
  }
}

// thay đổi state trên redux

const mapDispatchToProps = (dispatch) => {
  return {
    handleChair: (chair) => {
      dispatch(
        {
          type: 'CHANG_CHAIR',
          payload: chair,
        }
      )
      
    }
  }
}

export default  connect(mapStateToProps , mapDispatchToProps)(Chair)
// falsy : undefined , null NaN ,0, false, '',

