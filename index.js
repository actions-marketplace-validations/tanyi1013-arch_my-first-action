const core = require('@actions/core');

// 读取输入参数
const name = core.getInput('your_name');

// 执行逻辑
const greeting = `你好，${name}！欢迎使用原子任务！`;
console.log(greeting);

// 设置输出参数
core.setOutput('greeting', greeting);
