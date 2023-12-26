## THE .gitignore

The **.gitignore** file is used in Git to specify files and directories that should be ignored when tracking changes in a repository. These files can be specific to a certain project or programming language, and they help prevent irrelevant files from being included in the version control system.

**Where to Store .gitignore:**

The .gitignore file should be placed in the root directory of your Git repository. This ensures that the specified rules apply to the entire repository.
Multiple .gitignore Files:

**Multiple .gitignore files:**

You can have multiple .gitignore files in a Git repository. Git will consider the rules in all .gitignore files found in the repository. This can be useful in various scenarios:

-   Global Git Ignore: You can have a global .gitignore file that applies to all your Git repositories. This file is usually set in your global Git configuration.

-   Local Ignore for Specific Directories: You might have specific directories within your repository that require their own set of rules. Placing a .gitignore file in those directories allows you to specify rules locally.

The example **.gitignore** file contents below includes common patterns for ignoring:

-   Node.js dependencies (node_modules/),
-   build output (/build/),
-   TypeScript build artifacts (\*.tsbuildinfo),
-   IDE-specific files for Visual Studio Code (/.vscode/) and IntelliJ IDEA (/.idea/).

```git
# Node.js
node_modules/

# Dependency directories
package-lock.json
yarn.lock

# dotenv environment variables file
.env

# Build output
/build/

# TypeScript
*.tsbuildinfo
*.tsbuildinfo.*

# React
/.cache/
/build/

# IDE and editor files
.vscode/
.idea/

# macOS
.DS_Store

# Windows
Thumbs.db
Desktop.ini

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```
