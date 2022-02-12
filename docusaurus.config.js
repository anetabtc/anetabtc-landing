// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Decentralized, On Chain Wrapped Bitcoin',
  tagline: 'Fully On-chain Bitcoin on Ergo and Cardano.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'anetaBTC', // Usually your GitHub org/user name.
  projectName: 'anetaBTC', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'anetaBTC',
        logo: {
          alt: 'anetaBTC logo',
          src: 'img/anetaBTC.png',

        
        }	
        
        },
        colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        switchConfig: {
          darkIcon: '🥲',
          darkIconStyle: {
            marginLeft: '2px',
          }, 
          lightIcon: '🥲',
          lightIconStyle: {
            marginLeft: '1px',
          },
      },
    },
        
      


      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};





module.exports = config;
