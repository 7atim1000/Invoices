/*
Issue :
It looks like you're encountering a permission issue when trying to push to your Git repository. The error suggests that the user 7atim1000 doesn't have permission to push to HatimAbdalla1000/Pos.git.

1- Check your Git credentials:
git config --global user.email
git config --global user.name

If they don't match your HatimAbdalla1000 account, update them:
git config --global user.name "HatimAbdalla1000"
git config --global user.email "your-email@example.com"

2- SSH vs HTTPS:

If you're using HTTPS, ensure you're authenticated with the correct account.
*/ 