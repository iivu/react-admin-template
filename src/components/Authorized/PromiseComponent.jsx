import React, {Component} from 'react'
import LoadingSpin from '@/components/LoadingSpin'

export default class PromiseComponent extends Component {

  state = {
    component: null,
  }

  componentDidMount () {
    this.setComponent(this.props)
  }

  setComponent (props) {
    props.promise
      .then(() => this.setState({component: props.target}))
      .catch(() => this.setState({component: props.noMatch}))
  }

  render () {
    const Component = this.state.component
    return Component ? (
      <Component/>
    ) : (
      <LoadingSpin/>
    )
  }


}