# Here's a step-by-step solution to set up a WordPress blog using Docker alongside your existing Flask website:

1. Install Docker: If you haven't already done so, install Docker on your remote server by following the official Docker installation guide for your operating system.

2. Prepare the Server: Ensure that your server meets the requirements for running Docker and hosting websites. This includes having sufficient resources (CPU, memory, storage), a stable internet connection, and proper firewall configurations.

3. Configure Domain and SSL: Make sure your domain is properly configured and SSL secured using Let's Encrypt Certbot for your Flask website. This ensures that your website is accessible over HTTPS.

4. Create a Docker Network: Create a Docker network to allow communication between your containers. Run the following command:
   ```bash
   sudo docker network create wpnetwork
   ```

5. Run MySQL Container: Start a MySQL container to store the WordPress database. Run the following command:
   ```bash
   sudo docker run -d --network wpnetwork --name wordpressdb -e MYSQL_ROOT_PASSWORD=<your_db_password> -e MYSQL_DATABASE=wordpress -e MYSQL_USER=wpuser -e MYSQL_PASSWORD=<your_db_password> mysql:5.7
   ```

6. Run WordPress Container: Start the WordPress container, linking it to the MySQL container and exposing the necessary ports. Run the following command:
     !important: use 8181:80 port if you already have something running on your 8080!
   ```bash
   sudo docker run -d --network wpnetwork -p 8080:80 --name wordpress -e WORDPRESS_DB_HOST=wordpressdb -e WORDPRESS_DB_USER=wpuser -e WORDPRESS_DB_PASSWORD=<your_db_password> -e WORDPRESS_DB_NAME=wordpress wordpress:latest
   ```

8. Configure Nginx: Update your Nginx configuration to proxy requests to the WordPress container. In your existing Nginx configuration file (e.g., `/etc/nginx/sites-enabled/mywebsite`), add a new location block for the WordPress blog:
   ```
   location /blog {
       proxy_pass http://localhost:8080;
       include /etc/nginx/proxy_params;
       proxy_redirect off;
   }
   ```

9. Test and Restart Nginx: Test your Nginx configuration for any syntax errors, and if everything looks fine, restart Nginx to apply the changes. Run the following commands:
   ```bash
   sudo nginx -t
   sudo systemctl restart nginx
   ```

10. Access Your WordPress Blog: You should now be able to access your WordPress blog by visiting your domain followed by `/blog`, for example: `https://yourdomain.com/blog`.

That's it! You should now have your Flask website and WordPress blog running side by side on your remote server. Your Flask website will continue to be served by Nginx and Gunicorn, while the WordPress blog will be served by the WordPress container through Nginx reverse proxy.

Note: Make sure to replace `<your_db_password>` with your desired MySQL database password and adjust any other configurations as per your specific environment.
