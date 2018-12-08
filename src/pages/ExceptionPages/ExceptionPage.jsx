import React from 'react'
import {Card} from 'antd'

export default function(props) {
  const {tips} = props
  return (
    <Card>
      {tips}
    </Card>
  )

}