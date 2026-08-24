const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.tsx')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
}

const files = walkSync('src/app/mauro');
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/<div dangerouslySetInnerHTML=\{\{ __html: [\s\S]*? \}\} \/>/g, '<p>COLE SEU TEXTO AQUI</p>');
  fs.writeFileSync(f, content, 'utf8');
});
console.log('Cleaned up placeholders');
