alert("Alert!");
getKaiAd({
	publisher: '9c6cc6a7-68c0-4f9d-a31c-36ca94bae25a',
	app: 'ads',
	slot: 'adsslot',
	onerror: err => console.error('Custom catch:', err),
	onready: ad => {
		// Ad is ready to be displayed
		// calling 'display' will display the ad
		ad.call('display')
	}
})
