export interface UserPersonalInfo {
    id?: string;
}
export interface UserWorkspaceInfo {
    id?: string;
    name: string;
    is_owner: boolean;
    is_leader: boolean;
    picture?: string;
    current_workspace: string;
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
export declare enum PICKER_TYPE {
    MONTH = "MONTH",
    DATE = "DATE",
    TIME = "TIME",
    DATE_TIME = "DATE_TIME"
}
export interface IUserWorkspace {
    id: string;
    username: string;
    fullname?: string;
    avatar?: string;
    [key: string]: any;
}
export interface IDEVICEINFO {
    IS_IPX: boolean;
    IS_IOS: boolean;
    IS_ANDROID: boolean;
    IS_IPAD: boolean;
    MODEL: string;
    HAS_NOTCH: boolean;
    WIDTH: number;
    HEIGHT: number;
    STATUSBAR_HEIGHT: number;
    BOTTOM_PADDING: number;
    UNIQUE_ID: string;
    NAVBAR_BOTTOM_HEIGHT: number;
}
export interface IConfigType {
    device_info: IDEVICEINFO;
    ws_access_token: string;
    ws_host: string;
    user_workspace: IUserWorkspace;
}
export interface IDatePickerProps {
    pickerType?: PICKER_TYPE;
    current?: Date;
    title?: string;
    confirmText?: string;
    locale?: 'vi' | 'en';
    minuteInterval?: 1 | 15 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 20 | 30;
    maximumDate?: Date;
    minimumDate?: Date;
}
export interface ICalendarPickerProps {
    isRangePicker?: boolean;
    currents?: string[];
    title?: string;
    confirmText?: string;
}
interface ACheckinSDKOptions {
    title?: string;
    barStyle?: 'dark-content' | 'light-content';
}
export interface IRequestParams {
    url?: string;
    options?: any;
}
export interface IStaffInfo {
    id: string;
    avatar: string;
    name: string;
    email: string;
    user_workspaces?: IUserWorkspace;
}
export interface Location {
    latitude: number;
    longitude: number;
}
export interface IStaffPicker {
    max?: number;
    currents?: IStaffInfo[];
}
export interface IStaffOfLeader {
    id: string;
    name: string;
    picture?: string;
    email?: string;
}
export interface IStaffOfLeaderRes {
    total: number;
    data: IStaffOfLeader[];
}
export interface IShowAlertOpt {
    title?: string;
    confirmText?: string;
    onConfirm?(): void;
    cancelText?: string;
    onCancel?(): void;
    message?: string;
    icon?: 'warning' | 'success';
}
export interface IPhotoType {
    uri: string;
    width: number;
    height: number;
    fileSize: number;
    type?: string;
    fileName?: string;
}
export interface ITakePhotoRes {
    data: IPhotoType[];
}
export interface ICheckinAppliance {
    id: string;
    type: any;
    time: string;
}
export interface IGetStaffOfLeaderArgs {
    limit?: number;
    offset?: number;
}
declare class ACheckinSDK {
    static sdk_ready: boolean;
    static init(options?: ACheckinSDKOptions): void;
    static validInitSDK(): void;
    static getInitConfig(): Promise<IConfigType>;
    static setItem(key: string, value: string): Promise<boolean>;
    static getItem(key: string): Promise<string>;
    static getDeviceInfo(fields: Array<keyof DeviceInfo>): Promise<DeviceInfo>;
    static readBarCode(): Promise<string>;
    static getCurrentLocation(): Promise<Location>;
    static openDatePicker(fields: IDatePickerProps): Promise<{
        value: String;
    }>;
    static openCalendarPicker(fields: ICalendarPickerProps): Promise<{
        dates: string[];
    }>;
    static openStaffsPicker(fields: IStaffPicker): Promise<IStaffInfo[]>;
    static requestAPI(fields: any): Promise<{
        data: any;
    }>;
    static setLocalNotification(options: {
        title: string;
        body: string;
        schedule_time?: number;
    }): Promise<any>;
    static vibrate(): Promise<boolean>;
    static openUrl(url: string): Promise<string>;
    static copyString(data: any): Promise<any>;
    static showAlert(fields: IShowAlertOpt): Promise<any>;
    static takePhoto(): Promise<ITakePhotoRes>;
    static takePhotoUrl(): Promise<string>;
    static checkinAppliance(fields: ICheckinAppliance): Promise<any>;
    static getInitPage(): Promise<any>;
    static addShakeEventListener(callback: () => void): () => void;
    static getAccessToken(): Promise<any>;
    static getUserPersonalInfo(): Promise<UserPersonalInfo>;
    static getUserWorkspaceInfo(): Promise<UserWorkspaceInfo>;
    static isCheckedIn(): Promise<boolean>;
    static shareScreen(message: string): Promise<any>;
    static getStaffOfLeader(fields: IGetStaffOfLeaderArgs): Promise<IStaffOfLeaderRes>;
}
export { ACheckinSDK };
