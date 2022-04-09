// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DulliAG Docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.dulliag.de',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/dag-logo.png',
  organizationName: 'DulliAG', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dulliag/documentation/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/dulliag/documentation/',
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
      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
      navbar: {
        title: 'DulliAG',
        logo: {
          alt: 'DulliAG Logo',
          src: 'img/dag-logo.png',
        },
        items: [
          { to: '/docs/intro', label: 'Documentation', position: 'left' },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/dulliag/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'General',
            items: [
              {
                label: 'Imprint',
                href: 'https://dulliag.de/Impressum',
              },
              {
                label: 'Privacy policy',
                href: 'https://dulliag.de/Datenschutz',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Status',
                href: 'https://status.dulliag.de/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/cfEucMa6',
              },
              {
                label: 'Steam Group',
                href: 'https://steamcommunity.com/groups/dulliag',
              },
            ],
          },
          {
            title: 'Partner',
            items: [],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'Drive',
                href: 'https://files.dulliag.de',
              },
              {
                label: 'Logs',
                href: 'https://logs.dulliag.de',
              },
              {
                label: 'URL shortener',
                href: 'https://url.dulliag.de',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DulliAG, Inc. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
