import fs from 'fs'
import path from 'path'

const htmlFile = path.join('dist', 'index.html')
const content = fs.readFileSync(htmlFile, 'utf8')

const updatedContent = content.replace(
  '<script type="module" src="./js/main.js"></script>',
  '<script src="./js/bundle.min.js"></script>',
)

fs.writeFileSync(htmlFile, updatedContent)
