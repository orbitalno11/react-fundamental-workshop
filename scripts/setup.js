var spawnSync = require('child_process').spawnSync

console.log('▶️  Starting workshop setup...')

var error = spawnSync('npx --version', {shell: true})
  .stderr.toString()
  .trim()
if (error) {
  console.error(
    '🚨  npx is not available on this computer. Please install npm@5.2.0 or greater',
  )
  throw error
}

var result = spawnSync(
  'npx "https://gist.github.com/DeathSy/d7a44168dc6cc2eb7a9576570b5ad7ff" -q',
  {stdio: 'inherit', shell: true},
)

if (result.status === 0) {
  console.log('✅  Workshop setup complete...')
} else {
  process.exit(result.status)
}

/*
eslint
  no-var: "off",
  "vars-on-top": "off",
*/
