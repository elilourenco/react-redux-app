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

@app.route('/about')
def about():
    return "This is the about page."        


@app.route('/contact')          

def contact():
    return "This is the contact page."


@app.route("/clientes/novo", methods=["GET", "POST"])
def novo_cliente():
    if "user_idd" not in session:
        flash("Please log in to add a new client.", "warning")
        return redirect("/login")
    if request.method == "POST":
        nome = request.form["nome"]
        email = request.form["email"]
        telefone = request.form["telefone"]

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO clientes (nome, email, telefone) VALUES (%s, %s, %s)", (nome, email, telefone))
        conn.commit()
        cursor.close()
        conn.close()

        flash("Cliente adicionado com sucesso!", "success")
        return redirect("/clientes")

    return render_template("new_client.html", username=session.get("username"))

#Listar clientes
@app.route("/clientes") 
def listar_clientes():
    if "user_idd" not in session:
        flash("Please log in to view clients.", "warning")
        return redirect("/login")

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM clientes")
    clientes = cursor.fetchall()
    cursor.close()
    conn.close()

    return render_template("list_clients.html", clientes=clientes, username=session.get("username"))


#Edditar clientes
@app.route("/clientes/editar/<int:id>", methods=["GET", "POST"])
def editar_cliente(id): 
    if "user_idd" not in session:
        flash("Please log in to edit clients.", "warning")
        return redirect("/login")

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    if request.method == "POST":
        nome = request.form["nome"]
        email = request.form["email"]
        telefone = request.form["telefone"]

        cursor.execute("UPDATE clientes SET nome=%s, email=%s, telefone=%s WHERE id=%s", (nome, email, telefone, id))
        conn.commit()
        flash("Cliente atualizado com sucesso!", "success")
        return redirect("/clientes")

    cursor.execute("SELECT * FROM clientes WHERE id=%s", (id,))
    cliente = cursor.fetchone()
    cursor.close()
    conn.close()
    
    if not cliente:
        flash("Cliente não encontrado.", "danger")
        return redirect("/clientes")

    return render_template("edit_client.html", cliente=cliente, username=session.get("username"))

#Aparagar clientes
@app.route("/clientes/apagar/<int:id>", methods=["POST"])
def apagar_cliente(id):
    if "user_idd" not in session:
        flash("Please log in to delete clients.", "warning")
        return redirect("/login")

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM clientes WHERE id=%s", (id,))
    cliente= cursor.fetchone()
    conn.commit()
    cursor.close()
    conn.close()
    
    if not cliente:
        conn.close()
        return "cliente não encontrado.", 404

    flash("Cliente apagado com sucesso!", "success")
    return redirect("/clientes")
    
    if request.method == "POST":
        cursor.execute("DELETE FROM clientes WHERE id=%s", (id,))
        conn.commit()
        flash("Cliente apagado com sucesso!", "success")
        return redirect("/clientes")
    
    conn.close()
    
    return render_template("delete_client.html", cliente=cliente, username=session.get("username")) 




@app.context_processor
def inject_user():
    return dict(logged_in="user_idd" in session )


if __name__ == "__main__":
    app.run(debug=True)  


