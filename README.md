# project1
# 1. 初始化本地 Git 仓库
git init

# 2. 将所有文件添加到暂存区
git add .

# 3. 提交到本地仓库
git commit -m "Initial commit: add weather app core files"

# 4. 重命名主分支为 main
git branch -M main

# 5. 关联远程 GitHub 仓库 (把下面的 URL 换成你建仓后的实际地址)
git remote add origin https://github.com/你的用户名/my-weather-app.git

# 6. 推送代码到 GitHub
git push -u origin main
