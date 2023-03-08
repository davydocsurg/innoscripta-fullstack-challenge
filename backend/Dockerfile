# Set the base image to the official PHP 8.0 image
FROM php:8.0-fpm

# Install required PHP extensions
RUN docker-php-ext-install pdo pdo_mysql mysqli

# Set the working directory to /var/www/html
WORKDIR /var/www/html


# Copy the current directory contents into the container at /var/www/html
COPY . .

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install application dependencies with Composer
RUN composer install

# Generate application key
RUN php artisan key:generate

# Set file permissions
RUN chown -R www-data:www-data storage bootstrap/cache

# set environment variables for mysql connection
# ENV DB_CONNECTION=${DB_CONNECTION}
# ENV DB_HOST=${DB_HOST}
# ENV DB_PORT=${DB_PORT}
# ENV DB_DATABASE=${DB_DATABASE}
# ENV DB_USERNAME=${DB_USERNAME}
# ENV DB_PASSWORD=${DB_PASSWORD}

## Run project ./exec.sh /tmp
COPY ./exec.sh /tmp
RUN chmod +x /tmp/exec.sh
ENTRYPOINT ["/tmp/exec.sh"]
EXPOSE 8000

