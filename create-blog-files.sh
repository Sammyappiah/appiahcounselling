#!/bin/bash

# Create the blog directory if it does not exist
mkdir -p content/blog

# Generate 74 simple JSON blog posts
for i in {1..74}; do
  cat > "content/blog/post-$i.json" <<EOF
{
  "title": "Counselling Blog Post $i",
  "slug": "counselling-blog-post-$i",
  "date": "2025-01-01",
  "excerpt": "This is counselling blog post number $i, exploring themes of mental health, counselling and emotional wellbeing.",
  "content": "This is the full content placeholder for counselling blog post number $i. It covers general ideas about mental health, emotional wellbeing and how counselling can offer support. You can edit this text in content/blog/post-$i.json to add more detail, personal reflections or specific psychoeducation related to your practice.",
  "coverImage": "/images/blog/default.jpg",
  "category": "Wellbeing",
  "tags": ["counselling", "mental health", "wellbeing"]
}
EOF
done

echo "Created 74 blog JSON files in content/blog/"
