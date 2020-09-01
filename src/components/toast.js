import React from 'react'
import ReactDOM from 'react-dom'
import '../css/toast.scss'

export default {
  dom: null, //被append的元素

  success (tip, type) {
    this.close()

    this.dom = document.createElement('div')

    let img
    if (type === 'success') {
      img = <img src={require('../assets/img/success.png')} alt="" />
    } else if (type === 'fail') {
      img = <img src={require('../assets/img/fail.png')} alt="" />
    } else if (type === 'loading') {
      img = <img src={require('../assets/img/loading.png')} className="loading" alt="" />
    }

    // JSX代码
    const Toast = (
      <div className="mask">
        <div className="little-tip">
          {img}
          <span>{tip}</span>
        </div>
      </div>
    )

    ReactDOM.render(Toast, this.dom)
    document.body.appendChild(this.dom)

    setTimeout(() => {
      this.close()
    }, 1500)
  },

  close () {
    this.dom && this.dom.remove()
  }
}
