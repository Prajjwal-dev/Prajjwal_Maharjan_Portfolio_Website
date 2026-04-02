// utils/preloadAssets.js

// List of all images to preload
const imagesToPreload = [
  '/assets/prajjwal.jpg',
  '/assets/Gemini.PNG',
  '/assets/copilot.PNG',
  '/assets/1.png',
  '/assets/hamrobazaar.PNG',
  '/assets/agile_scrum_master.PNG',
  '/assets/AI.PNG',
  '/assets/digital_transformation.PNG',
  '/assets/azure_fundamental.PNG',
  '/assets/innovating_with_google_cloud_AI.PNG',
  '/assets/angular_basics.PNG',
  '/assets/power_bi_for_beginners.PNG',
  '/assets/deep_learning.PNG',
  '/assets/AWS.PNG',
  '/assets/figma.PNG',
  '/assets/SEO.PNG',
  '/assets/python_for_begineers.PNG',
  '/assets/reactJS.PNG',
  '/assets/IoT.PNG',
  '/assets/kali_linux.PNG',
  '/assets/blockchain.PNG',
  '/assets/data_mining.PNG',
  '/assets/cryptography.PNG',
  '/assets/machine_learning.PNG',
  '/assets/full_stack.PNG',
  '/assets/generative_ai.PNG',
  '/assets/GIT_training.PNG',
  '/assets/tensorflow.PNG',
  '/assets/mongodb.PNG',
  '/assets/php.PNG',
  '/assets/aws_technical_essential.PNG',
  '/assets/databricks_business_leaders.PNG'
]

// Preload images function
export const preloadImages = () => {
  const promises = imagesToPreload.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(src)
      img.onerror = () => reject(src)
      img.src = src
    })
  })
  
  return Promise.all(promises)
}

// Preload all assets
export const preloadAllAssets = async () => {
  try {
    await preloadImages()
    console.log('All assets preloaded successfully')
    return true
  } catch (error) {
    console.warn('Some assets failed to load:', error)
    return false
  }
}