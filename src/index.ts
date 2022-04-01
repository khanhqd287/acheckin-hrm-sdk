export interface UserPersonalInfo {
	id?: string,
}

export interface UserWorkspaceInfo {
	id?: string,
}
export interface DeviceInfo {
	device_id: string;
	device_name: string;
	device_platform: string;
	bundle_id: string;
	device_os_version: string;
	is_tablet: boolean;
	ip_address: string;
	battery_level: number;
	battery_changing: boolean;
	device_mac_address: string;
	device_manufacturer: string;
	device_brand: string;
	wifi_name: string;
	is_wifi: boolean;
	has_network: string;
	is_mobile_data: boolean;
}

export enum PICKER_TYPE {
	MONTH = 'MONTH',
	DATE = 'DATE',
	TIME = 'TIME',
	DATE_TIME = 'DATE_TIME',
}

export interface IUserWorkspace {
	id: string,
	username: string,
	fullname?: string,
	avatar?: string,
	[key: string]: any,
}

export interface IDEVICEINFO {
	IS_IPX: boolean,
	IS_IOS: boolean,
	IS_ANDROID: boolean,
	IS_IPAD: boolean,
	MODEL: string,
	HAS_NOTCH: boolean,
	WIDTH: number,
	HEIGHT: number,
	STATUSBAR_HEIGHT: number,
	BOTTOM_PADDING: number,
	UNIQUE_ID: string,
	NAVBAR_BOTTOM_HEIGHT: number,
}

export interface IConfigType {
	device_info: IDEVICEINFO,
	ws_access_token: string,
	ws_host: string,
	user_workspace: IUserWorkspace,
}

export interface IDatePickerProps {
	pickerType?: PICKER_TYPE,
	current?: Date,
	title?: string,
	confirmText?: string,
	locale?: 'vi' | 'en',
	minuteInterval?: 1 | 15 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 20 | 30
}

export interface ICalendarPickerProps {
	isRangePicker?: boolean,
	currents?: string[], // YYYYMMDD
	title?: string,
	confirmText?: string,
}

interface ACheckinSDKOptions {
	title?: string;
	barStyle?: 'dark-content' | 'light-content';
}

export interface IRequestParams {
	url?: string,
	options?: any,
}

export interface IStaffInfo {
	id: string,
	avatar: string,
	name: string,
	email: string,
	user_workspaces?: IUserWorkspace,
}

export interface Location {
	latitude: number;
	longitude: number;
}

export interface IStaffPicker {
	max?: number,
	currents?: IStaffInfo[],
}

export interface IShowAlertOpt {
	title?: string,
	confirmText?: string,
	onConfirm?(): void,
	cancelText?: string,
	onCancel?(): void,
	message?: string,
	icon?: 'warning' | 'success',
}

export interface IPhotoType {
	uri: string,
	width: number,
	height: number,
	fileSize: number,
	type?: string,
	fileName?: string,
}

export interface ITakePhotoRes {
	data: IPhotoType[],
}


export interface ICheckinAppliance {
	id: string;
    type: any;
	time: string;
}

class ACheckinSDK {
	static sdk_ready = false;

	static init(options: ACheckinSDKOptions = {}) {
		if (typeof window.ACheckin.handleSDK !== "function") {
			throw new Error("Bạn phải sử dụng sdk trong ứng dụng ACheckin HRM");
		}

		ACheckinSDK.sdk_ready = true;

		window.ACheckin.handleSDK("init", {
			title: options.title || null,
			barStyle: options.barStyle || 'dark-content',
		}).catch();
	}

	static validInitSDK() {
		if (!ACheckinSDK.sdk_ready) {
			throw new Error("SDK chưa được khởi tạo, vui lòng gọi init()");
		}
	}

	static getInitConfig(): Promise<IConfigType> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getInitConfig");
	}

	static setItem(key: string, value: string): Promise<boolean> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("setItem", {
			key,
			value
		});
	}

	static getItem(key: string): Promise<string> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getItem", {
			key
		});
	}

	static getDeviceInfo(fields: Array<keyof DeviceInfo>): Promise<DeviceInfo> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getDeviceInfo", {
			fields
		});
	}

	static readBarCode(): Promise<string> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("readBarCode");
	}

	static getCurrentLocation(): Promise<Location> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getCurrentLocation");
	}

	static openDatePicker(fields: IDatePickerProps): Promise<{ value: String }> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("openDatePicker", { ...fields });
	}

	static openCalendarPicker(fields: ICalendarPickerProps): Promise<{ dates: string[] }> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("openCalendarPicker", { ...fields });
	}

	static openStaffsPicker(fields: IStaffPicker): Promise<IStaffInfo[]> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("openStaffsPicker", { ...fields });
	}

	static requestAPI(fields): Promise<{ data: any }> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("requestAPI", fields);
	}

	static setLocalNotification(options: {
		title: string;
		body: string;
		schedule_time?: number;
	}) {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("setLocalNotification", {
			title: options.title,
			body: options.body,
			...(options.schedule_time && { schedule_time: options.schedule_time })
		});
	}

	static vibrate(): Promise<boolean> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("vibrate");
	}

	static openUrl(url: string): Promise<string> {
		return window.ACheckin.handleSDK("openUrl", {
			url
		});
	}

	static copyString(data: any) {
		return window.ACheckin.handleSDK("copyString", data)
	}

	static showAlert(fields: IShowAlertOpt) {
		return window.ACheckin.handleSDK("showAlert", fields)
	}

	static takePhoto(): Promise<ITakePhotoRes> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("takePhoto", {});
	}

	static takePhotoUrl(): Promise<string> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("takePhotoUrl", {});
	}

	static checkinAppliance(fields: ICheckinAppliance): Promise<any> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("checkinAppliance", fields);
	}

	static getInitPage(): Promise<any> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getInitPage", {});
	}

	static addShakeEventListener(callback: () => void): () => void {
		const listenerFn = () => {
			callback();
		};

		window.addEventListener("ACheckin.ShakeEvent", listenerFn);

		return () => {
			window.removeEventListener("ACheckin.ShakeEvent", listenerFn);
		};
	}

	static getAccessToken() {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getAccessToken");
	}

	static getUserPersonalInfo(): Promise<UserPersonalInfo> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getUserPersonalInfo");
	}

	static getUserWorkspaceInfo(): Promise<UserWorkspaceInfo> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getUserWorkspaceInfo");
	}

	static isCheckedIn(): Promise<boolean> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("isCheckedIn");
	}

	static shareScreen(message: string) {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("shareScreen", {
			message: message
		});
	}

}

export { ACheckinSDK };
