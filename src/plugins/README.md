## Plugins

The way plugins are added is not great. Basically we are using the 
project's __.gitignore__ file to ignore the **/src/plugins** 
directory in order to clone the plugin repo into the correct place

This'll get reimplemented as NPM/Github packages in due course

> [AnimatedSVG](./AnimatedSVG)

> [PushToTalk](./PushToTalk)

#### Install

```bash
# Close the repo
cd <your-whitelabel-pwa>
cd ./src/plugins/
git clone https://github.com/listingslab-software/animated-svg AnimatedSVG
git clone https://github.com/listingslab-software/plugin-pushtotalk PushToTalk
cd <your-whitelabel-pwa>

# add deps
yarn add gsap 

# Then periodically check for updates ....
git fetch && git pull

```
