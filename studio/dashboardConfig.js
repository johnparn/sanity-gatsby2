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
                  buildHookId: '61507c4ba6dec049c4c4cfc0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-2-studio',
                  apiId: '9be23637-70e7-4906-975c-66b8bb1f0b04'
                },
                {
                  buildHookId: '61507c4ba6dec049c4c4cfbf',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-2',
                  apiId: '9033fb1b-1903-458d-8954-f3c516475ae3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/johnparn/sanity-gatsby2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-2.netlify.app',
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
