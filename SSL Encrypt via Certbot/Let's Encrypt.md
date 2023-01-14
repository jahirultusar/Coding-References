""" 
    
    This is a document about how to encrypt a web app in Flask or any other 
    We will secure our app with Certbot by Let's Encrypt.
    
    Let's Encrypt is a non-profit certificate authority run by Internet Security Research Group 
    that provides X.509 certificates for Transport Layer Security encryption at no charge.
    
    To know more please go to: https://letsencrypt.org

"""

# Getting started 

    prerequisites:
                
                We are gonna need SSH access to our server.
                
step 1: To start with plz go to https://certbot.eff.org/
        
          in the section where it says my website is running... plz choose your server and software. 
          
          in this case I choose Nginx on Ubuntu 20
          
step 2: now certbot will give you couple of options like default or wildcard I am going with default

        now just follow along the steps certbot site is giving us
        
        # SSH into the server
            SSH into the server running your HTTP website as a user with sudo privileges.

        # Install snapd
            Usually Ubuntu 18.0+ comes pre installed with snapped. You'll need to install snapd and make sure you follow any instructions to enable classic snap support.
            
        # Ensure that your version of snapd is up to date
            Execute the following instructions on the command line on the machine to ensure that you have the latest version of snapd.

            cmd: sudo snap install core
            cmd: sudo snap refresh core
            
        # Remove certbot-auto and any Certbot OS packages
            If you have any Certbot packages installed using an OS package manager like apt, dnf, or yum, you should remove them before installing the Certbot snap to ensure that when you run the command certbot the snap is used rather than the installation from your OS package manager. The exact command to do this depends on your OS, but common examples are sudo apt-get remove certbot, sudo dnf remove certbot, or sudo yum remove certbot.

        # Install Certbot
            Run this command on the command line on the machine to install Certbot.

            cmd: sudo snap install --classic certbot
            
        # Prepare the Certbot command
            Execute the following instruction on the command line on the machine to ensure that the certbot command can be run.

            cmd: sudo ln -s /snap/bin/certbot /usr/bin/certbot
            
        # Choose how you'd like to run Certbot
            Either get and install your certificates...
              Run this command to get a certificate and have Certbot edit your nginx configuration automatically to serve it, turning on HTTPS access in a single step.

                cmd: sudo certbot --nginx
            
            Or, just get a certificate
              If you're feeling more conservative and would like to make the changes to your nginx configuration by hand, run this command.

                cmd: sudo certbot certonly --nginx
        # Test automatic renewal
            The Certbot packages on your system come with a cron job or systemd timer that will renew your certificates automatically before they expire. You will not need to run Certbot again, unless you change your configuration. You can test automatic renewal for your certificates by running this command:

            cmd: sudo certbot renew --dry-run
            
            The command to renew certbot is installed in one of the following locations:

            /etc/crontab/
            /etc/cron.*/*
            systemctl list-timers
            
            Confirm that Certbot worked
            To confirm that your site is set up properly, visit https://yourwebsite.com/ in your browser and look for the lock icon in the URL bar.
            
            
!DEBUG: now we need to chek if we are allowing port:443 to allow the traffic

    if yes then site should work securely
    if not then let's allow port 443

       cmd: sudo ufw allow https
       cmd: sudo systemctl restart nginx

     vola! now we are secured!
    
    Also if we test our nginx server by
        
        cmd: nginx -t
            / we might get some error which is normal
            
    we can check with sudo and it will work fine
    
        cmd: sudo nginx -t

     # That's all!       
