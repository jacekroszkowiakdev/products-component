## COMMITS AND COMMITS HISTORY

In Git, a commit is a fundamental concept and represents a snapshot of your project at a specific point in time. It is a way to save changes to your codebase, creating a record of what was modified, added, or deleted. Each commit has a **unique identifier** called a **hash**, and it contains information such as the author, timestamp, and a reference to the changes made.

The history of commits in Git forms a branching, tree-like structure. When you create a new commit, it points to the previous commit(s), forming a chain. This series of commits creates a history that can be visualized as a graph.

**Overview of commit history in Git:** 1.**Initial Commit:**
The first commit in a Git repository is often referred to as the "initial commit." It marks the startingit init
`git add .`
`git commit -m "Initial commit"`
`g point of the project.`

2. **Subsequent Commits:**
   As you make changes to your code, you stage those changes using `git add` and then create a new commit using `git commit`. Each commit contains a unique identifier and refers to the previous commit, forming a linked list of changes.
   `git add <file(s)>`or `git add .` (to add all files)
   `git commit -m "Descriptive commit message"`

3. **Branching:**
   Git allows you to create branches with command `git branch <branch_name>` to work on different features or bug fixes independently. Each branch has its own commit history. You can switch between branches using `git checkout` or `git switch`.

4. **Merging:**
   After working on a branch, you can merge the changes back into the main branch (usually `master` or `main`). This integrates the changes from one branch into another.
   `git checkout main`
   `git merge <branch_name>`

5. **Reverting and Resetting:**
   If you need to undo a commit, you can use `git revert` to create a new commit that undoes the changes of a single commit by taking you back to the staged files before the commit.
   `git revert <commit_hash>`

The `git reset` command is used to undo the changes in your working directory and get back to a specific commit while discarding all the commits made after that one.
`git reset --soft HEAD^` to change the HEAD (where the last commit is in your local machine) reference to a specific commit. For instance, if we realize that we forgot to add a file to the commit, we can move back using the --soft with respect to the following format

`git reset --hard HEAD^` is potentially dangerous. Basically, when using the hard reset on a specific commit, it forces the HEAD to get back to that commit and deletes everything else after that.

6. **Viewing Branch History**
   o view the branch history in Git, you can use the `git log` command with the `--graph` option. This option provides a text-based ASCII graph representation of the commit history, showing the branching and merging of branches. Additionally, you may want to include the `--oneline` option to condense the output and make it more readable.
   `git log --graph --oneline --all``
