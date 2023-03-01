# Creating a Database and debug
  reference guide: https://www.postgresql.org/files/documentation/pdf/15/postgresql-15-A4.pdf
  
 The first test to see whether we can access the database server is to try to create a database. 

To create a new database, in this example named mydb, you use the following command:
  cmd: createdb mydb

// If this produces no response then this step was successful.

If we see a message similar to:

  error: createdb: command not found

then PostgreSQL was not installed properly. Either it was not installed at all or our shell's search path
was not set to include it. Try calling the command with an absolute path instead. 
find the path by command:
  cmd: which psql 
    // if postgres installed properly then this command will give us a path. then assign that path to create new db
    
  cmd: /usr/local/pgsql/bin/createdb mydb
    // The path at your site might be different. Contact your site administrator or check the installation instructions to correct the situation.
    
Another response could be this:
createdb: error: connection to server on socket "/
tmp/.s.PGSQL.5432" failed: No such file or directory

  //  Is the server running locally and accepting connections on that socket? 
  
    This means that the server was not started, or it is not listening where createdb expects to contact
    it. Again, check the installation instructions or consult the administrator.

Another response could be this:

createdb: error: connection to server on socket "/
tmp/.s.PGSQL.5432" failed: FATAL: role "joe" does not exist

where our own login name is mentioned. This will happen if the administrator has not created a
PostgreSQL user account for us. (PostgreSQL user accounts are distinct from operating system user
accounts.) We will need to become the operating system user under which PostgreSQL was installed (usually postgres) to
create the first user account. It could also be that we were assigned a PostgreSQL user name that is
different from our operating system user name; in that case we need to use the -U switch or set the
PGUSER environment variable to specify your PostgreSQL user name.
If we have a user account but it does not have the privileges required to create a database, we will
see the following:

createdb: error: database creation failed: ERROR: permission
 denied to create database

Not every user has authorization to create new databases. If PostgreSQL refuses to create databases
for us then the site administrator needs to grant us permission to create databases. Consult site administrator if this occurs. 

If we installed PostgreSQL ourselves then you should log in for the
purposes of this tutorial under the user account that you started the server as *

We can also create databases with other names. PostgreSQL allows you to create any number of
databases at a given site. Database names must have an alphabetic first character and are limited to
63 bytes in length. A convenient choice is to create a database with the same name as our current
user name. Many tools assume that database name as the default, so it can save us some typing. 

To create that database, simply type:
  cmd:  createdb
  
If you do not want to use our database anymore then we can remove it. For example, if we are the owner
(creator) of the database mydb, we can destroy it using the following command:
  cmd: dropdb mydb
  
(For this command, the database name does not default to the user account name. We always need to
specify it.) This action physically removes all files associated with the database and cannot be undone,
so this should only be done with a great deal of forethought.

More about createdb and dropdb can be found in createdb and dropdb respectively

# Accessing a Database

Once you have created a database, we can access it by:

• Running the PostgreSQL interactive terminal program, called psql, which allows us to interactively enter, edit, and execute SQL commands.

• Using an existing graphical frontend tool like pgAdmin or an office suite with ODBC or JDBC
support to create and manipulate a database.

• Writing a custom application, using one of the several available language bindings.

We probably want to start or can be activated for the mydb database by typing the command:
  cmd: psql mydb
  or 
  cmd: psql
  
In psql, you will be greeted with the following message:
psql (15.2)
Type "help" for help.
mydb=#
 
 The last line could also be:
 mydb=#
 
That would mean we are a database superuser, which is most likely the case if we installed the
PostgreSQL instance ourselves. Being a superuser means that we are not subject to access controls.


The last line printed out by psql is the prompt, and it indicates that psql is listening to you and that
you can type SQL queries into a work space maintained by psql. Try out these commands: 

  cmd: SELECT version();

   version
  -------------------------------------------------------------------
  -----------------------
   PostgreSQL 15.2 on x86_64-pc-linux-gnu, compiled by gcc (Debian
   4.9.2-10) 4.9.2, 64-bit
  (1 row)

  cmd: SELECT current_date;

   date
  ------------
   2016-01-07
  (1 row)

  cmd: SELECT 2 + 2;
   ?column?
  ----------
   4
  (1 row)

  The psql program has a number of internal commands that are not SQL commands. They begin with
  the backslash character, “\”. For example, we can get help on the syntax of various PostgreSQL SQL
  commands by typing:

  cmd: \h

  To get out of psql, type:

  cmd: \q

  and psql will quit and return you to our command shell. (For more internal commands, type \? at
  the psql prompt.) The full capabilities of psql are documented in psql.

TBC..
