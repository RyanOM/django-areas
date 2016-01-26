# django-areas
django-areas is a web application based on the GMaps API and backend powered by Django.

---

## Setup the project environment

```bash
$ git clone https://github.com/RyanOM/django-areas.git
$ cd djareas
$ mkvirtualenv djareas
$ pip install -r requirements.txt
```

### Create the local MySQL Database

Open mysql using the root account:

```
$ mysql -u root -p
```

Now that we are inside the mysql console with root privileges, we will create a database, a user, and grant all privileges to that user:

```bash
CREATE DATABASE djareas_db;
CREATE USER 'djareas'@'localhost' IDENTIFIED BY 'djareas_pw';
GRANT ALL PRIVILEGES ON djareas_db.* TO 'djareas'@'localhost';
FLUSH PRIVILEGES;
quit;
```

### Build Database
````
python manage.py migrate
````

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


### Run Djareas Locally

```
python manage.py runserver
```

---
## Improvements to be made
 - Check if address is located in a ServiceArea.
 - Add API to return ServiceAreas of specified companies.
 - Add User Authentication
 - Add Tests
 - Add Multiple ServiceAreas for a single company