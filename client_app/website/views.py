from flask import Blueprint,render_template,request,jsonify
from flask_login import login_required,current_user
from .models import Note,User
from . import db
import json


views = Blueprint('views', __name__)

@views.route('/',methods=['GET', 'POST'])
@login_required
def home():
    all_data = User.query.all()
    return render_template("userslist.html",users=all_data)


@views.route('/delete-note', methods=['POST'])
def delete_note():
    note = json.loads(request.data)
    noteId = note['noteId']
    note = Note.query.get(noteId)
    if note:
        if note.user_id == current_user.id:
            db.session.delete(note)
            db.session.commit()
    return jsonify({})


