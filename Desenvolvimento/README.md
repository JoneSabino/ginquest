## Passos para adquirir o ambiente

Instalar o Nodejs, o instalador ira colocar o npm no PATH, com isso é 
só executar o comando `npm i -g yarn`

e nos projetos webapp utilizar os comandos `yarn install` e `yarn start`

## Proxy Google Cloud CLI

### Setando Proxy(IFSP) para o Google Cloud CLI

gcloud config set proxy/type http
gcloud config set proxy/address 10.102.2.253
gcloud config set proxy/port 3128
gcloud config set proxy/username prontuario
gcloud config set proxy/password password

### Retirando Proxy(IFSP) para o Google Cloud CLI

gcloud config unset proxy/type
gcloud config unset proxy/address
gcloud config unset proxy/port
gcloud config unset proxy/username

## Proxy npm(funciona para o yarn)

### Setando proxy npm

npm config set proxy http://prontuario:password@10.102.2.253:3128
npm config set https-proxy http://prontuario:password@10.102.2.253:3128

### Retirando proxy

npm config unset proxy
npm config unset https-proxy