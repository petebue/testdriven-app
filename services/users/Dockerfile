FROM python:3.7.2-slim


# Install deps
RUN apt-get update && \
    apt-get -y install netcat && \
    apt-get clean

# Change work dir
WORKDIR /usr/src/app

# Pip install requirements
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

# Add entrypoint.sh
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# Copy app to container.
COPY . /usr/src/app

# Start Flask
CMD ["/usr/src/app/entrypoint.sh"]
