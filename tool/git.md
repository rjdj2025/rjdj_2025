以下是一个详细的Git教程，涵盖了Git的基本概念、安装、工作流程、常用命令以及分支管理等核心知识。

一、Git基本概念
Git是什么：Git是一个免费、开源的分布式版本控制系统，用于保存工程源代码历史状态，可以追溯源码中的文件，并能得到某个时间点上的整个工程项目的状态。它使用一个特殊的叫做仓库的数据库来记录文件的变化，仓库中的每个文件都有一个完整的版本历史记录。
特点：
分布式：可以离线进行代码提交。
基于快照：提交是将提交点指向提交时的项目快照，提交的东西包含一些元数据（作者、日期、GPG等）。
分支和合并：分支模型是Git最显著的特点，用户可以随时创建、合并、删除分支，实现多人协同开发。
二、Git安装
Windows系统：从Git官网下载安装程序，按默认选项安装即可。安装完成后，在开始菜单里找到“Git”->“Git Bash”，或在文件夹空白处右键，检查是否出现Git相关选项，以确认安装成功。
macOS系统：使用Homebrew命令行安装，终端输入git --version确认安装。
三、Git工作流程
Git管理项目时，文件流转涉及三个工作区域：Git的工作目录（工作区）、暂存区域（暂存区）、以及本地仓库（版本库）。

工作区：处理工作的区域，即你在电脑里能看到的目录。
暂存区：临时存放的区域，英文叫stage或index，一般存放在.git目录下的index文件（.git/index）中。
版本库：最终的存放区域，工作区有一个隐藏目录.git，这个目录是Git的版本库。
对于任何一个文件，在Git内只有三种状态：已修改（modified）、已暂存（staged）和已提交（committed）。

四、Git常用命令
配置：
查看配置：git config --list
设置全局用户名和邮箱地址：
bash
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
创建仓库：
初始化仓库：git init
克隆仓库：git clone [url]
增加/删除文件：
查看当前工作区的文件状态：git status
添加文件到暂存区：
bash
git add [file1] [file2] # 添加指定文件到暂存区，多个文件用空格隔开
git add . # 添加当前目录的所有文件到暂存区
删除工作区指定文件：git rm [file1] [file2]
停止追踪指定文件，但该文件会保留在工作区：git rm --cached [file]
文件改名，并且放入暂存区：git mv [原始文件] [更名文件]
代码提交：
提交代码到仓库区：git commit -m '提交说明'，没有-m会进入vim编辑器。
查看提交日志：git log，使用--oneline参数可以在一行显示简略信息。
远程操作：
关联远程仓库：git remote add origin [仓库地址]
推送改动到远程仓库：git push origin [分支名]
从远程仓库克隆项目：git clone [url]
五、Git分支管理
查看分支：git branch，没有参数时，会列出你在本地的分支。
创建分支：git branch [分支名]，创建分支后不会自动切换分支。
切换分支：git checkout [分支名]，切换到指定分支。
创建并切换分支：git checkout -b [新分支名]。
合并分支：切换到目标分支，然后使用git merge [要合并的分支名]。
删除分支：git branch -d [分支名]，如果分支未合并，则使用-D强制删除。
六、Git其他操作
版本回退：使用git reset --hard [版本号]回退到指定版本，使用git reflog查看所有的操作记录。
忽略文件：在.git文件夹同级目录下新增.gitignore的忽略文件并写入忽略规则，以指定哪些文件或文件夹不让Git进行跟踪管理。
通过以上教程，你可以初步掌握Git的基本操作和使用方法。在实际开发中，建议结合具体项目多加练习，以加深对Git的理解和应用能力。


git 提交日期是根据commit来的

