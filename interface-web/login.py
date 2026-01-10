



from flask import app, render_template, session, request, redirect, flash
import mysql.connector
from werkzeug.security import check_password_hash


@app.context_processor
def inject_user():
    return dict(logged_in="user_idd" in session )


@app.route("/")
def index():
    return render_template("index.html")
def get_db_connection():
    return mysql.connector.connect(

    host="localhost",   
    user="root",    
    password="",
    database="project_crud",        
    auth_plugin='mysql_native_password'
)

@app.route("/login", methods=["GET", "POST"])

def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
        user = cursor.fetchone()
        cursor.close()
        conn.close()

        if user and check_password_hash(user["password_hash"], password):
            session["user_idd"] = user["id"]
            session["username"] = user["username"]
            flash("Login successful!", "success")
            return redirect("/dashboard")
        else:
            flash("Invalid username or password.", "danger")
    return render_template("login.html")    


@app.route("/dashboard")
def dashboard():
    if "user_idd" not in session:
        flash("Please log in to access the dashboard.", "warning")
        return redirect("/login")
    return render_template("dashboard.html", username=session.get("username"))

@app.route("/logout")
def logout():
    session.clear()
    flash("You have been logged out.", "info")
    return redirect("/login")


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)