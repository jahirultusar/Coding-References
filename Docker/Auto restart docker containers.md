# Auto restart process

If your containers are not starting automatically after a server restart, you can configure Docker to start the containers automatically by enabling the Docker service to start at boot. Here's how you can do it:

SSH into your remote server.

Start the Docker service manually to ensure it is running:

bash
Copy code
sudo service docker start
Enable the Docker service to start at boot:

bash
Copy code
sudo systemctl enable docker
Restart your server:

bash
Copy code
sudo reboot
After the server restarts, Docker should automatically start, and your containers should also start running. You can verify the status of your containers using the sudo docker ps command.

If the containers are still not starting automatically, you can configure them to start on boot by using Docker's restart policies. Modify the docker run command for each container and add the --restart always flag. For example:

bash
Copy code
sudo docker run -d --restart always --name mysql-container mysql:5.7
sudo docker run -d --restart always --name wordpress-container -p 8181:80 wordpress:latest
With the --restart always flag, Docker will automatically start the containers if they are not running or if the Docker service is restarted.

By following these steps, you should be able to ensure that the Docker service and your containers start automatically after a server restart.
