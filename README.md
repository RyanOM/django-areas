# django-areas
GMaps API testdrive powered by Django

Create a MySQL Database

Next, open mysql using the root account


$ mysql -u root -p
Enter password:

Now that we are inside the mysql console with root privileges, we will create a database, a user, and grant all privileges to that user:


CREATE DATABASE djareas_db;
CREATE USER 'djareas'@'localhost' IDENTIFIED BY 'djareas_pw';
GRANT ALL PRIVILEGES ON djareas_db.* TO 'djareas'@'localhost';
FLUSH PRIVILEGES;
quit


