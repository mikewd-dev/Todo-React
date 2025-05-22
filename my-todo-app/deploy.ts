import { exec } from 'node:child_process';
import https from 'node:https';

const buildHookUrl = 'https://api.netlify.com/build_hooks/682f56498875354818453fb3';

exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error('Build failed:', stderr);
    return;
  }

  console.log('Build succeeded:\n', stdout);

  const req = https.request(buildHookUrl, { method: 'POST' }, (res) => {
    console.log('🚀 Netlify build hook response:', res.statusCode);
  });

  req.on('error', (e) => {
    console.error('Netlify build hook error:', e);
  });

  req.end();
});
