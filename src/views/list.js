import React, { Component } from 'react'
import { ListView } from 'antd-mobile'
import ShopBlock from '../components/shopBlock'


class myCourse extends Component {
  constructor(props) {
    super(props)
    // 创建ListViewDataSource对象
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2 // rowHasChanged(prevRowData, nextRowData); 用其进行数据变更的比较
    })
    this.state = {
      dataSource,
      datas: [],
      pageNo: 1,
      pageSize: 10,
      hasMore: true,
      refreshing: true,
      isLoading: true,
      dataArr: [],
    }
  }

  componentDidMount () {
    this.getData(true)
  }

  getData (ref = false) {
    console.log(this.state.pageNo)
    if (this.state.dataArr.length > 30) { // 判断是否已经没有数据了
      this.setState({
        refreshing: false,
        isLoading: false,
        hasMore: false
      })

      console.log('没有数据了~', 1)
      return false
    }
    var dataArr = this.state.dataArr.concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    this.setState({
      pageNo: this.state.pageNo,
      dataSource: this.state.dataSource.cloneWithRows(dataArr), // 数据源中的数据本身是不可修改的,要更新datasource中的数据，请（每次都重新）调用cloneWithRows方法
      refreshing: false,
      isLoading: false,
      dataArr: dataArr // 保存新数据进state
    })

    setTimeout(() => {
      console.log(this.state.dataArr)
    }, 500)
  }


  // 滑动到底部时加载更多
  onEndReached = (event) => {
    console.log(9999)
    // 加载中或没有数据了都不再加载
    if (this.state.isLoading || !this.state.hasMore) {

      return
    }
    this.setState({
      isLoading: true,
      pageNo: this.state.pageNo + 1, // 加载下一页
    }, () => {
      this.getData(false)
    })

  }

  render () {
    return (
      <div className="list">
        <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderFooter={() => (<div className="footer">{this.state.isLoading ? '加载中...' : '暂无更多数据'}</div>)}
          renderRow={ShopBlock}
          useBodyScroll
          onEndReachedThreshold={100}
          onEndReached={this.onEndReached}
          pageSize={10}
        />
      </div>
    );
  }
}

export default myCourse
