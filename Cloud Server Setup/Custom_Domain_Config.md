"""This is a walkthrough of customr domain configuration after cloud server setup"""

DNS or Domain Name System is a naming system or identifier for web, site, app and services. like google has an address: 8.8.8.8
In this document I will explain the checklist and the process of acquiring an IP Address for a web app.

# DNS Set-Up Checklist

  step 1: Register (purchase) a domain name if you haven't already.
          
          After you purchase a domain, log in to your domain register,s control panel and set the name servers for your domain name to 
          the desired name servers. name servers usually provided by hosting company like AWS, Godaddy etc
          
  step 2: Set your domain name to desired server where your web app is. It may take upto 24 hours or more for the change to take effect.
          
          change A record @ to desired domain. (IPV4)
          change A record www to same desired domain.(IPV4)
          change AAAA (IPV6) if available for both @ and wwww
          change CNAME point to desired DNS name provided by server side
  
  
  step 3: Use the DNS manager to add some basic DNS records.
          
          change server_name in both sites-available and site-enable config file for nginx server in 
            
            etc/nginx/site-available/your_config_file
              sudo nano your_config_file
              
            etc/nginx/site-available/your_config_file
              sudo nano your_config_file
              
  step 4: Set reverse DNS (if needed)
          
          set current assigned static ip address reverse DNS to your domain like example.com
          
  step 4: If you have any special DNS needs, such as using a third-party email server, add additional DNS records to create a custom configuration.
