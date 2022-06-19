+++
title = "Hosting Your Own Git Server"
date = 2022-06-19
+++

Yes, I run My personal git server -
[https://git.bugswriter.com](https://git.bugswriter.com).

It was so easy to do, I had no reason for not doing this.
I'll recommend every programmer to setup his own git server. As a programmer code we write is the most important thing for us. 
We should have full control over our repositories.
<!-- more -->
I remember Github once deleted one of my project's codebase for some stupid policy. No one read policies, most of the time when you do, you already lost the battle. You will never know - what happen when.


## Goal
### 1. Setting up a git server
First, we just need a server to store our git repos, it can be a VPS or simple Rasberry Pi. We will use ssh key for authentication. Git itself provide functionalities to sync repos between local and remote computer.

### 2. Setting up a web frontend
The idea of our git server is not to have something like github which allow me to create issues, PR, threads etc. Just because I have a personal git server, doesn't mean I am just bound to use it. I can add [Source Hut](https://sr.ht), [Gitlab](https://gitlab.com), [Github](https://github.com), [Bitbucket](https://bitbucket.com) etc. other remotes too in my git repos.
Additionally I want a nice read only web frontend, so I can look at my code anytime from any browser.
> **Note** -
> It's just my personal preference, it doesn't mean you can't have those fancy features.
> You can host something like gitlab, gittea to make your personal git server as powerful as any modern service.

## Lets go !
I will recommend [this guide](https://git-scm.com/book/en/v2/Git-on-the-Server-Setting-Up-the-Server) by git documentation. For better understanding.
The idea is to make a git user and get ssh access via key for it.
Get a shell on your server and
1. First create a user `git`.
2. Switch user to `git`.
3. Create a directory `.ssh` on home (`~/`).
4. Change directory permission to `700`.
5. Create a `authorized_keys` file with permission `600`.

```sh
$ sudo adduser git
$ su git
$ cd
$ mkdir .ssh && chmod 700 .ssh
$ touch .ssh/authorized_keys && chmod 600 .ssh/authorized_keys
```
The purpose of doing all this is to just create a ssh access of git@our-server-ip-or-domain for us.
Now we need to copy our public ssh key, which is mostly found in `~/.ssh/id_rsa.pub`.
If you have no `~/.ssh` may be you never had any ssh key.
For that you can run `ssh-keygen` to create a new ssh key pair.

```sh
$ cat ~/.ssh/id_rsa.pub | xclip -sel c
```
Once you copied your ssh public key, paste it in `git@yourserver:~/.ssh/authorized_keys` (The file you just created).
This will tell ssh on your server to trust anyone who have the private key of this public key your just pasted.

Boom!
That's it.

Now you have everything set. Now lets create a new test repo.
In order to backup any repo on your server, first you have to run this command -
```sh
$ git init --bare test.git
```
You might already familiar with `git init` (it's just to initizalize a new git repo).
What`--bare` flag do is, it tell git to make a headless repo. We don't need to browse any files. We just need the content of
`.git` directory.

After this...
Time to push a repo.
Currently our repo on server is empty.
Run this command on your local repo.
```sh
$ git remote add mygit git@yourserverip-or-domain.tld:~/test.git
```
This will add a remote for your `mygit` server.
```sh
$ git push mygit master
```
Now just push your branch to your git server remote.
