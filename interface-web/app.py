from flask import Flask,render_template
import mysql.connector




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

@app.route('/')
def home():
    conn=get_db_connection()
    cursor=conn.cursor()
    cursor.execute('SELECT nome,email FROM clientes')
    dados=cursor.fetchall()
    cursor.close()
    conn.close()
    return render_template('index.html', dados=dados)      


if __name__ == '__main__':
    app.run(debug=True)     
    
    
@app.route('/about')
def about():
    return "This is the about page."        


@app.route('/contact')          

def contact():
    return "This is the contact page."
