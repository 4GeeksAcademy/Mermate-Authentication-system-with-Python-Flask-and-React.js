"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

#PRINCIPIO CÓDIGO
@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#FIN CÓDIGO

#test otra ruta

@api.route('/hello2', methods=['POST', 'GET'])
def handle_hello2():

    response_body = {
        "message": "Hello! I'm a message 2"
    }

    return jsonify(response_body), 200

# create_access_token() function is used to actually generate the JWT.

# LOGIN

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user=User.query.filter_by(email=email).first()
    print(user)

    if user == None:
        return jsonify({ "msg":"could not find email"}),401
    if email != user.email or password != user.password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

#SIGNUP
@api.route("/signup", methods=["POST"])
def signup():
    body = request.get_json()
    print(body)

    user=User.query.filter_by(email=body["email"]).first()
    print(user)

    if user == None:
        user=User(email=body["email"], password=body["password"], is_active=True)
        db.session.add(user)
        db.session.commit()
        response_body={
            "msg":"User created"
        }
        return jsonify(response_body),200
    else:
        return jsonify({"msm" :" there is already an user created with that email"}),401
   

   
