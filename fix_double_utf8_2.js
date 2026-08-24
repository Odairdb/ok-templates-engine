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

const files = walkSync('src/components/mauro');
files.push(...walkSync('src/app/mauro'));

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let fixedContent = content;
  
  try {
      // Decode double encoded UTF-8
      // Only do this if it actually contains Ã
      if (content.includes('Ã')) {
          fixedContent = decodeURIComponent(escape(content));
      }
  } catch(e) {
      // if it fails, ignore
  }

  // Also replace any lingering single bad chars that didn't get caught
  fixedContent = fixedContent.replace(/Ã¡/g, 'á')
                             .replace(/Ã©/g, 'é')
                             .replace(/Ã§/g, 'ç')
                             .replace(/Ã£/g, 'ã')
                             .replace(/Ã³/g, 'ó')
                             .replace(/Ãº/g, 'ú')
                             .replace(/Ãµ/g, 'õ')
                             .replace(/Ãª/g, 'ê')
                             .replace(/Ã¢/g, 'â')
                             .replace(/Ã\xAD/g, 'í') // correct mapping for í
                             .replace(/Ã\x89/g, 'É')
                             .replace(/Ã\x81/g, 'Á')
                             .replace(/Ã\x8D/g, 'Í')
                             .replace(/Ã\x93/g, 'Ó')
                             .replace(/Ã\x9A/g, 'Ú')
                             .replace(/Ã\x87/g, 'Ç');
  
  if (content !== fixedContent) {
    fs.writeFileSync(f, fixedContent, 'utf8');
    console.log('Fixed more encoding in:', f);
  }
});
