export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61b8609557fe57e008b2524f',
                  title: 'Sanity Studio',
                  name: 'sanity-portfolio-studio-8bukrq7o',
                  apiId: '5d8f363f-5de1-4ec7-a344-38eaad15bd74'
                },
                {
                  buildHookId: '61b860953115cceb1e647ba2',
                  title: 'Portfolio Website',
                  name: 'sanity-portfolio-web-jbpum8hm',
                  apiId: '33c59302-b44a-49e1-ab1e-6b94d0a8a5ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DonevanGonzales/sanity-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-portfolio-web-jbpum8hm.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
