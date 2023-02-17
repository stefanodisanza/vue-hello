const { createApp } = Vue
console.log(Vue)
// const createApp = Vue.createApp

const option = {
	data() {
		return {
			message: 'Antanigo!',		
            imageSrc: 'https://picsum.photos/200/300'	
		}
	},
}

const app = createApp(option)
console.log(app)

app.mount('#app')
