import { Alert } from 'react-native';
import NavigationService from 'app/navigation/NavigationService';

// handle async/await actions
export const effects = {

	async authLogin({username, password}) {
		const response = { success: true, data: { id: 1 } };
		
		if (response.success) {
			this.setLoader(false);
			NavigationService.navigate('Home');
		} else {
			this.setLoader(false);

			setTimeout(() => {
				Alert.alert('BoilerPlate', response.Message);
			}, 200);
		}
	},

};
