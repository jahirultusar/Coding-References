# Create a New User in PostgreSQL
# lingo {
  cmd: == command in shell
}
  

Note: The postgres user is the PostgreSQL superadmin created during the installation process.

Method 1: Using The createuser Client Utility
The first way to create a new user is with the createuser client utility. This method avoids connecting to the PSQL command-line interface.

To create the user, run the following command in the terminal:
  cmd: sudo -u postgres createuser <name>
  
The terminal does not output a message. To echo the server message, add the -e tag:
    cmd: sudo -u postgres createuser -e <name>

Method 2: Using PSQL
The second way to create a new user in PostgreSQL is through the interactive PSQL shell.

1. Switch to the postgres user and start the interactive terminal with:
  cmd: sudo -u postgres psql
  //The terminal session changes to postgres=#, indicating a successful connection to the Postgres shell.
 
2. Use the following statement to create a user:
  cmd: CREATE USER <name>
  
  //Running the command prints CREATE ROLE to the console. The reason is that the CREATE USER query is an alias for the following command:
  cmd: CREATE ROLE <name> WITH LOGIN;
  
  
# Create a Superuser in PostgreSQL
  
To create a superuser in PostgreSQL, you must have the superuser role. A database superuser bypasses all checks, which is dangerous from a security aspect.
  
There are two ways to make a superuser in PostgreSQL:
1. Create a superuser role through the client utility by adding the --superuser tag:
  cmd: sudo -u postgres createuser --superuser <name>;
  
2. Alternatively, use the CREATE USER psql statement:
  cmd: CREATE USER &lt;name&gt; SUPERUSER;
  
# Create a Password for the User

  Every database user must have a strong password to prevent brute force attacks. 
  PostgreSQL offers two methods to create a user with a password.
  
1. Use the createuser client utility and add the --pwprompt option to invoke a password creation prompt automatically:
  cmd: sudo -u postgres createuser <name> --pwprompt
  or
  cmd: sudo -u postgres createuser <name> -P
 
The terminal prompts to enter the password twice. The password itself or the length is encrypted and hidden when communicating with the server.

2. Use PSQL to create a user with a password:
  cmd: CREATE USER <name> WITH PASSWORD '<password>';
  
  // If the user already exists, add the password by using ALTER USER:
  cmd: ALTER USER <name> WITH PASSWORD '<password>';
  
  !mportnat:= Password management via PSQL comes with three security vulnerabilities:

**            The password is visible on the screen.
              Viewing the command history exposes the password.
              The information transmits as clear text without any encryption.**
  
  # User ROLES: Grant Privileges to the User
  By default, new users do not have any privileges except for login. 
  To add privileges when creating a user, run the createuser client utility in the following format:
  
  cmd: createuser <role_option> <user_name>
  or
  cmd: CREATE USER <name> WITH <option>;
  
  Below is a table with commonly used options for both methods.
  
  ![PSQL user roles](https://user-images.githubusercontent.com/41430709/222247824-c4db586e-ba61-4f6e-907a-317571133409.png)
  
  # List All Users in PostgreSQL
  An essential tool for user management in databases is listing all the users with their respective roles and privileges.

  To list all users in PostgreSQL, do the following:
  first go to main user:
  
    cmd: psql
  
  and then
  
    cmd: \du
  
  
  
  TBC.. 
  
  
  
  
  
  
  
  
  
  
  
