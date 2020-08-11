import React, { Component } from 'react'
import '../css/reset.css'
import '../css/home.scss'
import { Carousel, Grid } from 'antd-mobile';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      banners: [
        { img: require('../assets/banner/banner1.jpg') },
        { img: require('../assets/banner/banner2.jpg') }
      ],
      menuList: [
        { icon: require('../assets/icon/icon1 (1).png'), text: '菜单1' },
        { icon: require('../assets/icon/icon1 (2).png'), text: '菜单1' },
        { icon: require('../assets/icon/icon1 (3).png'), text: '菜单1' },
        { icon: require('../assets/icon/icon1 (4).png'), text: '菜单1' },
        { icon: require('../assets/icon/icon1 (5).png'), text: '菜单1' },
        { icon: require('../assets/icon/icon1 (6).png'), text: '菜单1' },
        { icon: require('../assets/icon/icon1 (7).png'), text: '菜单1' },
        { icon: require('../assets/icon/icon1 (8).png'), text: '菜单1' },
        { icon: require('../assets/icon/icon1 (9).png'), text: '菜单1' },
        { icon: require('../assets/icon/icon1 (10).png'), text: '菜单1' },
      ]
    }
  }

  clickMenu (val) {
    console.log(val)
  }

  renderList (value, index) {
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

  render () {
    const data = Array.from(new Array(8)).map((_val, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `name${i}`,
    }));
    return (
      <div className="mainPage">
        <div className="banner" style={{ height: '200px' }}>
          <Carousel autoplay={true} infinite>
            {this.state.banners.map((val, index) => (
              <img src={val.img} alt="" style={{ width: '100%', height: 200, verticalAlign: 'top' }} key={index} />
            ))}
          </Carousel>
        </div>

        <div className="menu">
          <Grid data={this.state.menuList} columnNum={5} hasLine={false} onClick={this.clickMenu.bind(this)} />
        </div>

        <div className="list">
          {this.state.menuList.map((value, index) => {
            return this.renderList(value, index)
          })}
        </div>

      </div>
    )
  }
}

export default Home
