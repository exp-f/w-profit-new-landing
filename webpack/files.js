module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: {
            loader: 'pug-loader',
            options: {
              pretty: true
            }
          }
        },
        {
          test: /\.(jpeg|jpg|png|ico|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          },
        },
        {
          test: /\.(mp4)$/i,
          loader: 'file-loader',
          options: {
            name: 'media/[name].[ext]'
          },
        },
        {
          test: /\.json$/i,
          loader: 'file-loader',
          options: {
            name: 'js/json/[name].[ext]'
          }
        },
        {
          test: /\.php$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        },
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/i,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          }
        }
      ],
    },
  };
};