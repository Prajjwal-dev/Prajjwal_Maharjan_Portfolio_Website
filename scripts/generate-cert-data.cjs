const fs = require('fs');
const path = require('path');

(async function(){
  try{
    const scriptDir = __dirname; // .../react-site/scripts
    const projectRoot = path.resolve(scriptDir, '..', '..');
    const certHtmlPath = path.join(projectRoot, 'certificate.html');
    if(!fs.existsSync(certHtmlPath)){
      console.error('certificate.html not found at', certHtmlPath);
      process.exit(0);
    }

    const html = await fs.promises.readFile(certHtmlPath, 'utf8');

    // Regex to capture img src, title in <h3>, and href from the following <a>
    const re = /<img[^>]*src=["']([^"']+)["'][^>]*>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<a[^>]*href=["']([^"']+)["'][^>]*>/gi;
    const items = [];
    let m;
    while((m = re.exec(html)) !== null){
      let img = m[1].trim();
      let title = m[2].replace(/<[^>]+>/g,'').trim();
      let file = m[3].trim();
      // normalize and map to public assets folder
      const imgBase = path.basename(img);
      const fileBase = path.basename(file);
      img = '/assets/' + imgBase;
      file = '/assets/' + fileBase;
      items.push({ img, title, file });
    }

    const outPath = path.resolve(scriptDir, '..', 'src', 'data', 'certificates.js');
    const header = '// Auto-generated from certificate.html — edit source file to update\nexport const certificates = ';
    const content = header + JSON.stringify(items, null, 2) + ';\n';
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true });
    await fs.promises.writeFile(outPath, content, 'utf8');
    console.log('Wrote', items.length, 'certificate entries to', outPath);
  }catch(err){
    console.error('Error generating certificate data:', err);
    process.exit(1);
  }
})();
