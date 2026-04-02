const fs = require('fs');
const path = require('path');

(async function(){
  try{
    const scriptDir = __dirname; // .../react-site/scripts
    const projectRoot = path.resolve(scriptDir, '..', '..'); // workspace root (where original assets are)
    const publicDir = path.resolve(scriptDir, '..', 'public');

    if(!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

    const exts = ['.png', '.jpg', '.jpeg', '.gif', '.pdf', '.svg', '.webp'];
    const files = await fs.promises.readdir(projectRoot);

    const copied = [];
    for(const f of files){
      const ext = path.extname(f).toLowerCase();
      if(exts.includes(ext)){
        const src = path.join(projectRoot, f);
        const dest = path.join(publicDir, f);
        try{
          await fs.promises.copyFile(src, dest);
          copied.push(f);
        }catch(err){
          // skip errors copying some files
        }
      }
    }

    console.log('Copied', copied.length, 'assets to', publicDir);
    if(copied.length) console.log(copied.join('\n'));
    else console.log('No matching assets found in project root.');
  }catch(err){
    console.error('Error copying assets:', err);
    process.exit(1);
  }
})();
