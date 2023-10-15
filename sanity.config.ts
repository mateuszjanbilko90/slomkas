// Single workspace configuration

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import project from './sanity/schemas/project-schema'
import schemas from './sanity/schemas'
// import {schemaTypes} from './schemas'

export default defineConfig({
  projectId: '436mrmc9',
	dataset: 'production',
    title: 'Slomki',
    apiVersion: '2023-24-09',
    basePath: '/admin',
  plugins: [deskTool()],


  schema: {
	  types: schemas
  },
})