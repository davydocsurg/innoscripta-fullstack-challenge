# Set the base image to the official PHP 8.0 image
FROM php:8.0-fpm

# Install required PHP extensions
RUN docker-php-ext-install pdo_mysql

# Set the working directory to /var/www
WORKDIR /var/www

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy the Laravel application files to the container
COPY . /var/www

# Install application dependencies with Composer
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    && composer update\
    && composer install --no-dev --no-scripts --no-progress --prefer-dist --optimize-autoloader \
    && apt-get purge -y git \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Generate application key
RUN php artisan key:generate

# Set permissions for storage and bootstrap/cache directories
RUN chgrp -R www-data storage bootstrap/cache
RUN chmod -R ug+rwx storage bootstrap/cache

# Expose port 8000 for PHP-FPM
EXPOSE 8000

# Start the PHP-FPM server
CMD ["php-fpm"]
