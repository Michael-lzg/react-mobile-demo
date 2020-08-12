import React from 'react'

function ShopBlock (value, index) {
  return (
    <div key={index} className="listItem">
      <img src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750" alt="" className="pic" />
      <div className="name ellipsis">天河第一隆江猪脚饭</div>
      <div className="label clearfix">
        <span className="fl">美食</span>
        <span className="fl">口味佳</span>
        <span className="fl">好吃</span>
        <div className="fr km">2.6km</div>
      </div>
      <div className="position ellipsis">广州天河区科韵路码农三号街</div>
      <div className="quan ellipsis">门店优惠折扣：汇享8折优惠</div>
    </div>
  )
}
export default ShopBlock