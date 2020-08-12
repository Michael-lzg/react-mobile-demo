import React, { Component } from 'react'
import '../css/reset.css'
import '../css/home.scss'
import { Carousel, Grid } from 'antd-mobile';
import ShopBlock from '../components/shopBlock'

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

  render () {
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
            return ShopBlock(value, index)
          })}
        </div>

      </div>
    )
  }
}

export default Home
