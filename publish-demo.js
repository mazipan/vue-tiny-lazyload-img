const ghpages = require('gh-pages')
const BRANCH = 'gh-pages'
const TODAY = new Date().toLocaleString()

console.log(`start publishing to ${BRANCH}`)

ghpages.publish('dist-demo', {
  branch: BRANCH,
  message: `Merge to ${BRANCH} ==> ${TODAY}`
}, () => {
  console.log(`done publishing to ${BRANCH}`)
})
