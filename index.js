const fs = require('fs');

// 读取输入参数（GitHub 会自动把输入转成环境变量）
const name = process.env.INPUT_YOUR_NAME || '世界';

// 执行逻辑
const greeting = `你好，${name}！欢迎使用原子任务！`;
console.log(greeting);

// 设置输出参数
fs.appendFileSync(process.env.GITHUB_OUTPUT, `greeting=${greeting}\n`);
