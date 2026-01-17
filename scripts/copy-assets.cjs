const fs = require('fs');
const path = require('path');

(async function(){
  try{
    const scriptDir = __dirname; // .../react-site/scripts
    const projectRoot = path.resolve(scriptDir, '..', '..'); // workspace root
    const publicDir = path.resolve(scriptDir, '..', 'public');
    const assetsSrcDir = path.resolve(scriptDir, '..', 'src', 'assets');

    if(!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

    const exts = ['.png', '.jpg', '.jpeg', '.gif', '.pdf', '.svg', '.webp'];
    const copied = [];

    // copy files from workspace root (top-level)
    try{
      const files = await fs.promises.readdir(projectRoot);
      for(const f of files){
        const ext = path.extname(f).toLowerCase();
        if(exts.includes(ext)){
          const src = path.join(projectRoot, f);
          const dest = path.join(publicDir, f);
          try{ await fs.promises.copyFile(src, dest); copied.push(f);}catch(e){}
        }
      }
    }catch(e){ /* ignore */ }

    // copy everything from react-site/src/assets into public/assets
    if(fs.existsSync(assetsSrcDir)){
      const targetAssetsDir = path.join(publicDir, 'assets');
      await fs.promises.mkdir(targetAssetsDir, { recursive: true });
      const assetFiles = await fs.promises.readdir(assetsSrcDir);
      for(const f of assetFiles){
        const ext = path.extname(f).toLowerCase();
        if(exts.includes(ext)){
          const src = path.join(assetsSrcDir, f);
          const dest = path.join(targetAssetsDir, f);
          try{ await fs.promises.copyFile(src, dest); copied.push('assets/'+f);}catch(e){}
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
