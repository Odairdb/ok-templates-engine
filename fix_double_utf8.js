const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts') || dirFile.endsWith('.css')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
}

function fixEncoding(str) {
  // Explicitly replace common double encodings that powershell caused
  let fixed = str;
  const map = {
    'Ã¡': 'á',
    'Ã©': 'é',
    'Ã­': 'í',
    'Ã³': 'ó',
    'Ãº': 'ú',
    'Ã§': 'ç',
    'Ã£': 'ã',
    'Ãµ': 'õ',
    'Ã¢': 'â',
    'Ãª': 'ê',
    'Ã´': 'ô',
    'Ã€': 'À',
    'Ã\x81': 'Á',
    'Ã\x89': 'É',
    'Ã\x8D': 'Í',
    'Ã\x93': 'Ó',
    'Ã\x9A': 'Ú',
    'Ã\x87': 'Ç',
    'Ã\x83': 'Ã',
    'Ã\x95': 'Õ',
    'Ã\x82': 'Â',
    'Ã\x8A': 'Ê',
    'Ã\x94': 'Ô'
  };
  
  for (let [bad, good] of Object.entries(map)) {
    // Global replace all occurrences
    fixed = fixed.split(bad).join(good);
  }
  return fixed;
}

const files = walkSync('src');
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let fixed = fixEncoding(content);
  if (content !== fixed) {
    fs.writeFileSync(f, fixed, 'utf8');
    console.log('Fixed encoding in:', f);
  }
});
