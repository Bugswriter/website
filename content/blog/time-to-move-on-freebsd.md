+++
title = "Time to move on FreeBSD"
date = 2021-09-15
+++

First of all **FreeBSD or any BSD is not Linux or its distro**.
According to [freebsd.org](https://freebsd.org) -

> **FreeBSD is an operating system** used to power modern servers, desktops, and embedded platforms.
> A large community has continually developed it for more than thirty years. Its advanced networking,
<!-- more -->
> security, and storage features have made FreeBSD the platform of choice for many of the busiest web
> sites and most pervasive embedded networking and storage devices.

![FreeBSD devil logo](/images/freebsd-devil.jpg)

## Why FreeBSD over GNU/Linux?

-   **FreeBSD is an operating system**. This is the first selling point for me. Linux is just a kernel and all the
    other components like GNU Utils and GUI interfaces in the end of the day provides a working operating system (_aka Distro_),
    But it feels hacky. On the other hand, FreeBSD development is not just a component but the entire OS. Which
    means things work very well with each other. That's what I understand from all the reading and researching I
    did in past few weeks on FreeBSD.

-   FreeBSD mailing list is limited to some professional, which is far better than GNU/Linux situation.
    Now if you don't know anything about Linux development, well even I don't. But always I get this sense "it's not good".
    Anyone can join the team and I feel a lot of mess in the development process.
    Now since I am just a user and not a full time kernel developer, I don't really want to comment much on this.
    But here is the [link of a github repo](https://github.com/corollari/linusrants), which shows how messed things get sometimes.
    Let me quote Linus Torvarlds one line from the mailing list -

    > _What the F\*CK, guys? This piece-of-shit commit is marked for stable, but you clearly never even test-compiled it, did you?_
    >
    > --- Linus Torvalds

    I believe FreeBSD development process is much better because it is done by CS field experts, which just make things much
    more reliable.
    We all know Linux kernel is getting bloat and more they try to fix this more bad things get. I don't remember the year, but
    Linus Torvalds himself said "Things are getting out of hand". Don't forget Linux is a project which was started by just a guy
    who wanted his own UNIX.

-   In comparision to linux performance wise FreeBSD is better, faster, stable, secure and reliable. Isn't that enough for leaving GNU/Linux
    and moving to FreeBSD?

-   FreeBSD have much cleaner file organization in comparison to Linux.
    If you run `ls /bin` in FreeBSD you only find programs which is vital for your OS and on `ls /sbin` you will find rest of "must to have programs" for your OS.
    User programs are always separated from base operating system. Same thing goes with config files too. I love this cleanliness.


![FreeBSD devil logo](/images/freebsd-watch.jpg)

## Why not OpenBSD or NetBSD?

OpenBSD is know for security, but for the sake of security it is slower than FreeBSD. Also it's not very user-friendly. It's good for servers, but
I think FreeBSD is much more focused to being good desktop alternative. Which makes it my first choice.
_Also I like the FreeBSD logo more than OpenBSD logo_.
Now Some people can argue on this and will make some valid point. But I will give FreeBSD a shot first.
May be in future I try OpenBSD on my server.


## Issues I am expecting

The very common issue on any BSD is application support.

-   Will I get all the softwares I need?
-   Will I get proper updates?
-   Even If I get updates will I get dependencies (its updates)?
-   Hardware support?

I believe I will, Because I know how to live with basic command line tools.
My requirements are very limited, I hardly use any GUI program. I read some articles where
soydevs were ranting about why they hated FreeBSD because they can't run atom editor.
I think this is not a issue of FreeBSD, the community is excellent and I believe I should
choose FreeBSD because it's good, instead of hating it for not having enough users.
