""" This is a step by guide to configure, test and deploy flask app to a cloud server """ 
""" These steps may vary slightly depending on hosting provider but mostly same for all linux based servers """ 
""" Credit goes to brilliant teacher Corey Schafer """


Part 1: Server Configuration
#####  for Nginx-Gunicorn server For Linux ###
    
#### Configure Linux sever ####
    
step 1.1: open up local ssh shell/ unix terminal/ putty(for windows)

step 1.2: login to remote server via ssh
    cmd: ssh username@remote_host_ip
      --> then type password on prompt
step 1.3: after logging in do a system wide update and upgrade
    cmd: apt update && apt upgrade (first time recommended)
    cmd: sudo apt update
        also can do a cheeky sudo reboot after that just in case ;)
    
step 1.4: set hostname
    cmd: hostnamectl set-hostname [hostname ie: flask-server]
        note:type hostname to double check what hostname is created

step 1.5: add hostname to the host file
    first open host file using nano
        cmd: nano /etc/hosts
        then under the localhost IP(127.0.0.1) in new line write VPS or dedicated server IP address provided by cloud provider and <tab> newly_created_hostname. like 00.00.00.1 <tab> your_newly_created_hostname ie: flask-server
        then ctrl+x to back out and save on prompt and then ctrl+x to back in the shell again
 
step 1.6: add a limited user with sudo privilege (currently we are on root!)
    cmd: adduser [username]
        --> then type a strong password on prompt followed by optional information
    
    after that add newly created user to the sudo group
    cmd: adduser [username] sudo
    
    **now log back in the server with newly created sudo user
    cmd: exit (to logout from the server)
    
    then log back in with new sudo user
    cmd: ssh [new_sudo_user]@[ip_address], the new user [password] on prompt


   
Part 2:  SSH key based authentication setup for remote server
""" This step is optinal but necessary for security, against brute force attack and also saves time """  


                    ### Manual steps(recommended): for linux local machines ###
                    
step 2.1: create private key (for local machine) and public key (remote or even virtual machine)
    generate ssh key (local machine terminal):
        cmd: ssh-keygen -t rsa -b 4096
            --> key will generate with a fingerprint id and a random image in local default ~/.ssh directory
            --> now if we cd into cmd: cd ~/.ssh directory and cmd: ls -la we will see id_rsa private key and id_rsa.pub as public key 

step 2.2: push ssh public key to remote sever
    --> first check if we are in remote server's home dircectory by cmd: pwd or just cmd: cd to go to home directory
    --> then make new .ssh directory in remote home directory by cmd: mkdir .ssh
    
    now we are gonna push our locally created ssh public key to remote .ssh directory from local .ssh directory. 
    **we are gonna use scp command which allows us to copy file from our local terminal.
        ** first we need to make sure we are in .ssh directory in our local machine
            then type cmd below in our local machine
                cmd: scp ~/.ssh/id_rsa.pub [user_name]@[remote_ip]:/home/[username]/.ssh/[uploaded_key].pub 
                    ** make sure we check our cmd above precisely and according to our own usernames and directories 

    now if we check in our remote connected shell by cmd: ls .ssh/ we will see uploaded_key.pub is created and uploaded
    
step 2.3: append the newly uploaded key as authorized key file
    cmd: cat ~/.ssh/uploaded_key.pub >> ~/.ssh/authorized_keys
    ** command above will append/add the public key to authorized_keys file(no file extension needed for unix servers)
    ** now if we cmd: cat ~/.ssh/authorized_keys we will see the public key that just added to the authorized_key file
    
step 2.4: now we need to setup correct permission for our public key .ssh folder(code=700) and authorized_key file(code=600)
    --> first we set permission 700 to ~/.ssh/ folder by
        cmd: chmod 700 ~/.ssh/ (this will give the folder necessary 700 permission to .ssh folder)
    
    --> then we will set permission 600 to all the files in .ssh folder by
        cmd: chmod 600 ~/.ssh/*
        
        
""" now we should be able to login from local to remote system without password. 
    To double chek logout from remote machine by cmd: exit and log back in with only ssh [username]@[remote_ip]
    We should be logged in without any password.
    
    ***important: we should change PermitRootLogin to no for added layer of security if necessary in config file
"""

    ## additional steps for maximum security and force all user to log in with ssh key and not with any password on remote server ##
        
        ### *** important: Changing config file incorrectly might cause fatal errors in the server!!! *** ###
        
        
    ** First we need to backup remote ssh config file for obvious reason**
    step 2.5: backing up ssh config file by copying it to same folder
        cmd: sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
            --> command above will make a backup of config file
    
    step 2.6: now change the config file with nano editor
        cmd: sudo nano /etc/ssh/sshd_config
        
        ** after that config file will open in nano editor and we need to find PasswordAuthentication and change it from yes to no
            and uncomment it if it was commented via deleting # sign in front. then ctrl+x and save it. 
            note: we can add PasswordAuthentication no line if it isnt there! ** 
            
    step 2.7: now we need to restart the ssh service to activate the changes by command
        cmd: sudo service ssh restart
        
    
                    
                    ### Easy steps(lazy way): for linux local machines or for Mac systems via Homebrew package manager ###
                    
    
    * for local Mac system install homebrew and then go .ssh folder and cmd: brew install ssh-copy-id --> to access the ssh key gen
    ** then cmd: ssh-copy-id [username]@[remote_ip] to copy the public key
    
    *** then ssh into remote machine ssh [username]@[remote_ip] and we should be able to log in without making any ssh file in local machine or password
    **** we still need to manually disable PasswordAuthentication to no
    



Part 3: configure remote host firewall 

step 3.1: we are gonna install ufw or "uncomlicated firewall in remote host
    cmd: sudo apt install ufw
    
    --> to check if ufw is active after installation 
        cmd: sudo ufw status 
        --> if not active enable by
            cmd: sudo ufw enable
            
    now we can see the status of our firewall rules and manipulate them to our security need
    
step 3.2: firewall rules -->
    cmd: sudo ufw default allow outgoing 
    cmd: sudo ufw dafault deny incoming
    cmd: sudo ufw allow ssh
    
    *** for setting up development test server port 5000 
        cmd: sudo ufw allow 5000
        --> now development port 5000 is active 
        
step 3.3: save and enable firewall rules
    cmd: sudo ufw enable


Part 4: Test and deploy the flask app
step 4.1: Get the environment ready. If local app is in a virtual environment(which is highly recommended)
          then we need to make a requirements.txt file but before that we can check all the dependencies 
          in our virtual environment. To do that type the following command in an active virtual environment
          
          cmd: pip freeze
          --> this command will show us all the dependencies we are using in our local virtual environment
          
step 4.2: To make an requirements.txt file in local Linux/Mac environment

    cmd: pip freeze > requirements.txt
    --> this command will make a requirements.txt file in our local project directory
    (IMPORTANT: We need to make sure our our virtual envrionment is active otherwise all the Global dependencies/libraries will show up in requiremnets.txt)
    
step 4.3: now we need to upload all the files from local virtual environment to remote server home directory. 
            
            There are two ways to do it:
                #1: through SSH CLI using command
                    cmd: scp -r local_dircetory_project_folder remote_cloud_user@remote_IP_address:~/ (~/ remote user home folder)
                    
                    example: scp -r Desktop/Project_Folder tusar@45.33.123.214:~/
                    --> this command will copy everything local to remote folder. check th ls command in remote server if project directory copied as intended
                    
                #2: through FTP/SFTP protocol like Filezilla
                    for this we need remote host user name, port(22), password

step 4.4: now in the ~/ (user directory) we need to install python3 and pip (not venv yet, it's on next step. also using python3 usually not pyhon2)
    cmd: sudo apt install python3-pip

step 4.5: now install virtual environment or venv on remote ~/ server location
    cmd: sudo apt install python3-venv
    
step 4.6: create venv on remote server
    cmd: python3 -m venv venv_location/venv_name(I always use venv as name)
    
    example: python3 -m venv venv (in remote project directory) check ls command in directory to see if venv created

step 4.7: activate virtual environment in remote
    cmd: source venv/bin/activate
    --> virtual environmanet should be activated now. we will see (venv) at the left side of our CLI prompt if it is activated
    --> also we need to make sure we wre on our right directory(where project root files are like app.py, requirements.txt etc we can check it again by ls command)

step 4.8: now lets install all the dependencies from the uploaded requirements.txt
    cmd: pip install -r requirements.txt
    --> this will install all the packages/dependencies we need for the project
    
##### next step is to grab environment veriable/secret keys from local machine ####
    ref: https://www.youtube.com/watch?v=goToXTC96Co&ab_channel=CoreySchafer timestamp: 37:30


#### now lets test the remote server ####

step 4.9: lets see what is in our main_app.py file has by
    cmd: cat app_name.py
    
    --> this will show us the file content in .py file. NOTE: this is a nice trick to see quickly the file contents which is hugely useful in times
    
    after that we need to test the server by temporarily exporting the project to see from outside world.
    
    cmd: export FLASK_APP=run.py
    cmd: flask run --host=0.0.0.0 
    
    note: both of those command has to be exactly as showed here. if everything is correct this commands will spin up the server in http://0.0.0.0:5000/ 
    
    now if we go to our ip_address:5000 we will see our project is working
 
 step 4.10: now let's install nginx aand gunicorn
    
        / we need to make sure we are still in our virtual environment while we do these
 
    cmd: sudo apt install nginx --> is gonna handle our web server like static files etc
         pip install gunicorn --> is gonna serve our python scripts
         
step 4.11: now let's confugure nginx
    
        / first we need to remove default nginx sites-enabled config file. usually the directory for it is: /etc/nginx/sites-enabled/default we can also check it before we remove it by cd into that directory
        
    cmd: sudo rm /etc/nginx/sites-enabled/default
    
        / now lets create a new config file
    
    cmd: sudo nano /etc/nginx/sites-enabled/pick_any_name
    
        / in this config file we define our server and static file locations for nginx as follows
        
            server {
                    listen 80;
                    server_name cloud/our_ip_iddress;
                    
                    location /static {
                        alias /project_path/static_folder_directory; --> we can also use root instead of alias but in some specific cases. also writing with forward slash / after is recommended in some cases. like /static/
                    }
                    
                    location / {                          --> this will handover http requests to gunicorn
                        proxy_pass http://localhost:8000; 
                        include /etc/nginx/proxy_params;
                        proxy_redirect off;
                    }
            }
              
 
    !DEBUG: ok so in this step I came across an annoying problem where my site static files were not serving correctly but my html files were! 
            After few hours of debugging and thorough check I found out that it was Nginx which had not the right permission to read the static files! weird eh?
            so I have to give right permission to Nginx. First I had to find out the Nginx_user_name in nginx.conf (usually this config file lies in /etc directory)
            also usually the user name is www-data

            Since Nginx is handling the static files directly, it needs access to the appropriate directories. 
            We need to give it executable permissions for our home directory. The safest way to do this is to add the Nginx user to our own user group. 
            We can then add the executable permission to the group owners of our home directory, giving just enough access for Nginx to serve the files:
    
                cmd: sudo usermod -a -G your_user www-data 

                --> this will add the Nginx user to our own user group
                --> example: sudo usermod -a -G tusar www-data

                cmd: sudo chown -R :www-data /path/to/your/static/folder

                --> this will give Nginx correct permission to read and serve the static files
                
                also I needed to fix site-enabled section in etc/nginx file to setup the location of static file  
            

step 4.12: now we can update the ufw ports
    
        / first allow port 80
        cmd: sudo ufw allow 80
        
        / then disable port 5000
        cmd ufw delete allow 5000
    
        / the enable/update the new ufw rules
        cmd: sudo ufw enable
        
        // then restart the nginx server
        cmd: sudo systemctl restart nginx --> this will start nginx server but not gunicorn! next step ¬


step 4.13: now lets run gunicorn

        cmd: gunicorn -w 3 app:app
        
        // ok so here is the explanation of it. 
        
        gunicorn = gunicorn server (duh!)
        -w = workers 
            --> sounds prehistoric but thats how it is. simple but vauge :( so in gunicorn architecture it means that there is a central master process that manages a set of worker processes. 
                The master never knows anything about individual clients. All requests and responses are handled completely by worker processes.
                to know more plz visit: https://docs.gunicorn.org/en/stable/design.html#:~:text=Gunicorn%20is%20based%20on%20the,handled%20completely%20by%20worker%20processes.
                
        3 = worker numbers
            --> the way we need to calculate the worker numbers are: 
                -w = (2 x number of our cloud virtual machine core) + 1
                  so -w = 3 (in my case)
                  
                  --> to find out yours just do:
                      cmd: nproc --all
                  
        app: = name of our main script like app.py/main.py etc in my case app.py
        
        :app = the variable name that we used to create the app. like
        
            app = create_app()

    / vola! now everythin is working! but it's not it! cause we are still in development not production.



###########################################

Part 5: Production Server and final touches

step 5.1: now we need to configure gunicorn to auto start and restart. we were doing manually thus far. 
          we are gonna use a software called "SUPERVISOR" for this job

          cmd: sudo apt install supervisor

step 5.2: now we need to setup a configuration file for supervisor
          
          cmd: sudo nano /etc/supervisor/conf.d/give_it_a_file_name.conf --> this will create a blank config file
          
step 5.3: in the newly created config file, we need to declare few things like

        [program:give_any_name]
        directory=project_directory/
        command=project_directory/venv/bin/gunicorn -w 3 app:app
        user=user_name
        autostart=true
        autorestart=true
        stopasgroup=true
        killasgroup=true
        stderr_logfile=/var/log/pick_a_relatabel_name/error_file.err.log
        stdout_logfile=/var/log/same_name_as_last_line/error_file.out.log

        to get a full picture plz go to: <I will find a refernce link> 


step 5.4: now lets create directory for log files
        
        cmd: sudo mkdir -p /var/log/same_name_as_var_log_file 
        
        / then make error files to this directory we defined earlier in supervisor config file
        
        cmd: sudo touch /var/log/same_directory_we_created_last_command/error_file.err.log
        cmd: sudo touch /var/log/same_directory_as_last_command/error_file.out.log
        
        !DEBUG: please check carefully that defined logfile links and directory is the same as we created. easy mistake can be made here 
        
        / then restatrt the supervisor
        
        cmd: sudo supervisorctl reload
        
        / now check the app if its running in the server! mine does.. YEEEEHHHAAA
        / to be more precise, restart the virtual machine (sudo reboot) and see if it's still running. give it couple of minutes to reboot.
        
        
        THAT'S ALL! WELL DONE ME, err.. YOU and EVERYONE :)

#####  tips and tricks  #####

--> to change a password of root or any user type
    cmd: passwd [username]  
        username = root or created_user
    then change the password on prompt
