'use strict'

var React = require('react-native');
var {
	View,
	Text,
	TextInput,
	Image,
	TouchableHighlight,
	NativeModules,
} = React;
var JMessageHelper = NativeModules.JMessageHelper;

var FillInfoActivity = React.createClass({

	getInitialState() {
		return {
			takePhotoPressed: false,
			nickname: '',
		}
	},

	takePhoto() {
		
	},

	finishClick() {
		JMessageHelper.finishFillInfo(this.state.nickname, () => {
			this.props.navigator.replace({name: 'mainActivity'});
		});
	},

	render() {
		return (
			<View style = { styles.container }>
				<View style = { styles.titlebar }>
					<Text style = { styles.title }>
						极光IM
					</Text>
				</View>
				<View style = { styles.content }>
					<View style = { styles.inputContainer }>
						<TextInput style = { styles.input }
							placeholder = { '输入您的昵称' }
							placeholderTextColor = { '#808080' }
							multilines = { true }
							onChangeText = { (text) => this.setState({nickname: text}) }/>
						<TouchableHighlight
							underlayColor = { '#808080' }
							onPress = { () => { this.setState({takePhotoPressed: true}); this.takePhoto }}>
							<View>
								<Image style = { styles.takePhotoBtn }
									source = { this.state.takePhotoPressed ? {uri: 'take_photo_fill_info_pre'} : {uri: 'take_photo_fill_info'}}/>
							</View>
						</TouchableHighlight>
					</View>
					<TouchableHighlight
						underlayColor = { '#b9ebb8'}
						style = { styles.finishBtn }
						onPress = { this.finishClick }>
						<Text style = { styles.btnText }>
							完成
						</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
});

var styles = React.StyleSheet.create({
	container: {
		flex: 1,
	},
	titlebar: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		backgroundColor: '#3f80dc',
	},
	title: {
		color: '#ffffff',
		fontSize: 24,
	},
	content: {
		marginLeft: 20,
		marginRight: 20,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		marginTop: 20,
	},
	input: {
		flex: 1,

	},
	takePhotoBtn: {
		width: 70,
		height: 70,
	},
	finishBtn: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 25,
		padding: 10,
		borderWidth: 1,
		borderColor: '#b9ebb8',
		borderRadius: 5,
		backgroundColor: '#b9ebb8',
	},
	btnText: {
		fontSize: 22,
		color: '#ffffff',
	}
});

module.exports = FillInfoActivity