
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 要修复的目录
const directories = [
  path.join(__dirname, 'src/components'),
  path.join(__dirname, 'src/pages'),
  path.join(__dirname, 'src/utils'),
  path.join(__dirname, 'src/store'),
  path.join(__dirname, 'src')
];

// 修复HTML转义字符
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 替换HTML转义字符
    let newContent = content
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#61;/g, '=')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&');
    
    // 只有当内容有变化时才写回
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// 递归处理目录
function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      fixFile(fullPath);
    }
  }
}

// 运行修复
console.log('Starting to fix files...');
directories.forEach(dir => processDirectory(dir));
console.log('Done!');
