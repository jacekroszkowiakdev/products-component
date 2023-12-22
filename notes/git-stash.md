## STASHING

Stashing allows you to you to temporarily save changes in your working directory that are not ready to be committed, so you can switch to another branch or perform other tasks without committing incomplete work. It is useful when you need to switch branches but have changes that are not yet ready to be committed.

If you find yourself on the wrong branch with changes, you can use git stash to save your changes, switch branches, and then apply the stash.

**Use Cases:**

1. Switching Branches:
Stash changes when you need to switch to another branch but don't want to commit incomplete work.

2. Pulling Changes:
Stash changes when you want to pull changes from the remote repository but have uncommitted local changes.

3. Temporary Work:
Stash changes when you need to perform a quick fix or task on another branch without committing your current changes.

4. Conflict Resolution:
Stash changes when resolving merge conflicts. It allows you to switch branches and then reapply the changes. If you find yourself on the wrong branch with changes, you can use git stash to save your changes, switch branches, and then apply the stash.

**Usage:**

1. Stash Changes:
This command saves your changes in a new stash and reverts your working directory to the last commit.

    ```bash
    git stash
    ```

2. List Stashes:
Shows a list of all stashes.

    ```bash
    git stash list
    ```

3. Apply Stash:
This command reapplies the changes from the latest stash to your working directory. It doesn't remove the stash.

    ```bash
    git stash apply
    ```

4. Apply and Remove Stash:
This command applies the changes from the latest stash and removes the stash.

    ```bash
    git stash pop
    ```

### Best Practices:

1. Use Descriptive Stash Messages:
When stashing, provide a descriptive message to easily identify the purpose of the stash:

    ```bash
    git stash save "Feature XYZ in progress"
    ```

2. Review Stash List:
Before applying or popping a stash, review the list to ensure you're working with the correct stash:

    ```bash
    git stash list
    ```

3. Stash Only What's Necessary:
Stash only the changes that are not ready to be committed. Avoid stashing changes that are already in a clean and commit-ready state.

4. Clean Stale Stashes:
Periodically clean up old or unnecessary stashes to avoid clutter:

    ```bash
    git stash drop <stash@{n}>
    ```