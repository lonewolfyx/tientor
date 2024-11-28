#/bin/bash

# 获取并打印当前运行的目录
CURRENT_DIR=$(pwd)
echo "当前工作目录是: $CURRENT_DIR"

# 定义目标目录
TARGET_DIR="$CURRENT_DIR/../packages/tientor-engine/dist"

echo "需要校验的目录：$TARGET_DIR"

if [ ! -d "$TARGET_DIR" ]; then
  echo "目标目录 $TARGET_DIR 不存在"

  # 返回上一级目录
  cd ..
  echo "已切换到上级目录: $(pwd)"

  # 运行构建命令
  npm run build

  # 构建完成后复制dist文件夹
  cp -r "$TARGET_DIR" "$CURRENT_DIR/../"
#  if [ $? -ne 0 ]; then
#    echo "npm run build 执行失败"
#    exit 1
#  fi
else
  echo "目标目录 $TARGET_DIR 已存在"
fi