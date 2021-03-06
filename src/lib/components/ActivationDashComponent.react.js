import 'katex/dist/katex.min.css';
import 'rc-slider/assets/index.css';
import './style.scss';

import PropTypes, {func} from 'prop-types';
import Slider, {Range} from 'rc-slider';
import React, {Component} from 'react';
import {InlineMath} from 'react-katex';

function create_dummy_values() {
  return Array.apply(null, new Array(10))
      .map(_ => Array.apply(null, new Array(10)).map(_ => Math.random()));
}

function create_dummy_labels_y(n) {
  return Array.apply(null, new Array(10))
      .map((_, i) => `\\frac{${i}+${n}}{${i + n}}`);
}

function create_dummy_labels_x(n) {
  return Array.apply(null, new Array(10))
      .map((_, i) => `\\frac{${[...Array(i + 1).keys()].join('+')}}{${i + n}}`);
}

function create_dummy_markings() {
  return [[3, 5], [2, 8]];
}

function encode_color(value, min, max, exponent) {
  const v = (value - min) / (max - min);
  // const n = (Math.exp(v) - 1) / (Math.exp(1) - 1)
  const n = Math.pow(v, exponent);
  const v1 = (n * 255).toFixed(2);
  // const v5 = (v * v * v * v * v * 255).toFixed(2);
  // const v3 = (v * v * v * 255).toFixed(2);
  return `rgb(${v1}, ${v1}, ${v1})`;
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
    this.state = {svg: {width: undefined, height: undefined}, colorScale: 1};
    this.cache = {values: null, indices: null};
  }

  attach_indices(array2d) {
    if (array2d === this.cache.values) return this.cache.indices;
    let all_tuples = [];
    const height = array2d.length;
    const width = array2d[0].length;
    for (let y = 0; y < height; ++y) {
      const row = array2d[y];
      for (let x = 0; x < width; ++x) {
        all_tuples.push([x, y, row[x]]);
      }
    }

    all_tuples.sort((a, b) => a[2] < b[2] ? 1 : -1);
    this.cache.indices =
        Array.apply(null, new Array(height))
            .map(_ => Array.apply(null, new Array(width)).map(_ => null));

    for (let n in all_tuples) {
      const [x, y, v] = all_tuples[n];
      this.cache.indices[y][x] = [n, v];
    }

    return this.cache.indices;
  }

  updateSize(element) {
    if (!element) return;
    const old = this.state.svg;
    if (old.width !== element.clientWidth ||
        old.height !== element.clientHeight) {
      this.setState(
          prevState => ({
            ...prevState,
            svg: {width: element.clientWidth, height: element.clientHeight}
          }));
    }
  }

  updateColorScale(value) {
    // console.info(value)
    if (this.state.colorScale !== value) {
      this.setState(prevState => ({...prevState, colorScale: value}));
    }
  }


  render() {
    let {id, xlabel, ylabel, values, markings, precision, data} = this.props;
    values = values || (data && data.values) || create_dummy_values();
    let x_label = xlabel || (data && data.xlabel) || create_dummy_labels_x(3);
    let y_label = ylabel || (data && data.ylabel) || create_dummy_labels_y(5);
    precision = precision || (data && data.precision) || 3;
    markings = markings || (data && data.markings) || create_dummy_markings();
    const {svg} = this.state;

    const min_value =
        values.reduce((p, v) => Math.min(p, ...v), Number.MAX_VALUE);
    const max_value =
        values.reduce((p, v) => Math.max(p, ...v), Number.MIN_VALUE);
    const WIDTH = svg.width || 100;
    const HEIGHT = svg.height || 100;
    const num_columns = values[0].length;
    const dx = WIDTH / num_columns;
    const dy = HEIGHT / values.length;

    const title = ([index, value]) => `${value.toFixed(precision)} \n#${index}`;

    const row = (values, i) => values.map(
        ([index, value], j) =>
            <rect key = {`${i}-${j}`} x = {(j * dx).toFixed(
                 2)} y = {(i * dy).toFixed(2)} width = {dx + 1.0} height =
                 {dy + 1.0} fill = {encode_color(
                     value, min_value, max_value, this.state.colorScale)}>
        <title>{title([index, value])}</title>
          </rect>);

    const Y_LABEL_WIDTH = -dx * 0.1;
    const indicted_values = this.attach_indices(values);
    const cells = indicted_values.map(row);
    x_label =
        x_label.map((l, i) => <div style = {
                      { right: `${(num_columns - i) * dx + Y_LABEL_WIDTH}px` }
                    } key = {i}><InlineMath math = {
                      l
                    } /></div>);

    y_label = y_label.map((l, i) => <div key = {i} style = {
                            {
                              top: `${dy * i + dy / 2}px`,
                                  bottom: `${HEIGHT - dy * i}px`
                            }
                          }><InlineMath math = {
                            l
                          } /></div>);

    const marking = ([x, y], i) =>
        <rect key = {i} x = {x* dx} y = {y* dy} width = {dx + 1} height =
             {dy + 1} className = {'marking'}>
        <title>{title(indicted_values[y][x])}</title></rect>;
    markings = markings.map(marking);


    return (
        <div id = {id} className = 'activation-dash'>
        <svg ref = {this.updateSize.bind(this)} preserveAspectRatio =
             'none' height = '100%'>{cells} {
            markings}</svg>
        <div className = {'y-label'}>{y_label}</div>
        <div className = {'x-label'}>{x_label}<
            /div>
        <div className={'side-menu'}>
            <Slider className={'color-scale'} vertical={true} onChange={this.updateColorScale.bind(this)} min={1} max={50}/>
        </div>
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
   * Number of digits to show
   */
  precision: PropTypes.number,

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
