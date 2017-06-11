/**
 * Created by rccoder on 11/06/2017.
 */
import DeviceInfo from 'react-native-device-info';

const device = {
  uniqueId: DeviceInfo.getUniqueID(),
  manufacturer: DeviceInfo.getManufacturer(),
  brand: DeviceInfo.getBrand(),
  model: DeviceInfo.getModel(),
  deviceId: DeviceInfo.getDeviceId(),
  systemName: DeviceInfo.getSystemName(),
  systemVersion: DeviceInfo.getSystemVersion(),
  version: DeviceInfo.getVersion(),
  deviceName: DeviceInfo.getDeviceName(),
  userAgent: DeviceInfo.getUserAgent(),
  local: DeviceInfo.getDeviceLocale(),
  isEmulator: DeviceInfo.isEmulator(),
};

export default device;
