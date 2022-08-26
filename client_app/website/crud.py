from flask import Blueprint,render_template,request,flash,redirect, url_for
from .models import User
from werkzeug.security import generate_password_hash
from . import db
from flask_login import login_required,current_user

crud = Blueprint('crud', __name__)

@crud.route('/add-user', methods=['GET','POST'])
@login_required
def add_user():
    if request.method == 'POST':
        email = request.form.get('email')
        firstname = request.form.get('firstname')
        lastname = request.form.get('lastname')
        profil = request.form.get('profil')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        user = User.query.filter_by(email=email).first()
        if user:
            flash('Cet email est déjà utilisé.', category='error')

        if len(email) < 4:
            flash('l\'adresse email doit etre composée de plus de 4 caractères.', category='error')
        elif len(firstname) < 2:
            flash('le prénom doit etre composé de plus d\'un caractère.', category='error')
        elif len(lastname) < 2:
            flash('le nom doit etre composé de plus d\'un caractère.', category='error')
        elif password1 != password2:
           flash('les mots de passe ne correspondent pas.', category='error')
        elif len(password1) < 7:
           flash('le mot de passe doit etre composée d\'au moins 7 caractères.', category='error')
        else:
            new_user = User(email=email, first_name = firstname,last_name=lastname, password=generate_password_hash(password1, method='sha256'),profil=profil)
            db.session.add(new_user)
            db.session.commit()
            flash('Utilisateur ajouté', category='success')
    
    return redirect(url_for('views.home'))
   
    


    

           

    
    