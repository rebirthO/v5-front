import { convertCamelCase } from '../../packages/utils'
import { join } from 'path'
import { renderToFile, writeToFile } from '../utils'

export async function generateComponent(name: string) {
  if (!name) {
    throw new Error('Please specify the component name.')
  }
  const componentName = convertCamelCase(name, true)
  const componentDir = join(__dirname, '../../packages/components/src', componentName)
  await renderToFile(join(componentDir, 'index.tsx'), 'component.tpl', { name: componentName })
  await writeToFile(join(componentDir, 'index.css'), `/** ${componentName} */`)
  console.log(`Component: ${componentName} folder generated in ${componentDir} !`)
}