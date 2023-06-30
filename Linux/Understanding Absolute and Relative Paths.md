# Understanding Absolute and Relative Paths

There are two ways to identify paths:

# Absolute pathname

    An absolute pathname begins with the root directory (/) and follows the tree, branch by branch, until it reaches the desired directory or file. Absolute paths always start with /.


# Relative pathname

    A relative pathname starts from the present working directory. Relative paths never start with /.


Multiple slashes (/) between directories and files are allowed, but all but one slash between elements in the pathname is ignored by the system. While ////usr//bin is valid, it is seen as just /usr/bin by the system.

Most of the time, it is most convenient to use relative paths, which require less typing. Usually, you take advantage of the shortcuts provided by: . (present directory), .. (parent directory) and ~ (your home directory).

For example, suppose you are currently working in your home directory and wish to move to the /usr/bin directory. The following two ways will bring you to the same directory from your home directory:

Absolute pathname method
$ cd /usr/bin
Relative pathname method
$ cd ../../usr/bin

In this case, the absolute pathname method requires less typing and is less error-prone.

![LFS101x_2023_CourseImages-05](https://github.com/jahirultusar/Coding-References/assets/41430709/6d0e7c03-df76-4aba-a47c-b706f0aec68d)
