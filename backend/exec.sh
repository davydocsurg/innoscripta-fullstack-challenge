#!/bin/sh

cd /var/www
php artisan optimize:clear
php artisan migrate:fresh
php artisan passport:install --force
# php artisan serve --host=0.0.0.0 --port=8000
