/*
Render Issue when deploy : bcrybt Issue :-
The error you're encountering in Render is related to the bcrypt module failing to load due to an "invalid ELF header". This typically happens when native Node.js modules (like bcrypt) are built on one system (e.g., your local machine) and then deployed to a different environment (Linux in Render's case).

1. Rebuild bcrypt for Render’s Linux Environment
Since bcrypt is a native dependency, it must be compiled for the target OS. Your local machine likely built it for macOS/Windows, but Render runs Linux.
Use bcryptjs Instead (No Native Dependencies)
If rebuilding doesn’t work, switch to bcryptjs (a pure-JS alternative):

npm uninstall bcrypt
npm install bcryptjs
git add .
git commit -m "Clean node_modules for Render"
git push


*/ 