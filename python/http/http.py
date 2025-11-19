from flask import Flask, request # <-

app = Flask(__name__)


@app.route('/')
def home():
    return "Bem-vindo à página inicial!"


@app.route('/user/<username>')
def get_user_by_username(username):
    return f"Obteve o user pelo username {username}"


@app.route('/about/')
def about():
    return "Página About!"

@app.route('/login', methods=['GET', 'POST']) # <-
def login():
    if request.method == 'POST': # <-
        username = request.form['username']
        password = request.form['password']
        return f"Bem-vindo, {username}!"

    return '''
        <form method="POST">
            Username: <input type="text" name="username"> <br>
            Password: <input type="password" name="password"> <br>
            <input type="submit" value="Login">
        </form>
    '''



if __name__ == '__main__':
    app.run(debug=True)