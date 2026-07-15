const fs = require('fs');
const path = require('path');
const mammoth = require("mammoth");

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[-\s]+/g, '-')
    .trim('-');
}

function determineCategory(title) {
  const categoryMap = {
    'Anxiety': ['anxiety', 'panic', 'worry', 'fear'],
    'Relationships': ['relationship', 'couples', 'partner', 'romantic', 'togetherness', 'trust', 'intimacy'],
    'Communication': ['communication', 'speak', 'listen'],
    'Stress': ['stress', 'pressure', 'burnout'],
    'Boundaries': ['boundaries'],
    'Self-Care': ['self care'],
    'Mindfulness': ['mindfulness'],
    'Resilience': ['resilience', 'resilient', 'thriving'],
    'Perfectionism': ['perfectionism'],
    'Mental Health': ['mental health', 'ptsd'],
    'Codependency': ['codependency'],
    'Therapy': ['therapy'],
  };
  
  const lower = title.toLowerCase();
  for (const [category, keywords] of Object.entries(categoryMap)) {
    if (keywords.some(kw => lower.includes(kw))) {
      return category;
    }
  }
  return 'Personal Growth';
}

async function convertArticles() {
  const blogsDir = '/Users/samuelappiah/Desktop/Appiah C/Blogs';
  const outputDir = '/Users/samuelappiah/appiah-counselling/content/articles';
  
  const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.docx')).sort();
  let count = 0;
  
  for (const filename of files) {
    const filepath = path.join(blogsDir, filename);
    const title = filename.replace('.docx', '');
    const slug = slugify(title);
    const category = determineCategory(title);
    
    try {
      const { value: docText } = await mammoth.convertToMarkdown({ path: filepath });
      
      const wordCount = docText.split(/\s+/).length;
      const readingTime = Math.max(1, Math.round(wordCount / 200));
      
      const firstSentence = docText.split('.')[0].trim();
      const excerpt = firstSentence.length > 150 
        ? firstSentence.substring(0, 150) + '...' 
        : firstSentence + '.';
      
      const frontmatter = `---
title: "${title}"
slug: "${slug}"
category: "${category}"
date: "2026-06-01"
readingTime: ${readingTime}
excerpt: "${excerpt.replace(/"/g, '\\"')}"
---

`;
      
      const outputPath = path.join(outputDir, `${slug}.mdx`);
      fs.writeFileSync(outputPath, frontmatter + docText, 'utf8');
      
      count++;
      console.log(`✓ ${slug}`);
    } catch (e) {
      console.error(`✗ ${title}: ${e.message}`);
    }
  }
  
  console.log(`\n✓ Successfully converted ${count} articles`);
}

convertArticles().catch(console.error);
