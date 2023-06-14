import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import MaterialIcon from '../MaterialIcon'
import { MyListSkeleton } from '../LoadingSkeleton'
import { dateString, truncateString } from '../Helpers'
import './styles.scss'

const SavedItem = props => (
  <div className='saved-item mb-40 py-0 pr-22 pl-15'>
    <div className='saved-item__row'>
      <div className='saved-item__item-description pr-20'>
        <h3 className='saved-item__title mt-0 mx-0 mb-5'><a href={props.uri}>{props.title}</a></h3>
        {dateString(props.dates) !== props.title && <p className='saved-item__date'>{dateString(props.dates)}</p>}
        {props.description && <p className='saved-item__description text--truncate'>{truncateString(props.description, 150)}</p>}
        {props.parent && <p className='saved-item__found-in'>Found in: <a href={props.parentRef}>{props.parent}</a></p>}
        {props.lastRequested && <p className='saved-item__last-requested'>Last requested on: {props.lastRequested}</p>}
      </div>
      <div className='saved-item__buttons'>
        {props.online &&
          <a className='btn btn--blue btn--sm'
            href={`${props.uri}/view`}>View Online <MaterialIcon icon='visibility' /></a>}
        <Button
          label='Remove'
          className='btn--gray btn--sm'
          iconBefore='delete'
          handleClick={props.handleClick} />
      </div>
    </div>
  </div>)

SavedItem.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  handleClick: PropTypes.func,
  isChecked: PropTypes.bool,
  lastRequested: PropTypes.instanceOf(Date),
  online: PropTypes.bool,
  parent: PropTypes.string,
  parentRef: PropTypes.string,
  title: PropTypes.string,
  uri: PropTypes.string
}

const SavedItemGroup = ({ items, removeFromList, title }) => {
  const listItems = items.map((item, index) =>
    <SavedItem
      key={index}
      parentRef={item.parent_ref}
      {...item}
      handleClick={() => removeFromList(item)} />
  )

  return (
    <div className='saved-items__item-group'>
      <h2 className='item-group__title mt-24 mb-30 p-0'>{title}</h2>
      <div className='item-group__items'>
        {listItems}
      </div>
    </div>
  )
}

SavedItemGroup.propTypes = {
  handleChange: PropTypes.func,
  items: PropTypes.array.isRequired,
  removeFromList: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export const SavedItemList = ({ isLoading, items, removeFromList }) => {
  const groupItems = items => {
    return items.length ? (items.map((item) =>
      <SavedItemGroup
        key={item.title}
        {...item}
        removeFromList={removeFromList} />
    )) : (<p className='saved-items__empty mt-20 py-20 px-0'>No saved items.</p>)
  }

  return (
    <div className='saved-items ml-15'>
      {isLoading ? <MyListSkeleton /> : groupItems(items)}
    </div>
  )
}

SavedItemList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  removeFromList: PropTypes.func.isRequired
}
