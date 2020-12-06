import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }
  // react 16以後提供的ErrorBoundary功能
  // Development還是會用錯誤訊息蓋過頁面，但production不會。
  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error})
  }
  render() {
    if(this.state.hasError){
      return <h1>{this.state.errorMessage}</h1>
    }
    else{
      return this.props.children;
    }
  }
}

export default ErrorBoundary;