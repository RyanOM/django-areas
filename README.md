# django-areas
GMaps API testdrive powered by Django

### Create the local MySQL Database

Open mysql using the root account:

```
$ mysql -u root -p
```

Now that we are inside the mysql console with root privileges, we will create a database, a user, and grant all privileges to that user:

```
CREATE DATABASE djareas_db;
CREATE USER 'djareas'@'localhost' IDENTIFIED BY 'djareas_pw';
GRANT ALL PRIVILEGES ON djareas_db.* TO 'djareas'@'localhost';
FLUSH PRIVILEGES;
quit;
```

### Add `admin` user

To create an admin user, open a shell with:

```
python manage.py shell
```

then paste:

```py
from django.contrib.auth.models import User
user=User.objects.create_user('admin', password='admin')
user.is_superuser=True
user.is_staff=True
user.save()
```
