export default {
  widgets: [
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
                  buildHookId: '601a160a184a075a293f29a4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-cjgbxas5',
                  apiId: '685947ee-e1ef-4702-a89a-a272e8062287'
                },
                {
                  buildHookId: '601a160a6a29ef5ad3d0bf22',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-ocrgvjzo',
                  apiId: '0938617a-2c39-4c1f-a702-6039176fe7f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamesrplee/sanity-kitchen-sink-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-ocrgvjzo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
