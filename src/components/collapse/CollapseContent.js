import React from 'react';
import PropTypes from 'prop-types';
import {Motion, spring} from 'react-motion';

const SPRING_PRECISION = 1;

const WAITING = 'WAITING';
const RESIZING = 'RESIZING';
const RESTING = 'RESTING';
const IDLING = 'IDLING';

const noop = () => null;
const css = {
  collapse: 'collapse__wrapper',
  content: 'collapse__content'
};

class CollapseContent extends React.PureComponent {
  static propTypes = {
    isOpened: PropTypes.bool.isRequired,
    springConfig: PropTypes.objectOf(PropTypes.number),
    forceInitialAnimation: PropTypes.bool,
    hasNestedCollapse: PropTypes.bool,
    fixedHeight: PropTypes.number,
    theme: PropTypes.objectOf(PropTypes.string),
    style: PropTypes.shape(),
    onRender: PropTypes.func,
    onRest: PropTypes.func,
    onMeasure: PropTypes.func,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    springConfig: {},
    forceInitialAnimation: false,
    hasNestedCollapse: false,
    fixedHeight: -1,
    style: {},
    theme: css,
    onRender: noop,
    onRest: noop,
    onMeasure: noop
  };

  constructor(props) {
    super(props);
    this.state = {
      currentState: IDLING,
      from: 0,
      to: 0,
      isOpened: props.isOpened,
    };
  }

  componentDidMount() {
    const { forceInitialAnimation, onRest } = this.props;
    const { isOpened } = this.state;
    if (isOpened) {
      const to = this.getTo();
      if (forceInitialAnimation) {
        const from = this.wrapper.clientHeight;
        this.setState({currentState: RESIZING, from, to});
      } else {
        this.setState({currentState: IDLING, from: to, to});
      }
    }
    onRest();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { currentState, isOpened } = prevState;
    if (nextProps.hasNestedCollapse) {
      if (nextProps.isOpened !== isOpened) {
        return {
          currentState: WAITING
        }
      }
    } else if (currentState === IDLING && (nextProps.isOpened || isOpened)) {
      return {
        currentState: WAITING
      }
    }
    return null;
  }

  componentDidUpdate(_, prevState) {
    const { isOpened, onRest, onMeasure } = this.props;
    const { currentState, to } = this.state;

    if (currentState === IDLING) {
      onRest();
      return;
    }

    if (prevState.to !== to) {
      onMeasure({height: to, width: this.content.clientWidth});
    }

    const animationFrom = this.wrapper.clientHeight;
    const animationTo = isOpened ? this.getTo() : 0;

    if (animationFrom !== animationTo) {
      this.setState({ currentState: RESIZING, from: animationFrom, to: animationTo }); // eslint-disable-line
      return;
    }

    if (currentState === RESTING || currentState === WAITING) {
      this.setState({ currentState: IDLING, from: animationFrom, to: animationTo }); // eslint-disable-line
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  }

  onContentRef = content => {
    this.content = content;
  };

  onWrapperRef = wrapper => {
    this.wrapper = wrapper;
  };

  onRest = () => {
    this.raf = requestAnimationFrame(this.setResting);
  };

  setResting = () => {
    this.setState({currentState: RESTING});
  };

  getTo = () => {
    const {fixedHeight} = this.props;
    return (fixedHeight > -1) ? fixedHeight : this.content.clientHeight;
  };

  getWrapperStyle = height => {
    const { currentState, from, to } = this.state;
    if (currentState === IDLING && to) {
      const { fixedHeight } = this.props;
      if (fixedHeight > -1) {
        return {overflow: 'hidden', height: fixedHeight};
      }
      return {height: 'auto'};
    }

    if (currentState === WAITING && !to) {
      return {overflow: 'hidden', height: 0};
    }

    return {overflow: 'hidden', height: Math.max(0, height)};
  };


  getMotionProps = () => {
    const { springConfig } = this.props;
    const { currentState, from, to } = this.state;

    return currentState === IDLING ? {
      defaultStyle: { height: to  },
      style: { height: to }
    } : {
      defaultStyle: { height: from },
      style: { height: spring(to, {precision: SPRING_PRECISION, ...springConfig })}
    };
  };

  renderContent = ({height}) => {
    const {
      isOpened: _isOpened,
      springConfig: _springConfig,
      forceInitialAnimation: _forceInitialAnimation,
      hasNestedCollapse: _hasNestedCollapse,
      fixedHeight: _fixedHeight,
      theme,
      style,
      onRender,
      onRest: _onRest,
      onMeasure: _onMeasure,
      children,
      ...props
    } = this.props;

    const {
      from,
      to
    } = this.state;

    onRender({current: height, from, to});

    return (
      <div
        ref={this.onWrapperRef}
        className={theme.collapse}
        style={{...this.getWrapperStyle(Math.max(0, height)), ...style}}
        {...props}>
        <div ref={this.onContentRef} className={theme.content}>{children}</div>
      </div>
    );
  };

  render() {
    return (
      <Motion {...this.getMotionProps()} onRest={this.onRest}>
        {this.renderContent}
      </Motion>
    );
  }
}

export default CollapseContent;
