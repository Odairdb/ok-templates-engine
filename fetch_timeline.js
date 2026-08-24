const https = require('https');

https.get('https://maurobenedetti.com.br/linha-do-tempo/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    let images = [];
    while ((match = imgRegex.exec(data)) !== null) {
      if (match[1].includes('uploads') && !match[1].includes('logo')) {
        images.push(match[1]);
      }
    }
    console.log(Array.from(new Set(images)));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
