export default {
  widgets: [
    {
      name: 'google-analytics',
      layout: {
        width: 'large'
      },
      options: {
        title: 'Last 30 days',
        gaConfig: {
          reportType: 'ga',
          query: {
            dimensions: 'ga:date',
            metrics: 'ga:users, ga:sessions, ga:newUsers',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
          },
          chart: {
            type: 'LINE',
            options: {
              width: '100%'
            }
          }
        }
      }
    },
    {
      name: 'google-analytics',
      layout: {
        width: 'medium'
      },
      options: {
        title: 'World map',
        gaConfig: {
          reportType: 'ga',
          query: {
            dimensions: 'ga:country',
            metrics: 'ga:users',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
          },
          chart: {
            type: 'GEO',
            width: '100%'
          }
        }
      }
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify Deploys',
        sites: [
          // {
          //     title: 'Sanity Studio',
          //     apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
          //     buildHookId: 'xxxyyyxxxyyyyxxxyyy',
          //     name: 'sanity-gatsby-blog-20-studio',
          // },
          {
            title: 'Portfolio Site',
            apiId: '3684e916-4e5e-4bee-8e5d-59814fc182ed',
            buildHookId: '5d9b953b600c756c73096f30',
            name: 'my-sanity-portfolio'
          }
        ]
      }
    },
    {
      name: 'project-info'
    },
    {
      name: 'project-users'
    }
  ]
};
