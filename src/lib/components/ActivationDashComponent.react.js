import PropTypes from 'prop-types';
import {intersection} from 'ramda';
import React, {Component} from 'react';


function create_dummy_values() {
  return Array.apply(null, new Array(10))
      .map(_ => Array.apply(null, new Array(10)).map(_ => Math.random()))
}

function encode_color(value, min, max) {
  const v = (value - min) / (max - min) * 255;
  return `rgb(${v}, ${v}, ${v})`
}
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class ActivationDashComponent extends Component {
  render() {
    let {id, label, values} = this.props;
    values = values || create_dummy_values();

    const WIDTH = 100;
    const HEIGHT = 100;
    const dx = WIDTH / values[0].length;
    const dy = HEIGHT / values.length;

    const row = (values, i) => values.map(
        (value, j) =>
            <rect key = {`${i}-${j}`} x = {j* dx} y = {i* dy} width =
                 {dx} height = {dy} fill = {encode_color(value, 0, 1)}>
        <title>{value}</title>
          </rect>);

    const cells = values.map(row)


    return (<div id = {id}>
            <svg width = '100%' height = '100%' viewBox = {
                 `0 0 ${WIDTH} ${HEIGHT}`}>{cells}</svg>
        </div>);
  }
}

ActivationDashComponent.defaultProps = {};

ActivationDashComponent.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  label: PropTypes.string.isRequired,

  /**
   * The value displayed in the input.
   */
  values: PropTypes.array,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func
};
