import React, { Component } from "react";
import { connect } from "react-redux";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button
} from "./style.js";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavSearch
            className={this.props.focused ? "focused" : ""}
            onFocus={this.props.handleInputFocus}
            onBlur={this.props.handleInputBlur}
          />
          <NavItem className="right">Aa</NavItem>
        </Nav>
        <Addition>
          <Button className="writing">写文章</Button>

          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.focused
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: "search_focus"
      };
      dispatch(action);
    },
    handleInputBlur(){
      const action = {
        type: "search_blur"
      };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
