Python Exceptions: DevOps Cheat Sheet

Use this guide to choose the right "warning light" for your automation scripts.

1\. `ValueError` (The "Wrong Content" Error)

Use this when the type is correct (e.g., it's a string), but the value is inappropriate.

-   Example: A password that is too short, or a username that contains illegal characters.
-   Your Code: You used this perfectly for "Text is too long!" ValueError Documentation

2\. `TypeError` (The "Wrong Type" Error)

Use this when someone passes an object of a type you didn't expect.

-   Example: Your script expects a list of IP addresses, but someone passes a single string.
-   Real World: "I expected a wrench, but you gave me a hammer." TypeError Documentation

3\. `FileNotFoundError` (The "Infrastructure" Error)

Crucial for DevOps! Use this when your script tries to read a config file or a log that isn't there.

-   Example: `raise FileNotFoundError("nginx.conf not found in /etc/nginx/")` FileNotFoundError Documentation

4\. `KeyError` or `IndexError` (The "Data" Error)

Use these when you're looking for something in a collection that doesn't exist.

-   KeyError: Looking for a key in a dictionary (like a JSON response from an API). KeyError Documentation
-   IndexError: Trying to access the 5th item in a list that only has 2 items. IndexError Documentation

5\. `RuntimeError` (The "Catch-all" Error)

Use this when something goes wrong that doesn't fit the other categories, usually during the execution of a complex process.

-   Example: A deployment script that times out waiting for a server to turn on. RuntimeError Documentation
