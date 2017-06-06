FROM node

MAINTAINER Benjamin BORT

RUN apt-get update

# Set working directory in the container
WORKDIR "/project"

EXPOSE 3000:3000

CMD ["npm", "install"]

CMD ["npm", "start"]
