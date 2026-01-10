from werkzeug.security import generate_password_hash
import mysql.connector


password = generate_password_hash("123")
conn=mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="project_crud",
    auth_plugin='mysql_native_password'
)
cursor=conn.cursor()
cursor.execute("INSERT INTO users (username,  password_hash) VALUES (%s, %s, %s)",
    ("Carlos", password))

conn.commit()
cursor.close()
conn.close()

print("User created successfully.")
