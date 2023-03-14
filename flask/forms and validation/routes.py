""" Sample Form Routes """

from flask import Flask, render_template, request, redirect, url_for, session, flash, send_from_directory
from forms import RegistrationForm, LoginForm


app = Flask(__name__)

app.config['SECRET_KEY'] = "RanDomStRiNgMakeSureItIsVeryStrong"

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    return render_template('register.html', title='Register', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = RegistrationForm()
    return render_template('login.html', title='Login', form=form)

if __name__=='__main__':
    app.run(debug=True)
