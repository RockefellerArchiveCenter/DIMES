import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.scss"

const AgentAttribute = ({ label, note, value }) => (
  <div className={note ? "agent-attribute--full-width" : "agent-attribute"}>
    <p className="agent-attribute__label">{label}</p>
    <p className="agent-attribute__value">{value}</p>
  </div>)

class AgentAttributeList extends Component {
  constructor(props) {
    super(props);
    this.listItems = this.props.items.map((item, index) =>
      <AgentAttribute
        key={index}
        label={item.label}
        value={item.value}
        note={item.note} />
    );
  }
  render() {
    return (
      <div className="agent__attributes">
        {this.listItems}
      </div>
    )
  }
}

AgentAttribute.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default AgentAttributeList;
