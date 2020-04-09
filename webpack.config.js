const path = require('path');
const packagejson = require('./package.json');

const dashLibraryName = packagejson.name.replace(/-/g, '_');

module.exports = (env, argv) => {
  let mode;

  const overrides = module.exports || {};

  // if user specified mode flag take that value
  if (argv && argv.mode) {
    mode = argv.mode;
  }

  // else if configuration object is already set (module.exports) use that value
  else if (overrides.mode) {
    mode = overrides.mode;
  }

  // else take webpack default (production)
  else {
    mode = 'production';
  }

  let filename = (overrides.output || {}).filename;
  if (!filename) {
    const modeSuffix = mode === 'development' ? 'dev' : 'min';
    filename = `${dashLibraryName}.${modeSuffix}.js`;
  }

  const entry = overrides.entry || {main: './src/lib/index.js'};

  const devtool = overrides.devtool || 'source-map';

  const externals = ('externals' in overrides) ? overrides.externals : ({
    react: 'React',
    'react-dom': 'ReactDOM',
    'plotly.js': 'Plotly',
    'prop-types': 'PropTypes',
  });

  return {
    mode, entry, output: {
      path: path.resolve(__dirname, dashLibraryName),
      filename,
      library: dashLibraryName,
      libraryTarget: 'window',
    },
        devtool, externals, module: {
          rules:
              [
                {
                  test: /\.jsx?$/,
                  exclude: /node_modules/,
                  use: {
                    loader: 'babel-loader',
                  },
                },
                {
                  test: /\.s?css$/,
                  use: [
                    {loader: 'style-loader', options: {insertAt: 'top'}},
                    'css-loader',
                    'sass-loader',
                  ],
                },
                {
                  test:
                      /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                  use: [{loader: 'url-loader'}]
                }
              ],
        },
  }
};
