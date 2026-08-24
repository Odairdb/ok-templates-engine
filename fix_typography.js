const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
}

const files = walkSync('src');

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let fixedContent = content;

  fixedContent = fixedContent.replace(/â€“/g, '–')
                             .replace(/â€”/g, '—')
                             .replace(/â€œ/g, '“')
                             .replace(/â€/g, '”')
                             .replace(/â€˜/g, '‘')
                             .replace(/â€™/g, '’')
                             .replace(/â€¢/g, '•');

  if (content !== fixedContent) {
    fs.writeFileSync(f, fixedContent, 'utf8');
    console.log('Fixed typographics encoding in:', f);
  }
});
