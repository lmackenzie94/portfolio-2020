### Sanity Studio (https://luke.sanity.studio/desk)

- This is our backend (i.e. data)
- Run <code>sanity init</code> to setup a new project
- Created a new schema, 'project.js'
- All Sanity scheme types: https://www.sanity.io/docs/reference/schema-types
- To deploy, <code>sanity deploy</code>
- Manage.sanity.io (invite people to project - can make changes simultaneously)

- To prevent GraphQL from throwing errors if you leave a schema field blank in your query:
- <code>sanity graphql deploy</code> - deploys a graphQL schema for this dataset
- this allows Gatsby to introspect 'types' that are available
- https://uh140dpg.api.sanity.io/v1/graphql/production/default

- More to check out: https://www.sanity.io/docs/content-studio/structure-builder (allows for tons of customization)
