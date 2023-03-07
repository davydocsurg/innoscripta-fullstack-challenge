#!/bin/sh

cd /var/www/html
php artisan optimize:clear
php artisan migrate
php artisan passport:install --force
php artisan serve --host=0.0.0.0 --port=8000
