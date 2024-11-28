const fs = require('fs-extra');
const path = require('path');

// 定义源路径和目标路径
const sourceDir = path.resolve(__dirname, '../packages/tientor-engine/dist/');
const targetDir = path.resolve(__dirname, '../dist/');

console.log(sourceDir, targetDir);
console.log(fs.pathExistsSync(sourceDir) ? '有' : '无')

if(!fs.pathExistsSync(sourceDir)){
    console.log('暂无打包文件')
}
// (async () => {
//     try {
//         const as = await fs.ensureDir(sourceDir)
//         console.log('success!', as)
//     } catch (err) {
//         console.error(err)
//     }
// })()

// 检查源文件夹是否存在
// if (!fs.existsSync(sourceDir)) {
//     console.error(`源文件夹 ${sourceDir} 不存在`);
//     process.exit(1);
// }
//
// // 移动文件夹前先删除目标位置已存在的同名文件夹（如果有的话）
// if (fs.existsSync(targetDir)) {
//     fs.removeSync(targetDir);
// }
//
// // 执行移动操作
// fs.move(sourceDir, targetDir, { overwrite: true })
//     .then(() => {
//         console.log(`成功将 ${sourceDir} 移动到了 ${targetDir}`);
//     })
//     .catch(err => {
//         console.error(`移动文件夹时发生错误:`, err);
//     });