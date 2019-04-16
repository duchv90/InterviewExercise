import React from 'react';
import PropTypes from 'prop-types';

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: props.activeIndex
    }
  }

  changeAccordionActive = (index) => {
    const { activeIndex } = this.state;

    if (activeIndex !== index) {
      this.setState({
        activeIndex: index
      });
    } else {
      this.setState({
        activeIndex: -1
      });
    }
  }

  render() {
    const { children } = this.props;
    const { activeIndex } = this.state;

    const renderChildren = React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        index,
        isAccordion: true,
        isOpen: index === activeIndex,
        changeAccordionActive: () => this.changeAccordionActive(index)
      });
    });

    return (
      <div className="accordion">
        {renderChildren}
      </div>
    );
  }
}

Accordion.propTypes = {
  activeIndex: PropTypes.number,
  children: PropTypes.node
}

Accordion.defaultProps = {
  activeIndex: -1,
  children: PropTypes.element
}

export default Accordion;
