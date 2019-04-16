import React from 'react';
import Accordion from '../collapse/Accordion';
import Collapse from '../collapse/Collapse';
import Link from '../forms/Link';

const HomePage = () => (
  <div className="main__inner">
    <h3>This is a basic style library. Build by: Hoàng Việt Đức</h3>
    <div className="basic-content">
      <Accordion activeIndex={-1}>
        <Collapse heading="Form">
          <div className="home-list">
            <Link className="home-list__item" href="/">Button <i className="fas fa-angle-right"></i></Link>
            <Link className="home-list__item" href="/">Input <i className="fas fa-angle-right"></i></Link>
            <Link className="home-list__item" href="/">List <i className="fas fa-angle-right"></i></Link>
            <Link className="home-list__item" href="/">Slider <i className="fas fa-angle-right"></i></Link>
            <Link className="home-list__item" href="/">Uploader <i className="fas fa-angle-right"></i></Link>
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

export default HomePage;
