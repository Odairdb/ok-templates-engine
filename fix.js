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
  content = content.replace(/Marca Pr\ufffdpria/g, 'Marca Própria');
  content = content.replace(/atualiza\ufffdo/g, 'atualização');
  content = content.replace(/informa\ufffdes/g, 'informações');
  content = content.replace(/servi\ufffdos/g, 'serviços');
  content = content.replace(/Conte\ufffddo/g, 'Conteúdo');
  content = content.replace(/Pr\ufffdpria/g, 'Própria');
  fs.writeFileSync(f, content, 'utf8');
});
console.log('Fixed encoding with Node');
