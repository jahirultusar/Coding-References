""" This is a project workflow guide for any flask application development, test and deployment """

steps: 
      
      1. setup/install virtual environment (venv) in local os (use Linux! FU** Windows and Mac) 
      2. activate venv //from this point all installation and development in venv
      3. install desired python version (preferably python3)
      4. install flask
      5. install git
      6. add .gitignore and readme file and add repo to github (also add venv directory in .gitignore otherwise unnecessary files will be in local git repo)
      7. add .env and add it to .gitignore
      8. templates folder for serving html files
      9. static folder to serve static files
      10. build build build
      11. test test test
      12. setup remote server (preferably in venv again) when development is ready to deploy via ssh (Linux please)
      13. use nginx - gunicorn or apache - uWsgi server combination to test and serve our app
      14. test the server with a test flask app 
      15. if test app is working then configure and deploy local files to remote develpment (not final deploy!)
      16. test test test
      17. once everything is working the change development to deploy environment
      18. test test test
      19. test test test
      20. if you can do all those and app is working then take a bow
      
      now we need to configure custom domain and SSL, but before that go for a walk you maniac!
