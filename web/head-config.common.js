module.exports = {
  link: [
    {rel: 'stylesheet', href: 'https://unpkg.com/@angular/material/core/theming/prebuilt/indigo-pink.css'},
    {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},

    {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/icon/favicon-32x32.png'},
    {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/assets/icon/favicon-96x96.png'},
    {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icon/favicon-16x16.png'},

    {rel: 'manifest', href: '/assets/manifest.json'}
  ],
  meta: [
    {name: 'msapplication-TileColor', content: '#00bcd4'},
    {name: 'msapplication-TileImage', content: '/assets/icon/ms-icon-144x144.png', '=content': true},
    {name: 'theme-color', content: '#00bcd4'}
  ]
};
