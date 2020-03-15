const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@font-family': `'Silka', 'Open Sans', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
                        'Microsoft YaHei', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji',
                        'Segoe UI Emoji', 'Segoe UI Symbol'`,
      '@baseFactor': '10px',
      // vertical paddings
      '@padding-lg': '@baseFactor * 3', // containers
      '@padding-md': '@baseFactor * 2',// small containers and buttons
      '@padding-sm': '@baseFactor * 1.5', // Form controls and items
      '@padding-xs': '@baseFactor', // small items


      '@body-background': '#192027',
      '@text-color': '#e5e5e5',
      '@input-border-radius-base': '100px',
      '@btn-font-size-sm': '@baseFactor * 1.2',

      '@primary-color': '#2b9dc3',
      '@error-color': '#f23051',
      '@success-color': '#36b35f',

      '@btn-danger-bg': '#f23051',
      '@btn-danger-border': '#f23051',

      '@layout-body-background': '#192027',
      '@layout-header-background': '#192027',
      '@drawer-bg':'#192027'
    },
  }),
);
