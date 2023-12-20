## MANAGING BRANCHES

**1. Adding a remote repository**
To add a remote repository start with `git remote add` command on the terminal, in the directory your repository is stored at.
The `git remote add` command takes two arguments:

-   A remote name, i.e., `origin`
-   A remote URL, i.e., `https://github.com/OWNER/REPOSITORY.git`

**2. Changing a remote repository's URL**
`git remote set-url` to change the the existing remote's URL. The command takes two arguments:

-   An existing remote name. For example, `origin` or `upstream` are two common choices.
-   A new URL for the remote.
-   Use `git remote -v` to list remotes and check if the URL was updated.

**3. Renaming a remote repository**
Use `git remote rename` command in the CLI to rename an existing remote.

The `git remote rename` command takes two arguments:

-   An existing remote name, for example, `origin`
-   A new name for the remote, for example, `destination`
-   Use `git remote -v` to list remotes and check if the name was updated.

**4. Removing a remote repository**
Use the `git remote rm` command to remove a remote URL from local.

**Note:** `git remote rm` does not delete the remote repository from the server. It simply removes the remote and its references from your local repository.

Use the `git remote -v` to view the current remotes and then `git remote rm <remote name>`
