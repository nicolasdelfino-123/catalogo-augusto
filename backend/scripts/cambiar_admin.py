# Script para cambiar el email y la contraseña de un usuario admin
# Uso: Ejecutar con el entorno de Flask configurado (local o en el VPS)

from app import create_app, db, bcrypt
from app.models import User

# Datos actuales y nuevos
desde_email = "shatha@shatha.com"
nuevo_email = "demo@demo.com"
nuevo_password = "demo1234"

app = create_app()

with app.app_context():
    user = User.query.filter_by(email=desde_email).first()
    if not user:
        print(f"No se encontró el usuario con email {desde_email}")
    else:
        user.email = nuevo_email
        user.password = bcrypt.generate_password_hash(nuevo_password).decode('utf-8')
        db.session.commit()
        print(f"Usuario actualizado: {nuevo_email} (contraseña cambiada)")
