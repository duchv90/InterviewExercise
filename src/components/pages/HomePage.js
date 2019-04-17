/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Accordion from '../collapse/Accordion';
import Collapse from '../collapse/Collapse';
import Link from '../forms/Link';
import {
  openButtonPage,
  openInputPage,
  openListPage,
  openSliderPage,
  openUploadPage
} from '../../actions/page';

const HomePage = (props) => {
  const {
    openButtonPage,
    openInputPage,
    openListPage,
    openSliderPage,
    openUploadPage
  } = props;

  return (
    <div className="main__inner">
      <h3>This is a basic style library. Build by: Hoàng Việt Đức</h3>
      <div className="basic-content">
        <Accordion activeIndex={-1}>
          <Collapse heading="Form">
            <div className="home-list">
              <Link className="home-list__item" href="javascript:void(0)" onClick={openButtonPage}>Button <i className="fas fa-angle-right"></i></Link>
              <Link className="home-list__item" href="javascript:void(0)" onClick={openInputPage}>Input <i className="fas fa-angle-right"></i></Link>
              <Link className="home-list__item" href="javascript:void(0)" onClick={openListPage}>List <i className="fas fa-angle-right"></i></Link>
              <Link className="home-list__item" href="javascript:void(0)" onClick={openSliderPage}>Slider <i className="fas fa-angle-right"></i></Link>
              <Link className="home-list__item" href="javascript:void(0)" onClick={openUploadPage}>Upload <i className="fas fa-angle-right"></i></Link>
            </div>
          </Collapse>
          <Collapse heading="Basic component">
            <p>This is content 2</p>
          </Collapse>
          <Collapse heading="Operational">
            <p>This is content 3</p>
          </Collapse>
          <Collapse heading="Navigation">
            <p>This is content 3</p>
          </Collapse>
          <Collapse heading="Other">
            <p>This is content 3</p>
          </Collapse>
        </Accordion>
      </div>
      <div className="basic-content">
        <Collapse heading="This is collapse default">
          <p>This is content 1</p>
          <p>This is content 1</p>
          <p>This is content 1</p>
          <p>This is content 1</p>
        </Collapse>
      </div>
      <div className="basic-content">
        <Collapse heading="This is collapse default">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis erat a lorem eleifend laoreet. Nam purus dui, blandit ac viverra ut, placerat non arcu. Donec vehicula leo ut nibh posuere, a euismod neque hendrerit. Donec eu suscipit tellus, a commodo eros. Cras eleifend erat vehicula purus consectetur, vitae molestie mi tincidunt. Mauris a magna pretium, tincidunt tellus commodo, dapibus velit. Vestibulum leo enim, sollicitudin nec leo id, rutrum mollis ipsum. Mauris erat dolor, posuere ac ligula in, vulputate interdum lacus. In tincidunt suscipit purus eleifend tristique. Proin eget libero posuere, consectetur dui nec, mattis ante. Proin semper imperdiet ex quis vehicula. Duis eu ante lorem. Curabitur mauris eros, feugiat ut nisl ut, rhoncus efficitur leo. Donec facilisis varius eros, nec ullamcorper metus gravida ac. Proin posuere finibus nisl, ut tempus mauris aliquet quis. Morbi eleifend sapien quis tempus eleifend. 
        </Collapse>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  openButtonPage: PropTypes.func.isRequired,
  openInputPage: PropTypes.func.isRequired,
  openListPage: PropTypes.func.isRequired,
  openSliderPage: PropTypes.func.isRequired,
  openUploadPage: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  openButtonPage,
  openInputPage,
  openListPage,
  openSliderPage,
  openUploadPage
}

export default connect(null, mapDispatchToProps)(HomePage);
