const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
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
  
  // Replace all known \ufffd (replacement character) corruptions
  content = content.replace(/X\ufffdcara/g, 'Xícara');
  content = content.replace(/caf\ufffd/g, 'café');
  content = content.replace(/Caf\ufffd/g, 'Café');
  content = content.replace(/prest\ufffdgio/g, 'prestígio');
  content = content.replace(/neg\ufffdcios/g, 'negócios');
  content = content.replace(/milim\ufffdtrico/g, 'milimétrico');
  content = content.replace(/Inesquec\ufffdveis/g, 'Inesquecíveis');
  content = content.replace(/Experi\ufffdncia/g, 'Experiência');
  content = content.replace(/EXPERI\ufffdNCIA/g, 'EXPERIÊNCIA');
  content = content.replace(/m\ufffdxima/g, 'máxima');
  content = content.replace(/t\ufffdcnico/g, 'técnico');
  content = content.replace(/estrat\ufffdgicas/g, 'estratégicas');
  content = content.replace(/valoriza\ufffd\ufffdo/g, 'valorização');
  content = content.replace(/valoriza\ufffdo/g, 'valorização');
  content = content.replace(/Vis\ufffd\ufffdo/g, 'Visão');
  content = content.replace(/Vis\ufffdo/g, 'Visão');
  content = content.replace(/gen\ufffdtica/g, 'genética');
  content = content.replace(/c\ufffdpula/g, 'cúpula');
  content = content.replace(/voc\ufffd/g, 'você');
  content = content.replace(/n\ufffd\ufffdo/g, 'não');
  content = content.replace(/n\ufffdo/g, 'não');
  content = content.replace(/est\ufffd/g, 'está');
  content = content.replace(/Conhe\ufffda/g, 'Conheça');
  content = content.replace(/RODAP\ufffd/g, 'RODAPÉ');
  content = content.replace(/P\ufffdGINA/g, 'PÁGINA');
  content = content.replace(/N\ufffdO/g, 'NÃO');
  content = content.replace(/navega\ufffd\ufffdo/g, 'navegação');
  content = content.replace(/navega\ufffdo/g, 'navegação');
  content = content.replace(/p\ufffdgina/g, 'página');
  content = content.replace(/padr\ufffd\ufffdo/g, 'padrão');
  content = content.replace(/padr\ufffdo/g, 'padrão');
  content = content.replace(/tamb\ufffdm/g, 'também');
  content = content.replace(/espa\ufffdo/g, 'espaço');
  content = content.replace(/informa\ufffd\ufffdes/g, 'informações');
  content = content.replace(/informa\ufffdes/g, 'informações');
  content = content.replace(/servi\ufffdos/g, 'serviços');
  content = content.replace(/Conte\ufffddo/g, 'Conteúdo');
  content = content.replace(/Pr\ufffdpria/g, 'Própria');
  content = content.replace(/atualiza\ufffd\ufffdo/g, 'atualização');
  content = content.replace(/atualiza\ufffdo/g, 'atualização');
  
  fs.writeFileSync(f, content, 'utf8');
});
console.log('Fixed all encodings with Node');
