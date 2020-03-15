import React from 'react'
import { withRouter } from 'react-router-dom';
import { Result, Button } from 'antd';
import './style.css';


class Error404 extends React.Component {
  state = {
    timer: 6,
  }
  componentDidMount () {
    this.timer();
  }

  timer () {
    let {timer} = this.state;
    setTimeout(() => {
      this.setState({
        timer: timer - 1,
      });
      if (this.state.timer > 0) {
        this.timer();
      } else {
        this.loadHomePage();
      }
    },1000);
  }

  loadHomePage = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="page">
        { 
            <section className="flex w100pct h100pct ta-center flex-jc-c flex-item-center fs4 mt4 errorContainer">
              {/* <Icon type="disconnect" />
              <Icon type="home" theme="filled" />
              <Icon type="stop" theme="filled" />
              404 */}
              <Result
                className="m-auto"
                status="404"
                title="404"
                subTitle={`Ahhh! This page doesn't exist. Redirecting to home page in ${this.state.timer} seconds`}
                extra={<Button type="primary" icon="home" onClick={this.loadHomePage}>Back Home</Button>}
              />,
            </section> 
        }
      </div>
    )
  }
}
export default withRouter(Error404)