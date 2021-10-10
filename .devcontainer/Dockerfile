# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.187.0/containers/python-3/.devcontainer/base.Dockerfile

# Aqui indicamos la imagen que vamos a tomar en este caso viene del devcontainer que tomamos de ejemplo en los pasos anteriores
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

# Aqui instalamos nuestra version de nodejs
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi
# Aqui instalamos los paquetes necesarios del Sistema Operativo para asi poder trabajar como si estuviese en un servidor convensional
RUN apt-get update \
  && apt-get -y install --no-install-recommends \
  curl \
  git-core \
  gnupg \
  locales \
  zsh \
  wget \
  tree \
  jq \
  ca-certificates \
  apt-transport-https \
  lsb-release \
  azure-cli

# Aqui vamos a copiar el archivo requirements.txt a una carpeta temporal para luego instalar las dependencias
COPY requirements.txt /tmp/pip-tmp/
# Aqui instalaremos las dependencias listadas en nuestro archivo requirements.txt
RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt && rm -rf /tmp/pip-tmp

#Aqui vamos a decirle a nuestro docker que el directorio principal va a ser nuestro /home/vscode
WORKDIR /home/vscode
# Aqui vamos a instalar Pulumi
RUN if [ "$PULUMI_VERSION" = "latest" ]; then \
  curl -fsSL https://get.pulumi.com/ | bash; \
  else \
  curl -fsSL https://get.pulumi.com/ | bash -s -- --version $(echo $PULUMI_VERSION | cut -c 2-); \
  fi && \
  mv ~/.pulumi/bin/* /usr/bin

# Aqui vamos a instalar yarn y azure las cuales usaremos mas adelante
RUN yarn global add \ 
  azure-functions-core-tools@3 --unsafe-perm true