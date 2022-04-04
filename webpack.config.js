// lidar com caminhos, pois pode ter diferenças entre browsers
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

// NODE_ENV identifica ambientes
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  // falar qual o arquivo principal
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    hot: true
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  // remove tudo oq é falso permitindo adicionar plugins com condições

  // indica como que deve lidar com extensões de arquivos diferentes
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        // o node modules renderiza automaticamente, exclui pq estamos fazendo isso com essa biblioteca babel
        exclude: /node_modules/,
        // integração do babel com o webpack. Converter o arquivo de maneira q o browser entenda
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      // nova rule para arquivos css
      {
        test: /\.scss$/,
        exclude: /node-modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
