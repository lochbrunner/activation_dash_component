import 'katex/dist/katex.min.css';
import './style.scss';

import PropTypes, {func} from 'prop-types';
import React, {Component} from 'react';
import {InlineMath} from 'react-katex';

function create_dummy_values() {
  return Array.apply(null, new Array(10))
      .map(_ => Array.apply(null, new Array(10)).map(_ => Math.random()));
}

function create_dummy_labels(n) {
  return Array.apply(null, new Array(10))
      .map((_, i) => `\\frac{${i}+${n}}{${i + n}}`);
}

function create_dummy_markings() {
  return [[3, 5], [2, 8]];
}

function encode_color(value, min, max) {
  const v = (value - min) / (max - min) * 255;
  const s = v.toFixed(2);
  return `rgb(${s}, ${s}, ${s})`;
}
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class ActivationDashComponent extends Component {
  constructor(props) {
    super(props);
    this.state({svg: {width: undefined, height: undefined}});
  }



  render() {
    let {id, xlabel, ylabel, values, markings, data} = this.props;
    values = values || (data && data.values) || create_dummy_values();
    xlabel = xlabel || (data && data.xlabel) || create_dummy_labels(3);
    ylabel = ylabel || (data && data.ylabel) || create_dummy_labels(5);
    markings = markings || (data && data.markings) || create_dummy_markings();

    const min_value =
        values.reduce((p, v) => Math.min(p, ...v), Number.MAX_VALUE);
    const max_value =
        values.reduce((p, v) => Math.max(p, ...v), Number.MIN_VALUE);
    console.info(`min: ${min_value} max: ${max_value}`);
    const WIDTH = 100;
    const HEIGHT = 100;
    const dx = WIDTH / values[0].length;
    const dy = HEIGHT / values.length;

    const row = (values, i) => values.map(
        (value, j) =>
            <rect key = {`${i}-${j}`} x = {j* dx} y = {i* dy} width =
                 {dx + 0.1} height = {dy + 0.1} fill = {encode_color(
                     value, min_value, max_value)}>
        <title>{value}</title>
          </rect>);

    const cells = values.map(row);
    ylabel = ylabel.map((l, i) => <div key = {i}><InlineMath math = {
                          l
                        } /></div>);

    xlabel = xlabel.map((l, i) => <div key = {i}><InlineMath math = {
                          l
                        } /></div>);

    const marking = ([x, y]) =>
        <rect x = {x* dx} y = {y* dy}
          width = {dx +0.1} height = {dy +0.1} className={'marking'} />;
    markings = markings.map(marking);


    return (
        <div id = {id} className = 'activation-dash'>
        <div className = {'x-label'}>{xlabel}</div>
        <svg preserveAspectRatio = 'none' width = '100%' height =
             '100%' viewBox = {`0 0 ${WIDTH} ${HEIGHT}`}>{
            cells}
            {markings}</svg>
        <div className = {'y-label'}>{ylabel}</div>
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
   * LaTeX labels for x axis
   */
  xlabel: PropTypes.array,
  /**
   * LaTeX labels for y axis
   */
  ylabel: PropTypes.array,

  /**
   * The value displayed in the input.
   */
  values: PropTypes.array,

  /**
   * Cell to be marked
   */
  markings: PropTypes.array,

  /**
   * All props combined in one dictionary
   */
  data: PropTypes.object,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func
};
