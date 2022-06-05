## Commands: 
1. **$ npm start** : Start the server and serve the files from /src with hot reload enabled. Best for local development.
2. **$ npm run build** : Build the production ready, minified, compressed folder /build, ready to be served via custom/static server setup. Best for prod deployment. 
3. **$ npm i serve -g** : Install a ready to serve server
4. **$ serve -s build**  : Serve the build folder. By default, the production build runs at port 5000. But the port number is configurable: serve -s build -l \<port number>

production related points:
1->>2
1->>3
1->(/2,/2, /3)loadbalancer->(2(ip1),2(ip2),3)
monitoring system
kubernetes(tool) based deployed
kubernetes-> 


