# To uninstall and delete Apache2 from your system, you can follow these steps:

> Stop the Apache2 service:

    sudo systemctl stop apache2
  
> Disable the Apache2 service to prevent it from starting on boot:

    sudo systemctl disable apache2

> Remove Apache2 and its dependencies using the package manager (apt):

    sudo apt remove apache2
    
> Purge any remaining configuration files for Apache2:

    sudo apt purge apache2

> Clean up any residual files and dependencies:

    sudo apt autoremove
    
> Verify that Apache2 is uninstalled by checking its status:

  sudo systemctl status apache2


* If Apache2 is no longer installed, you should see a message indicating that the service is not found or not installed.

Please note that uninstalling Apache2 will remove all its files and configurations from your system. Make sure you have a backup of any important data or configurations before proceeding with the uninstallation.
