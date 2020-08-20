import React, { Component } from 'react';
import PropTypes from "prop-types";
import Button from "../Button";
import { CheckBoxInput } from "../Inputs";
import "./styles.scss";

class SavedItem extends Component {
  // TODO: styling for checkbox
  // TODO: onClick handlers for buttons
  render() {
    return (
      <div className="saved-item">
        <div className="saved-item__inputs">
          <CheckBoxInput
            className="checkbox--orange hide-label"
            id={this.props.title}
            checked={true}
            label={this.props.title} />
        </div>
        <div className="saved-item__item-description">
          <h3 className="saved-item__title">{this.props.title}</h3>
          {this.props.date !== this.props.title && <p className="saved-item__date">{this.props.date}</p>}
          {this.props.description && <p className="saved-item__description">{this.props.description}</p>}
          {this.props.parent && <p className="saved-item__found-in">Found in: <a href={this.props.parentRef}>{this.props.parent}</a></p>}
          {this.props.lastRequested && <p className="saved-item__last-requested">Last requested on: {this.props.lastRequested}</p>}
          <div className="saved-item__buttons">
            {this.props.online &&
              <Button
                label="View Online"
                className="btn btn--blue btn--sm"
                iconAfter="visibility" />}
            <Button
              label="Remove"
              className="btn btn--gray btn--sm"
              iconBefore="delete"
              onClick={() => this.props.onClick(this.props.groupUri, this.props.uri)} />
          </div>
        </div>
      </div>
    )
  }
}

SavedItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  parent: PropTypes.string,
  parentRef: PropTypes.string,
  lastRequested: PropTypes.instanceOf(Date),
  online: PropTypes.bool
}

class SavedItemGroup extends Component {
  constructor(props) {
    super(props);
    const items = this.props.items
    console.log(this.props.items)
    this.listItems = items.map((item, index) =>
      <SavedItem
        key={index}
        title={item.title}
        date={item.date}
        description={item.description}
        parent={item.parent}
        parentRef={item.parentRef}
        lastRequested={item.lastRequested}
        online={item.online}
        groupUri={this.props.groupUri}
        uri={item.uri}
        onClick={this.props.removeItem} />
    );
  }
  render() {
    return (
      <div className="saved-items__item-group">
        <h2 className="item-group__title">{this.props.title}</h2>
        <div className="item-group__items">
          {this.listItems}
        </div>
      </div>
    )
  }
}

SavedItemGroup.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}


class SavedItemList extends Component {
  groupItems = items => {
    return items.length ? (items.map((item) =>
      <SavedItemGroup
        key={item.title}
        title={item.title}
        items={item.items}
        groupUri={item.uri}
        removeItem={this.props.removeItem} />
    )) : (<p className="saved-items__empty">No saved items.</p>)
  }
  render() {
    return (
      <div className="saved-items">
        {this.props.isLoading ? <p className="saved-items__loading">Loading...</p> : this.groupItems(this.props.items)}
      </div>
    )
  }
}

SavedItemList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
}

export default SavedItemList;
