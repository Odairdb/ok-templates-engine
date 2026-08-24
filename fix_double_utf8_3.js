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

  // Extremely broad and aggressive double-encoded fixes
  fixedContent = fixedContent.replace(/Ã¡/g, 'á')
                             .replace(/Ã©/g, 'é')
                             .replace(/Ã§/g, 'ç')
                             .replace(/Ã£/g, 'ã')
                             .replace(/ÃƒO/g, 'ÃO')
                             .replace(/Ãƒo/g, 'ão')
                             .replace(/Ãƒ/g, 'Ã')
                             .replace(/Ã³/g, 'ó')
                             .replace(/Ãº/g, 'ú')
                             .replace(/Ãµ/g, 'õ')
                             .replace(/Ãª/g, 'ê')
                             .replace(/Ã¢/g, 'â')
                             .replace(/Ã\xAD/g, 'í')
                             .replace(/Ã\xA0/g, 'à')
                             .replace(/Ã /g, 'à')
                             .replace(/Ã\x89/g, 'É')
                             .replace(/Ã\x81/g, 'Á')
                             .replace(/Ã\x8D/g, 'Í')
                             .replace(/Ã\x93/g, 'Ó')
                             .replace(/Ã\x9A/g, 'Ú')
                             .replace(/Ã\x87/g, 'Ç')
                             .replace(/Ã\x82/g, 'Â')
                             .replace(/Ã\x8A/g, 'Ê')
                             .replace(/Ã\x94/g, 'Ô')
                             .replace(/Ã\x95/g, 'Õ')
                             .replace(/Ã\x80/g, 'À');

  if (content !== fixedContent) {
    fs.writeFileSync(f, fixedContent, 'utf8');
    console.log('Fixed more encoding in:', f);
  }
});
