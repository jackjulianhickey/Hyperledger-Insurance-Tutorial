# risk-analysis-tutorial
The full tutorial for this application can be found here: https://medium.com/@jackjulianhickey/build-a-insurance-application-with-hyperledger-composer-and-react-js-part-1-3ebe7ad54986?postPublishedType=repub

## running the application
After cloning the application and installing Hyperledger Composer and its requirements run the following commands to get it started.

Start up the fabric development environment
```
cd ~/fabric-dev-servers
./startFabric.sh
./createPeerAdminCard.sh
```
Next create the business network archieve file
```
composer archive create -t dir -n .
```
Install the composer business network on the Hyperledger Fabric peers
```
composer network install --card PeerAdmin@hlfv1 --archiveFile risk-analysis-tutorial@0.0.1.bna
```
Start the business network
 ```
composer network start --networkName risk-analysis-tutorial --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
```
Import the network admins card
```
composer card import --file networkadmin.card
```
Run the REST server
```
composer-rest-server -c admin@risk-analysis-tutorial -n never -u true -w true
```
The rest server can be explored at http://localhost:3000/explorer
