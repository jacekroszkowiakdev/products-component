## Managing branches

Branches purpose is to isolate your development work from other branches in the repository. For example, you could use a branch to develop a new feature or fix a bug.

You always create a branch from an existing branch. Typically you create a branch from the default branch of your repository. You can then work on this new branch in isolation from changes that other people are making to the repository.

Once you're satisfied with your work, you can create a pull request to merge your changes in the current branch into another branch.

**1. Creating a Branch**
The first new branch is based on the default branch. In case that other branches exist - you can decide which to choose as base for new branch. To do that be sure to be checked out on a branch you want to use as base and then run `git branch <new branch>`. To checkout to a new one run `git checkout <new branch>`.
There is a shorthand for creating and switching to new branch:

```bash
git checkout -b  <new branch>
```

**2. Publishing a new branch**
Be sure to add files, i.e. by adding all files `git add .` then create a commit with a comment `git commit -m "some comment"` and run `git push` command. In Git it is used to upload local repository content to a remote repository. It's an essential command in the collaborative nature of Git, allowing you to share your changes with others. The basic syntax of this command is as follows:

```bash
git push -u <remote name> <new branch>
```

The `-u` flag is a shorthand for

```bash
--set upstream
```

`<remote-name>` is the name of the remote repository you want to push your changes
`<branch-name>` is the name of the local branch whose changes you want to push

For example, a typical scenario, if you're working on the `main` branch and want to push changes to a remote named `"origin` the command would look like this:

```bash
git push origin main
```

There is another useful way to push the current branch to the same name of the remote:

```bash
git push -u origin HEAD
```

**3. Switching between branches**
To see what branch you're on run `git status`
To list all local branches run `git branch`
To see all remote branches run `git branch -r`
To see all local and remoter branches use `git branch -a`

Then use `git switch <branch name>` or `git checkout <branch name>` to switch between branches.

**4. Deleting branches**

Checkout to default branch and run `git branch -D <branch name>` to delete.

### BRANCH NAMING:

**Basic Rules**

1.  **Lowercase and Hyphen-separated**: Stick to lowercase for branch names and use hyphens to separate words. For instance, `feature/new-login` or `bugfix/header-styling`.
2.  **Alphanumeric Characters:** Use only alphanumeric characters (a-z, 0–9) and hyphens. Avoid punctuation, spaces, underscores, or any non-alphanumeric character.
3.  **No Continuous Hyphens:** Do not use continuous hyphens. `feature--new-login` can be confusing and hard to read.
4.  **No Trailing Hyphens:** Do not end your branch name with a hyphen. For example, `feature-new-login-` is not a good practice.
5.  **Descriptive:** The name should be descriptive and concise, ideally reflecting the work done on the branch.

**Branch Prefixes**
Using prefixes in branch names helps to quickly identify the purpose of the branches. Here are some common types of branches with their corresponding prefixes:

1.  **Feature Branches:** These branches are used for developing new features. Use the prefix `feature/`. For instance, `feature/login-system`.
2.  **Bugfix Branches:** These branches are used to fix bugs in the code. Use the prefix `bugfix/`. For example, `bugfix/header-styling`.
3.  **Hotfix Branches:** These branches are made directly from the production branch to fix critical bugs in the production environment. Use the prefix `hotfix/`. For instance, `hotfix/critical-security-issue`.
4.  **Release Branches:** These branches are used to prepare for a new production release. They allow for last-minute dotting of i’s and crossing t’s. Use the prefix `release/`. For example, `release/v1.0.1`.
5.  **Documentation Branches:** These branches are used to write, update, or fix documentation. Use the prefix `docs/`. For instance, `docs/api-endpoints`.

Some examples of names following the above conventions:

    1. `feature/T-456-user-authentication`
    2. `bugfix/T-789-fix-header-styling`
    3. `hotfix/T-321-security-patch`
    4. `release/v2.0.1`
    5. `docs/T-654-update-readme`
