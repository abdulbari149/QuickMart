import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  static async get<
    TValue extends object | string | number | boolean | symbol | null,
    TDefaultValue extends TValue | undefined = undefined,
    TResponse = TDefaultValue extends undefined ? TValue | null : TValue,
  >(key: string, defaultValue?: TDefaultValue): Promise<TResponse> {
    const data = await AsyncStorage.getItem(key);
    if (data) {
      return JSON.parse(data) as TResponse;
    }
    if (defaultValue) return defaultValue as TResponse;
    return null as TResponse;
  }

  static set<TValue extends object | string | number | boolean | symbol>(
    key: string,
    value: TValue,
  ) {
    const itemValue: string = JSON.stringify(value);
    return AsyncStorage.setItem(key, itemValue);
  }

  static async delete(key: string) {
    await AsyncStorage.removeItem(key);
  }
}

export default Storage;
