
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/anetabtc-landing/blog',
    component: ComponentCreator('/anetabtc-landing/blog','60c'),
    exact: true
  },
  {
    path: '/anetabtc-landing/blog/archive',
    component: ComponentCreator('/anetabtc-landing/blog/archive','e10'),
    exact: true
  },
  {
    path: '/anetabtc-landing/blog/first-blog-post',
    component: ComponentCreator('/anetabtc-landing/blog/first-blog-post','15c'),
    exact: true
  },
  {
    path: '/anetabtc-landing/blog/long-blog-post',
    component: ComponentCreator('/anetabtc-landing/blog/long-blog-post','9f9'),
    exact: true
  },
  {
    path: '/anetabtc-landing/blog/mdx-blog-post',
    component: ComponentCreator('/anetabtc-landing/blog/mdx-blog-post','90f'),
    exact: true
  },
  {
    path: '/anetabtc-landing/blog/tags',
    component: ComponentCreator('/anetabtc-landing/blog/tags','fc6'),
    exact: true
  },
  {
    path: '/anetabtc-landing/blog/tags/docusaurus',
    component: ComponentCreator('/anetabtc-landing/blog/tags/docusaurus','3e2'),
    exact: true
  },
  {
    path: '/anetabtc-landing/blog/tags/facebook',
    component: ComponentCreator('/anetabtc-landing/blog/tags/facebook','d71'),
    exact: true
  },
  {
    path: '/anetabtc-landing/blog/tags/hello',
    component: ComponentCreator('/anetabtc-landing/blog/tags/hello','45f'),
    exact: true
  },
  {
    path: '/anetabtc-landing/blog/tags/hola',
    component: ComponentCreator('/anetabtc-landing/blog/tags/hola','701'),
    exact: true
  },
  {
    path: '/anetabtc-landing/blog/welcome',
    component: ComponentCreator('/anetabtc-landing/blog/welcome','7f2'),
    exact: true
  },
  {
    path: '/anetabtc-landing/markdown-page',
    component: ComponentCreator('/anetabtc-landing/markdown-page','b70'),
    exact: true
  },
  {
    path: '/anetabtc-landing/team',
    component: ComponentCreator('/anetabtc-landing/team','104'),
    exact: true
  },
  {
    path: '/anetabtc-landing/docs',
    component: ComponentCreator('/anetabtc-landing/docs','8d2'),
    routes: [
      {
        path: '/anetabtc-landing/docs/intro',
        component: ComponentCreator('/anetabtc-landing/docs/intro','78b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/anetabtc-landing/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/anetabtc-landing/docs/tutorial-basics/congratulations','f01'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/anetabtc-landing/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/anetabtc-landing/docs/tutorial-basics/create-a-blog-post','775'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/anetabtc-landing/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/anetabtc-landing/docs/tutorial-basics/create-a-document','c67'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/anetabtc-landing/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/anetabtc-landing/docs/tutorial-basics/create-a-page','037'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/anetabtc-landing/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/anetabtc-landing/docs/tutorial-basics/deploy-your-site','f90'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/anetabtc-landing/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/anetabtc-landing/docs/tutorial-basics/markdown-features','38e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/anetabtc-landing/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/anetabtc-landing/docs/tutorial-extras/manage-docs-versions','96f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/anetabtc-landing/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/anetabtc-landing/docs/tutorial-extras/translate-your-site','f5a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/anetabtc-landing/',
    component: ComponentCreator('/anetabtc-landing/','002'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
