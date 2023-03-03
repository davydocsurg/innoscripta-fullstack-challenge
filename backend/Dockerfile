# Set the base image to the official PHP 8.0 image
FROM php:8.0-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# create a new user to run the application
RUN groupadd -g 1000 innoscripta-tester && useradd -u 1000 -g innoscripta-tester -m innoscripta-tester

# Change current user to innoscripta-tester
USER innoscripta-tester

# Set the working directory to /var/www
WORKDIR /var/www

# Install required PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy the Laravel application files to the container
COPY . /var/www

# Install application dependencies with Composer
RUN composer install --no-scripts --no-autoloader --no-dev && composer clear-cache

# # Set permissions for storage and bootstrap/cache directories
# RUN chgrp -R www-data storage bootstrap/cache
# RUN chmod -R ug+rwx storage bootstrap/cache

# Change ownership of the application directory to innoscripta-tester user
RUN chown -R innoscripta-tester:innoscripta-tester /var/www

# Expose port 8000 for PHP-FPM
EXPOSE 8000

# Start the PHP-FPM server
CMD ["php-fpm"]
