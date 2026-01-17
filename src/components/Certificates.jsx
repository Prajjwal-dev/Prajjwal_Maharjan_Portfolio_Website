import React, {useState, useMemo} from 'react'

// Inlined certificate data migrated from certificate.html
const certificates = [
  { img: '/assets/Gemini.PNG', title: 'Gemini For Google Workspace', file: '/assets/Prajjwal_Maharjan_Gemini_for_Google_Workspace.pdf' },
  { img: '/assets/copilot.PNG', title: 'Github Copilot Fundamentals', file: '/assets/Prajjwal_Maharjan_GitHub_Copilot_Fundamentals.pdf' },
  { img: '/assets/1.png', title: 'Participation of Competitive Coding in KEC', file: '/assets/1.png' },
  { img: '/assets/hamrobazaar.PNG', title: 'Participation in Hamrobazaar Student Partnership Program', file: '/assets/HamroBazaar Programme Certificate.pdf' },
  { img: '/assets/digital_transformation.PNG', title: 'Digital Transformation For Leaders', file: '/assets/Prajjwal Maharjan_Digital_Transformation_For leaders.pdf' },
  { img: '/assets/agile_scrum.PNG', title: 'Agile Scrum Foundations', file: '/assets/Prajjwal_Maharjan_Agile_Scrum_Foundation.pdf' },
  { img: '/assets/AI.PNG', title: 'AI Certificate', file: '/assets/Prajjwal_Maharjan_AI Certificate.pdf' },
  { img: '/assets/google_slides.PNG', title: 'Google Slides', file: '/assets/Prajjwal_Maharjan_Google_Slides.pdf' },
  { img: '/assets/agile_scrum_master.PNG', title: 'Agile Scrum Master', file: '/assets/Prajjwal_Maharjan_Agile_Scrum_Master.pdf' },
  { img: '/assets/azure_fundamental.PNG', title: 'Azure Fundamentals', file: '/assets/Prajjwal_Maharjan_Azure_Fundamentals.pdf' },
  { img: '/assets/tutorial_on_business.PNG', title: 'Basic Tutorial on Business', file: '/assets/Prajjwal_Maharjan_Basics_Tutorial_on_Business.pdf' },
  { img: '/assets/business_analytics_with_excel.PNG', title: 'Business Analytics With Excel', file: '/assets/Prajjwal_Maharjan_Business_Analytics_with_Excel.pdf' },
  { img: '/assets/capm.PNG', title: 'CAPM Certification Courses', file: '/assets/Prajjwal_Maharjan_CAPM_Certificcation_Course.pdf' },
  { img: '/assets/digital_marketing_tools_and_techniques.PNG', title: 'Digital Marketing Tools and Techniques', file: '/assets/Prajjwal_Maharjan_Digital_Marketing_Tools_and_Techniques.pdf' },
  { img: '/assets/innovating_with_google_cloud_AI.PNG', title: 'Innovating With Google Cloud AI', file: '/assets/Prajjwal_Maharjan_Innovating_with_Google_Cloud_AI.pdf' },
  { img: '/assets/angular_basics.PNG', title: 'Angular Basics', file: '/assets/Prajjwal_Maharjan_Angular_Basics.pdf' },
  { img: '/assets/introduction_to_google_cloud_platform.PNG', title: 'Introduction to Google Cloud Platform', file: '/assets/Prajjwal_Maharjan_Introduction_to_google_cloud_platforms.pdf' },
  { img: '/assets/microsoft_copilot_studio.PNG', title: 'Microsoft Copilot Studio', file: '/assets/Prajjwal_Maharjan_Microsoft_Copilot_Studio.pdf' },
  { img: '/assets/power_bi_for_beginners.PNG', title: 'Power BI For Beginners', file: '/assets/Prajjwal_maharjan_Power_BI_Begineer.pdf' },
  { img: '/assets/deep_learning.PNG', title: 'Deep Learning', file: '/assets/Prajjwal_Maharjan_Deep_Learning.pdf' },
  { img: '/assets/AWS.PNG', title: 'Getting Started With AWS', file: '/assets/Prajjwal_Maharjan_Getting_Started_with_AWS.pdf' },
  { img: '/assets/figma.PNG', title: 'Introduction to Figma', file: '/assets/Prajjwal_Maharjan_Introduction_to_Figma_Course.pdf' },
  { img: '/assets/finance.PNG', title: 'Introduction to Basics of Finance', file: '/assets/Prajjwal_Maharjan_Introduction_to_Finance.pdf' },
  { img: '/assets/SEO.PNG', title: 'Introduction to SEO', file: '/assets/Prajjwal_Maharjan_Introduction_to_SEO.pdf' },
  { img: '/assets/python_for_begineers.PNG', title: 'Python for Beginners', file: '/assets/Prajjwal_Maharjan_Python_for_begineers.pdf' },
  { img: '/assets/reactJS.PNG', title: 'ReactJS for Beginners', file: '/assets/Prajjwal_Maharjan_ReactJS_for_Begineers.pdf' },
  { img: '/assets/digital_security.PNG', title: 'Digital Security Fundamentals', file: '/assets/Prajjwal_Maharjan_Digital_Security_Fundamental_Certificate.pdf' },
  { img: '/assets/affiliate_marketing.PNG', title: 'Introduction to Affiliate Marketing for Beginners', file: '/assets/Prajjwal_Maharjan_Introduction_to_Affiliate_Marketing_for_begineers.pdf' },
  { img: '/assets/cyber_security.PNG', title: 'Introduction to Cyber Security', file: '/assets/Prajjwal_Maharjan_Introduction_to_Cyber_Security.pdf' },
  { img: '/assets/data_mining.PNG', title: 'Introduction to Data Mining Course', file: '/assets/Prajjwal_Maharjan_Introduction_to_Data_Mining_Course.pdf' },
  { img: '/assets/IoT.PNG', title: 'Introduction to IoT', file: '/assets/Prajjwal_Maharjan_Introduction_to_IoT.pdf' },
  { img: '/assets/kali_linux.PNG', title: 'Introduction to Kali Linux Basics', file: '/assets/Prajjwal_maharjan_Introduction_to_Kali_linux.pdf' },
  { img: '/assets/PM101.PNG', title: 'Project Management 101: PMP Certification Training', file: '/assets/Prajjwal_Maharjan_Project_Management_101.pdf' },
  { img: '/assets/blockchain.PNG', title: 'Blockchain Developer Training', file: '/assets/Prajjwal_Mahrarjan_Blockchain_developer_training.pdf' },
  { img: '/assets/facebook_marketing.PNG', title: 'Facebook Marketing and Advertising', file: '/assets/Prajjwal_maharjan_Facebook_marketing_and_advertising.pdf' },
  { img: '/assets/google_sheet.PNG', title: 'Google Sheets', file: '/assets/Prajjwal_Maharjan_Google_Sheet.pdf' },
  { img: '/assets/cloud_computing.PNG', title: 'Introduction to Cloud Computing', file: '/assets/Prajjwal_Maharjan_Introduction_to_Cloud_Computing.pdf' },
  { img: '/assets/digital_marketing.PNG', title: 'Introduction to Digital Marketing Fundamental Course', file: '/assets/Prajjwal_Maharjan_Introduction_to_Digital_Marketing_Course.pdf' },
  { img: '/assets/cryptography.PNG', title: 'Introduction to Cryptography for Beginners', file: '/assets/Prajjwal_Maharjan_Introduction_to_Cryptography_for_Begineers.pdf' },
  { img: '/assets/learning.PNG', title: 'Introduction to Supervised and Unsupervised Machine Learning', file: '/assets/Prajjwal_Maharjan_Introduction_to_Supervised_and_Unsupervised_Learning.pdf' },
  { img: '/assets/machine_learning.PNG', title: 'Machine Learning Using Python', file: '/assets/Prajjwal_Maharjan_Machine_learning_using_Python.pdf' },
  { img: '/assets/certificate.PNG', title: 'Ethical Hacking 101', file: '/assets/certificate.PNG' },
  { img: '/assets/digital_disruption.PNG', title: 'Digital Disruption and Transformation Strategy', file: '/assets/Prajjwal_Maharjan_digital_disruption_and_transformation-management].pdf' },
  { img: '/assets/JIRA.PNG', title: 'Introduction to JIRA', file: '/assets/Prajjwal_Maharjan_Inroduction_to_JIRA.pdf' },
  { img: '/assets/CBAP.PNG', title: 'Introduction to CBAP', file: '/assets/Prajjwal_Maharjan_Introduction_to_CBAP.pdf' },
  { img: '/assets/cloud_security.PNG', title: 'Introduction to Cloud Security', file: '/assets/Prajjwal_Maharjan_Introduction_to_Cloud_Security.pdf' },
  { img: '/assets/data_analytics.PNG', title: 'Introduction to Data Analytics', file: '/assets/Prajjwal_Maharjan_Introduction_to_Data_Analytics.pdf' },
  { img: '/assets/data_science.PNG', title: 'Introduction to Data Science', file: '/assets/Prajjwal_Maharjan_Introduction_to_Data_Science.pdf' },
  { img: '/assets/ITIL.PNG', title: 'Introduction to ITIL', file: '/assets/Prajjwal_maharjan_Introduction_to_ITIL_V4.pdf' },
  { img: '/assets/minitab.PNG', title: 'Introduction to Minitab', file: '/assets/Prajjwal_Maharjan_Introduction_to_Minitab.pdf' },
  { img: '/assets/SAFe.PNG', title: 'Introduction to SAFe', file: '/assets/Prajjwal_Maharjan_Introduction_to_SAFe.pdf' },
  { img: '/assets/six_sigma.PNG', title: 'Introduction to Six Sigma', file: '/assets/Prajjwal_Maharjan_Introduction_to_Six_Sigmas.pdf' },
  { img: '/assets/data_analytics.PNG', title: 'Introduction to Data Analytics', file: '/assets/Prajjwal_Maharjan_introduction-to_data_analytics.pdf' },
  { img: '/assets/PMP_Basics.PNG', title: 'PMP Basics', file: '/assets/Prajjwal_Maharjan_PMP_Basics.pdf' },
  { img: '/assets/BI.PNG', title: 'Business Intelligence using Excel Basic Tutorial', file: '/assets/Prajjwal_Mharjan_BI_using_excel_basics.pdf' },
  { img: '/assets/Pricne2.PNG', title: 'Introduction to Prince2', file: '/assets/Prajjwal_Mharjan_Introduction_to _Prince2.pdf' },
  { img: '/assets/Responsive_AI.png', title: 'Responsive AI', file: '/assets/Responsive_AI.png' },
  { img: '/assets/canva.PNG', title: 'Canva for Beginners', file: '/assets/Prajjwal_Maharjan_Canva_for_Begineers.pdf' },
  { img: '/assets/chatgpt.PNG', title: 'ChatGPT for Cybersecurity', file: '/assets/Prajjwal_Maharjan_ChatGPT for Cybersecurity.pdf' },
  { img: '/assets/content_marketing.PNG', title: 'Introduction to Content Marketing', file: '/assets/Prajjwal_Maharjan_Content_Marketing_Skillup.pdf' },
  { img: '/assets/excel.PNG', title: 'Excel Dashboard for Beginners', file: '/assets/Prajjwal_Maharjan_Excel Dashboard for Beginners.pdf' },
  { img: '/assets/full_stack.PNG', title: 'Getting Started with Full Stack Java Development', file: '/assets/Prajjwal_Maharjan_Getting Started with Full Stack Java Development.pdf' },
  { img: '/assets/Gmail.PNG', title: 'Gmail', file: '/assets/Prajjwal_Maharjan_Gmail.pdf' },
  { img: '/assets/generative_ai.PNG', title: 'Introduction to Generative AI', file: '/assets/Prajjwal_Maharjan_Introduction to Generative AI.pdf' },
  { img: '/assets/machine_learning_with_r.PNG', title: 'Introduction to Machine Learning with R', file: '/assets/Prajjwal_Maharjan_Introduction to Machine Learning with R.pdf' },
  { img: '/assets/paid_media.PNG', title: 'Introduction to Paid Media Marketing', file: '/assets/Prajjwal_Maharjan_Introduction to Paid Media Marketing.pdf' },
  { img: '/assets/PMI-RMP.PNG', title: 'Introduction to PMI-RMP', file: '/assets/Prajjwal_Maharjan_Introduction to PMI-RMP®.pdf' },
  { img: '/assets/generative_AI_studio.PNG', title: 'Introduction to Generative AI Studio', file: '/assets/Prajjwal_Maharjan_Introduction_to_Generative_AI_Studio.pdf' },
  { img: '/assets/Power_bi.PNG', title: 'Power BI Data Modelling Basics Tutorial Course', file: '/assets/Prajjwal_Maharjan_Power BI Data Modelling Basics Tutorial Course.pdf' },
  { img: '/assets/salesforce.PNG', title: 'Salesforce Administrator & App Builder', file: '/assets/Prajjwal_Maharjan_Salesforce_Administrator_&_App_Builder_(Developer).pdf' },
  { img: '/assets/animation.PNG', title: 'Introduction to Animation Fundamentals Course', file: '/assets/Prajjwal-Maharjan_Introduction to Animation Fundamentals Course.pdf' },
  { img: '/assets/design_thinking.PNG', title: 'Design Thinking For Beginners', file: '/assets/Prajjwal_Maharjan_Design Thinking for Beginners.pdf' },
  { img: '/assets/digital_leadership.PNG', title: 'Digital Leadership in Business', file: '/assets/Prajjwal_Maharjan_Digital Leadership in Business.pdf' },
  { img: '/assets/GIT_training.PNG', title: 'GIT Training', file: '/assets/Prajjwal_Maharjan_GIT.pdf' },
  { img: '/assets/frontend_development.PNG', title: 'Introduction to Frontend Development', file: '/assets/Prajjwal_Maharjan_Introduction to Front End Development.pdf' },
  { img: '/assets/web_analytics.PNG', title: 'Introduction to Web Analytics', file: '/assets/Prajjwal_Maharjan_Introduction to Web Analytics.pdf' },
  { img: '/assets/salesforcce_platform.PNG', title: 'Salesforce Platform App Builder', file: '/assets/Prajjwal_Maharjan_Salesforce Certified Platform App Builder.pdf' },
  { img: '/assets/tensorflow.PNG', title: 'TensorFlow for Beginners', file: '/assets/Prajjwal_Maharjan_TensorFlow for Beginners.pdf' },
  { img: '/assets/advanced_email_marketing.PNG', title: 'Advanced Email Marketing', file: '/assets/Prajjwal_Maharjan_Advanced Email Marketing.pdf' },
  { img: '/assets/advanced_mobile_marketing.PNG', title: 'Advanced Mobile Marketing', file: '/assets/Prajjwal_Maharjan_Advanced Mobile Marketing.pdf' },
  { img: '/assets/among_us_animation.PNG', title: 'Among Us Animation Beginner Course', file: '/assets/Prajjwal_Maharjan_Among Us Animation Beginner Course.pdf' },
  { img: '/assets/azure303.PNG', title: 'Azure 303 for Beginners', file: '/assets/Prajjwal_Maharjan_Azure 303 for Beginners.pdf' },
  { img: '/assets/azure_304.PNG', title: 'Azure 304 for Beginners', file: '/assets/Prajjwal_Maharjan_Azure 304 for Beginners Course.pdf' },
  { img: '/assets/BI_fundamental.PNG', title: 'Business Intelligence Fundamental', file: '/assets/Prajjwal_Maharjan_Business Intelligence Fundamentals.pdf' },
  { img: '/assets/chatgpt_advanced.PNG', title: 'ChatGPT Advanced Course', file: '/assets/Prajjwal_Maharjan_ChatGPT Advanced Course.pdf' },
  { img: '/assets/google_vids.PNG', title: 'Create Engaging Video with Google Vids', file: '/assets/Prajjwal_Maharjan_Create Engaging Video with Google Vids.pdf' },
  { img: '/assets/digital_social_selling.PNG', title: 'Digital and Social Selling Certified Associate Training Program', file: '/assets/Prajjwal_Maharjan_Digital & Social Selling Certified Associate Training Program.pdf' },
  { img: '/assets/data_engineering.PNG', title: 'Get Started With Databricks for Data Engineering', file: '/assets/Prajjwal_Maharjan_Get Started with Databricks for Data Engineering.pdf' },
  { img: '/assets/machine_learning_databricks.PNG', title: 'Get started with Databricks for Machine Learning', file: '/assets/Prajjwal_Maharjan_Get Started with Databricks for Machine Learning.pdf' },
  { img: '/assets/jenkins.PNG', title: 'Getting Started with Jenkins', file: '/assets/Prajjwal_Maharjan_Getting Started with Jenkins.pdf' },
  { img: '/assets/Google_analytics.PNG', title: 'Introduction to Google Analytics', file: '/assets/Prajjwal_Maharjan_Google Analytics_SkillUp.pdf' },
  { img: '/assets/google_calendar.PNG', title: 'Google Calendar', file: '/assets/Prajjwal_Maharjan_Google Calendar.pdf' },
  { img: '/assets/adobe_xd.PNG', title: 'Introduction to Adobe XD', file: '/assets/Prajjwal_Maharjan_Introduction to Adobe XD.pdf' },
  { img: '/assets/c++.PNG', title: 'Introduction to C++', file: '/assets/Prajjwal_Maharjan_Introduction to C plus plus.pdf' },
  { img: '/assets/deep_learning_keras.PNG', title: 'Introduction to Deep Learning with Keras', file: '/assets/Prajjwal_Maharjan_Introduction to Deep Learning with Keras.pdf' },
  { img: '/assets/deepseek_qwen.PNG', title: 'Introduction to Deepseek and Qwen', file: '/assets/Prajjwal_Maharjan_Introduction to DeepSeek And Qwen.pdf' },
  { img: '/assets/leetcode_chatgpt.PNG', title: 'Introduction to Leetcode with ChatGPT', file: '/assets/Prajjwal_Maharjan_Introduction to LeetCode with ChatGPT.pdf' },
  { img: '/assets/mongodb.PNG', title: 'Introduction to MongoDB', file: '/assets/Prajjwal_Maharjan_Introduction to MongoDB.pdf' },
  { img: '/assets/msexcel.PNG', title: 'Introduction to MS Excel', file: '/assets/Prajjwal_Maharjan_Introduction to MS Excel.pdf' },
  { img: '/assets/neural_network.PNG', title: 'Introduction to Neural Network', file: '/assets/Prajjwal_Maharjan_Introduction to Neural Network.pdf' },
  { img: '/assets/php.PNG', title: 'Introduction to PHP', file: '/assets/Prajjwal_Maharjan_Introduction to PHP.pdf' },
  { img: '/assets/selenium.PNG', title: 'Introduction to Selenium', file: '/assets/Prajjwal_Maharjan_Introduction to Selenium.pdf' },
  { img: '/assets/Website__conversion_rate.PNG', title: 'Introduction to Website Conversion Rate Optimization', file: '/assets/Prajjwal_Maharjan_Introduction to Website Conversion Rate Optimization.pdf' },
  { img: '/assets/langchain.PNG', title: 'Langchain Course for Beginners', file: '/assets/Prajjwal_Maharjan_Langchain Course for Beginners.pdf' },
  { img: '/assets/master_ai.PNG', title: 'Master AI for Web App Development', file: '/assets/Prajjwal_Maharjan_Master AI for Web App Development.pdf' },
  { img: '/assets/python_libraries.PNG', title: 'Python Libraries for Data Science', file: '/assets/Prajjwal_Maharjan_Python Libraries for Data Science.pdf' },
  { img: '/assets/python_pandas.PNG', title: 'Python Pandas Basics Course', file: '/assets/Prajjwal_Maharjan_Python Pandas Basics Course.pdf' },
  { img: '/assets/aws_technical_essential.PNG', title: 'The AWS Technical Essentials', file: '/assets/Prajjwal_Maharjan_The AWS Technical Essentials.pdf' },
  { img: '/assets/css.PNG', title: 'Introduction to CSS', file: '/assets/Prajjwal-Maharjan_Introduction to CSS.pdf' },
  { img: '/assets/ai_email.PNG', title: 'AI in Email Marketing', file: '/assets/Prajjwal_Maharjan_AI in Email Marketing.pdf' },
  { img: '/assets/amazon_kendra.PNG', title: 'Amazon Kendra Getting Started', file: '/assets/Prajjwal_Maharjan_Amazon Kendra Getting Started.pdf' },
  { img: '/assets/apps_script.PNG', title: 'Apps Script Basics', file: '/assets/Prajjwal_Maharjan_Apps Script Basics.pdf' },
  { img: '/assets/AI_business.PNG', title: 'Artificial Intelligence for Business', file: '/assets/Prajjwal_Maharjan_Artificial Intelligence for Business.pdf' },
  { img: '/assets/data_analyst_101.PNG', title: 'Data Analyst 101', file: '/assets/Prajjwal_Maharjan_Data Analyst 101.pdf' },
  { img: '/assets/excel_automation.PNG', title: 'Excel Automation Using ChatGPT', file: '/assets/Prajjwal_Maharjan_Excel Automation using ChatGPT.pdf' },
  { img: '/assets/databricks_business_leaders.PNG', title: 'Get Started with Data Bricks for Business Leaders', file: '/assets/Prajjwal_Maharjan_Get Started with Databricks for Business Leaders.pdf' },
  { img: '/assets/google_spreadsheet.PNG', title: 'Google Spreadsheet Fundamentals', file: '/assets/Prajjwal_Maharjan_Google Spreadsheet Fundamentals.pdf' },
  { img: '/assets/opencv.PNG', title: 'Introduction to OpenCV for Beginners', file: '/assets/Prajjwal_Maharjan_Introduction to OpenCV for Beginners.pdf' },
  { img: '/assets/pinterest_marketing.PNG', title: 'Introduction to Pinterest Marketing', file: '/assets/Prajjwal_Maharjan_Introduction to Pinterest Marketing.pdf' },
  { img: '/assets/n8n_course.PNG', title: 'n8n Course: No Code AI Agent Builder', file: '/assets/Prajjwal_Maharjan_n8n Course No Code AI Agent Builder.pdf' },
  { img: '/assets/SQL-Project.PNG', title: 'SQL Projects', file: '/assets/Prajjwal_Maharjan_SQL Projects.pdf' },
  { img: '/assets/SQL_query_optimization.PNG', title: 'SQL Query Optimization for Beginners', file: '/assets/Prajjwal_Maharjan_SQL Query Optimization for Beginners.pdf' },
  { img: '/assets/Prajjwal_maharjan_Agentic RAG Systems with Llama-Index.PNG', title: 'Agentic RAG Systems with Llama-Index', file: '/assets/Prajjwal_maharjan_Agentic RAG Systems with Llama-Index.PNG' },
  { img: '/assets/Prajjwal_Maharjan_AI Foundations _.PNG', title: 'AI Foundations', file: '/assets/Prajjwal_Maharjan_AI Foundations _.PNG' },
  { img: '/assets/Prajjwal_Maharjan_Basics of Data Structures and Algorithms.PNG', title: 'Basics of Data Structures and Algorithms', file: '/assets/Prajjwal_Maharjan_Basics of Data Structures and Algorithms.PNG' },
  { img: '/assets/Prajjwal_maharjan_Build an App with RAG.PNG', title: 'Build an App with RAG', file: '/assets/Prajjwal_maharjan_Build an App with RAG.PNG' },
  { img: '/assets/Prajjwal_Maharjan_Free Data Scientist Course.PNG', title: 'Free Data Scientist Course', file: '/assets/Prajjwal_Maharjan_Free Data Scientist Course.PNG' },
  { img: '/assets/Prajjwal_mAharjan_Getting Started with Amazon Detective.PNG', title: 'Getting Started with Amazon Detective', file: '/assets/Prajjwal_mAharjan_Getting Started with Amazon Detective.PNG' },
  { img: '/assets/Prajjwal_Maharjan_Getting Started with Docker.PNG', title: 'Getting Started with Docker', file: '/assets/Prajjwal_Maharjan_Getting Started with Docker.PNG' },
  { img: '/assets/Prajjwal_Maharjan_Getting_Started_with_JUnit.PNG', title: 'Getting Started with JUnit', file: '/assets/Prajjwal_Maharjan_Getting_Started_with_JUnit.PNG' },
  { img: '/assets/Prajjwal_Maharjan_GitHub Basics.PNG', title: 'GitHub Basics', file: '/assets/Prajjwal_Maharjan_GitHub Basics.PNG' },
  { img: '/assets/Prajjwal_Maharjan_Go-Lang Basics.PNG', title: 'Go-Lang Basics', file: '/assets/Prajjwal_Maharjan_Go-Lang Basics.PNG' },
  { img: '/assets/Prajjwal_Maharjan_Hootsuite Platform Training.PNG', title: 'Hootsuite Platform Training', file: '/assets/Prajjwal_Maharjan_Hootsuite Platform Training.PNG' },
  { img: '/assets/Prajjwal_Maharjan_Introduction to TypeScript.PNG', title: 'Introduction to TypeScript', file: '/assets/Prajjwal_Maharjan_Introduction to TypeScript.PNG' },
  { img: '/assets/Prajjwal_Maharjan_Introduction_to_AWS_Trusted_Advisor.PNG', title: 'Introduction to AWS Trusted Advisor', file: '/assets/Prajjwal_Maharjan_Introduction_to_AWS_Trusted_Advisor.PNG' },
  { img: '/assets/Prajjwal_Maharjan_Keyword Research Fundamental.PNG', title: 'Keyword Research Fundamental', file: '/assets/Prajjwal_Maharjan_Keyword Research Fundamental.PNG' },
  { img: '/assets/Prajjwal_Maharjan_Learn WordPress.PNG', title: 'Learn WordPress', file: '/assets/Prajjwal_Maharjan_Learn WordPress.PNG' },
  { img: '/assets/Prajjwal_Maharjan_RAG Applications for Beginners.PNG', title: 'RAG Applications for Beginners', file: '/assets/Prajjwal_Maharjan_RAG Applications for Beginners.PNG' },
  { img: '/assets/Prajjwal-Maharjan_ChatGPT 101.PNG', title: 'ChatGPT 101', file: '/assets/Prajjwal-Maharjan_ChatGPT 101.PNG' },
  { img: '/assets/Prajjwal-Maharjan_Digital Marketing for CXOs.PNG', title: 'Digital Marketing for CXOs', file: '/assets/Prajjwal-Maharjan_Digital Marketing for CXOs.PNG' }
];

export default function Certificates({limit = 9, showAll = false}) {
  const [query, setQuery] = useState('')
  const [preview, setPreview] = useState(null)
  const [suggestionsOpen, setSuggestionsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const inputRef = React.useRef(null)
  const containerRef = React.useRef(null)
  const searchRef = React.useRef(null)

  // debounced query for better UX
  const [debounced, setDebounced] = useState(query)
  React.useEffect(() => {
    const t = setTimeout(() => setDebounced(query), 180)
    return () => clearTimeout(t)
  }, [query])

  const filtered = useMemo(() => {
    return certificates.filter(c => c.title.toLowerCase().includes(debounced.toLowerCase()))
  }, [debounced])

  const list = showAll ? filtered : filtered.slice(0, limit)

  // IntersectionObserver for reveal animations (runs in parent component)
  React.useEffect(()=>{
    const root = containerRef.current
    if(!root) return
    const items = Array.from(root.querySelectorAll('.reveal'))
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('in-view') })
    },{threshold:0.12})
    items.forEach(i=>obs.observe(i))
    return ()=> obs.disconnect()
  },[list])

  // close suggestions when clicking outside the search area
  React.useEffect(()=>{
    function onDocClick(e){
      const sr = searchRef.current
      if(!sr) return
      if(!sr.contains(e.target)) setSuggestionsOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return ()=> document.removeEventListener('mousedown', onDocClick)
  },[])

  // keep input focused while suggestions are open to avoid unexpected blur during typing
  React.useEffect(()=>{
    if(suggestionsOpen && inputRef.current && document.activeElement !== inputRef.current){
      inputRef.current.focus()
    }
  },[query, suggestionsOpen])

  // Compact card grid used on home page
  const CompactView = () => (
    <section id="certificates" className="section certificates-page">
      <div className="section-head">
        <div>
          <h2>Certificates</h2>
          <p className="muted">Explore verified certificates — open or download any item.</p>
        </div>

        <div className="cert-controls">
          <div className="search-wrapper" ref={searchRef}>
            <input
              ref={inputRef}
              className="search"
              placeholder="Search certificates..."
              value={query}
                onChange={e => { setQuery(e.target.value); setSuggestionsOpen(true); setActiveIndex(-1) }}
                onFocus={() => setSuggestionsOpen(true)}
              onKeyDown={(e)=>{
                if(!suggestionsOpen) return
                if(e.key === 'ArrowDown'){ e.preventDefault(); setActiveIndex(i => Math.min(i+1, Math.max(0, filtered.length-1))) }
                else if(e.key === 'ArrowUp'){ e.preventDefault(); setActiveIndex(i => Math.max(i-1, 0)) }
                else if(e.key === 'Enter'){ e.preventDefault(); const sel = filtered[activeIndex] || filtered[0]; if(sel) { setQuery(sel.title); setSuggestionsOpen(false); inputRef.current && inputRef.current.focus() } }
                else if(e.key === 'Escape'){ setSuggestionsOpen(false) }
              }}
              aria-label="Search certificates"
              autoComplete="off"
            />
            {suggestionsOpen && debounced && filtered.length>0 && (
              <div className="search-suggestions" role="listbox" onMouseDown={(e)=>e.preventDefault()}>
                {filtered.slice(0,8).map((s, i) => (
                  <div key={s.file} className={"suggestion-item" + (i===activeIndex? ' active':'')} role="option" onMouseDown={(e)=>{ e.preventDefault(); setQuery(s.title); setSuggestionsOpen(false); inputRef.current && inputRef.current.focus() }}>
                    {s.title}
                  </div>
                ))}
              </div>
            )}
          </div>
          {!showAll && (
            <a href="/certificates" className="btn outline">View all</a>
          )}
        </div>
      </div>

      <div ref={containerRef} className="certificate-container">
        {list.map((c, idx) => (
          <article key={c.file + idx} className="certificate-card card reveal" tabIndex={0}>
            <div className="thumb-wrap" onClick={() => setPreview(c)}>
              <img loading="lazy" src={c.img} alt={c.title} className="certificate-preview" />
            </div>
            <h3 className="cert-title">{c.title}</h3>
            <div className="cert-actions">
              <a className="btn primary" href={c.file} target="_blank" rel="noopener noreferrer">Open</a>
              <a className="btn outline" href={c.file} download>Download</a>
            </div>
          </article>
        ))}
      </div>

      {preview && (
        <div className="preview-modal" role="dialog" aria-modal="true" onClick={() => setPreview(null)}>
          <div className="preview-inner" onClick={e => e.stopPropagation()}>
            <header className="preview-header">
              <h3>{preview.title}</h3>
              <button className="icon-btn" onClick={() => setPreview(null)} aria-label="Close">✕</button>
            </header>
            <div className="preview-body">
              <iframe src={preview.file} title={preview.title} />
            </div>
            <footer className="preview-footer">
              <a className="btn primary" href={preview.file} target="_blank" rel="noopener noreferrer">Open in new tab</a>
              <a className="btn outline" href={preview.file} download>Download</a>
            </footer>
          </div>
        </div>
      )}
    </section>
  )

  // Full page port of certificate.html (About + Projects + All certificates)
  const FullPageView = () => (
    <main className="container">

      <section className="section">
        <div className="section-head">
          <div>
            <h2>Certificates</h2>
          </div>
          <a className="back-btn" href="/">Back</a>
        </div>
        <p className="muted">All certifications — click to download or open.</p>

        <div className="certificate-container">
          {certificates.map((c, idx) => (
            <div key={c.file + idx} className="card certificate-card">
              <img src={c.img} alt={c.title} className="certificate-preview" />
              <h3>{c.title}</h3>
              <div style={{display:'flex',gap:8,marginTop:8}}>
                <a className="card-link-btn" href={c.file} target="_blank" rel="noopener noreferrer">View</a>
                <a className="card-link" href={c.file} download>Download</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )

  return showAll ? <FullPageView /> : <CompactView />
}


