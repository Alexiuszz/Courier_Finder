const args = ['start'];
const opts = { stdio: 'inherit', cwd: 'auth-system', shell: true };
require('child_process').spawn('npm', args, opts);