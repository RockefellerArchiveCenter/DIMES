import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import { t } from '@lingui/macro'
import classnames from 'classnames'

const ListToggleButton = ({ className, isMobile, isSaved, item, toggleSaved }) => (
  isSaved ? (
    <Button
      ariaLabel={t({
        comment: 'Aria label for List Toggle button',
        message: 'Remove item from list'
      })}
      ariaPressed
      className={classnames('saved', className)}
      label={
        isMobile ?
        t({
          comment: 'Label for List Toggle button',
          message: 'Remove'
        })
        :
        t({
          comment: 'Label for List Toggle button',
          message: 'Remove from List'
        })
      }
      iconAfter='remove_circle_outline'
      handleClick={() => toggleSaved(item)} />
  ) : (
    <Button
      ariaLabel={t({
        comment: 'Aria label for List Toggle button',
        message: 'Add item to list'
      })}
      ariaPressed={false}
      className={className}
      label={
        isMobile ?
        t({
          comment: 'Label for List Toggle button',
          message: 'Add'
        })
        :
        t({
          comment: 'Label for List Toggle button',
          message: 'Add to List'
        })
      }
      iconAfter='add_circle_outline'
      handleClick={() => toggleSaved(item)} />
  )
)

ListToggleButton.propTypes = {
  className: PropTypes.string,
  isMobile: PropTypes.bool,
  isSaved: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  toggleSaved: PropTypes.func.isRequired
}

export default ListToggleButton
