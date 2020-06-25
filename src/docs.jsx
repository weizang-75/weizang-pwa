
const docs = [
	{
		id: `listingslab-0000-1111122222333333`,
		data: {
			title: `Home`,
			label: `What are Progressive Web Apps?`,
			subheader: `Find out about Whitelabel PWA™`,
			// avatar: `/svg/avatars/listingslab.svg`,
			media: `/png/content/pwa.png`,
			body: `Progressive Web Apps are user experiences that have the reach of the web, and are:
			- Reliable
			- Fast
			- Respond quickly to user interactions with silky smooth animations and no janky scrolling
			- Engaging
			- Feel like a natural app on the device, with an immersive user experience
			This new level of quality allows Progressive Web Apps to earn a place on the user's home screen.`,
			links: []
		}
	},
	{
		id: `listingslab-0000-x`,
		data: {
			title: `About`,
			label: `How does it work?`,
			subheader: `About Whitelabel PWA`,
			media: `/jpg/default.jpg`,
			body: `Nunc fermentum pharetra egestas. Fusce ac ante at eros tempor pulvinar. Fusce cursus sem ac turpis tincidunt, vel placerat mauris posuere. Duis convallis arcu at velit ornare placerat. Duis accumsan id justo sit amet tempus. Suspendisse luctus et libero quis euismod. In a luctus metus, placerat laoreet massa. Suspendisse in vulputate enim. Mauris et arcu lacus.`,
			links: []
		}
	}
]

export const getDocs = () => {
	return docs
}

export const getDocById = id => {
	let doc = {
		title: `No content found`,
     	subheader: `Try searching?`,
      	avatar: `/logo192.png`,
     	links: [],
	}
	if (!id) return doc
	for (let i=0; i<docs.length; i++){
		if (id === docs[i].id) {
			doc = docs[i].data
		}
	}
	return doc
}

/*
				{
					url:`/next`,
					label: `Next`,
					title: `Next`,
					target: `_self`,
					icon: `next`,
				},
*/