import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useStorage(key, defaultValue = null) {
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const raw = await AsyncStorage.getItem(key);
        if (raw !== null) {
          setValue(JSON.parse(raw));
        }
      } catch (e) {
        console.error("useStorage load error:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [key]);

  const store = async (newValue) => {
    try {
      setValue(newValue);
      await AsyncStorage.setItem(key, JSON.stringify(newValue));
    } catch (e) {
      console.error("useStorage store error:", e);
    }
  };

  const remove = async () => {
    try {
      setValue(defaultValue);
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error("useStorage remove error:", e);
    }
  };

  return { value, loading, store, remove };
}