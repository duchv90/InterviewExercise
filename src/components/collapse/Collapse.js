import React from 'react';
import PropTypes from 'prop-types';
import CollapseContent from './CollapseContent';

class Collapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: props.isOpen
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isAccordion && state.isActive !== props.isOpen) {
      return {
        isActive: props.isOpen
      }
    }
    return null;
  }

  changeActive = () => {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive
    });
  }

  render() {
    const { index, heading, children, changeAccordionActive, isAccordion } = this.props;
    const { isActive } = this.state;

    return (
      <div className="collapse" index={index}>
        {isAccordion ? (
          <div className="collapse__heading" onClick={() => changeAccordionActive()} role="presentation">
            {heading}
          </div>
        ) : (
          <div className="collapse__heading" onClick={this.changeActive} role="presentation">
            {heading}
          </div>
        )}
        <CollapseContent isOpened={isActive}>
          {children}
        </CollapseContent>
      </div>
    );
  }
}

Collapse.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node,
  index: PropTypes.number,
  isOpen: PropTypes.bool,
  isAccordion: PropTypes.bool,
  changeAccordionActive: PropTypes.func
};

Collapse.defaultProps = {
  index: 0,
  isOpen: false,
  isAccordion: false,
  children: PropTypes.element,
  changeAccordionActive: () => {}
}

export default Collapse;
