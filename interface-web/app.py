from flask import Flask,render_template,request,redirect,session, flash
import mysql.connector
from werkzeug.security import check_password_hash


#ligação a base de Dados db = mysql.connector.connect(
def get_db_connection():
    return mysql.connector.connect(

    host="localhost",   
    user="root",    
    password="",
    database="project_crud",
    auth_plugin='mysql_native_password'
    
)


app = Flask(__name__)  
app.secret_key="segredo_super_secreto" 


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/home")
def home():
    conn=get_db_connection()
    cursor=conn.cursor(dictionary=True)
    cursor.execute("SELECT nome,email  FROM clientes")
    dados=cursor.fetchall()
    cursor.close()
    conn.close()
    return render_template('index.html', dados=dados)

@app.route('/about')
def about():
    return "This is the about page."        


@app.route('/contact')          

def contact():
    return "This is the contact page."

@app.context_processor
def inject_user():
    return dict(logged_in="user_idd" in session )


if __name__ == "__main__":
    app.run(debug=True)  


