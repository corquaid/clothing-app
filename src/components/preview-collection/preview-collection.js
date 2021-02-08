import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item';
import './preview-collection.scss';

const CollectionPreview = ({title, items}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
          .filter((item, index) => index < 4)
          .map(item => ( // whole item is now being passed into the component instead of particular properties
            <CollectionItem key={item.id} item={item}/>
          ))
      }
    </div>
  </div>
)

export default CollectionPreview;