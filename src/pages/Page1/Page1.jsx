import React,{Component} from 'react'
import {Card} from 'antd'

export default class Page1 extends Component {

  render(){
    console.log(this.props.match)
    return (
      <Card>
        page1
      </Card>
    )
  }


}