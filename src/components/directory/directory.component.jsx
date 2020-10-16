import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          "imageUrl": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
          "title": "PRODUCT 1",
          "id": 1
        },
        {
          "imageUrl": "https://images.unsplash.com/photo-1548100721-15f0e76035c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
          "title": "PRODUCT 2",
          "id": 2
        },
        {
          "imageUrl": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          "title": "PRODUCT 3",
          "id": 3
        },
        {
          "imageUrl": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
          "title": "PRODUCT 4",
          "id": 4
        },
        {
          "imageUrl": "https://images.unsplash.com/photo-1575052454050-f553218f2da5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
          "title": "PRODUCT 5",
          "id": 5
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, title, imageUrl }) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;