import AsyncStorage from "@react-native-async-storage/async-storage";

const KEYS = {
  USER: "nectar_user",
  CART: "nectar_cart",
  ORDERS: "nectar_orders",
  FAVS: "nectar_favs",
  LOGIN_TIME: "nectar_login_time",
};

// ─── AUTH ───────────────────────────────────────
export const saveUser = async (user) => {
  try {
    await AsyncStorage.setItem(KEYS.USER, JSON.stringify(user));
    await AsyncStorage.setItem(KEYS.LOGIN_TIME, Date.now().toString());
  } catch (e) {
    console.error("saveUser error:", e);
  }
};

export const getUser = async () => {
  try {
    const raw = await AsyncStorage.getItem(KEYS.USER);
    if (!raw) return null;

    // Tự động hết hạn sau 7 ngày
    const loginTime = await AsyncStorage.getItem(KEYS.LOGIN_TIME);
    if (loginTime) {
      const diff = Date.now() - parseInt(loginTime);
      const days = diff / (1000 * 60 * 60 * 24);
      if (days > 7) {
        await clearAll();
        return null;
      }
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error("getUser error:", e);
    return null;
  }
};

export const clearUser = async () => {
  try {
    await AsyncStorage.multiRemove([KEYS.USER, KEYS.LOGIN_TIME]);
  } catch (e) {
    console.error("clearUser error:", e);
  }
};

// ─── CART ────────────────────────────────────────
export const saveCart = async (cart) => {
  try {
    await AsyncStorage.setItem(KEYS.CART, JSON.stringify(cart));
  } catch (e) {
    console.error("saveCart error:", e);
  }
};

export const getCart = async () => {
  try {
    const raw = await AsyncStorage.getItem(KEYS.CART);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("getCart error:", e);
    return [];
  }
};

export const clearCart = async () => {
  try {
    await AsyncStorage.removeItem(KEYS.CART);
  } catch (e) {
    console.error("clearCart error:", e);
  }
};

// ─── ORDERS ──────────────────────────────────────
export const saveOrder = async (cart, total) => {
  try {
    const existing = await getOrders();
    const newOrder = {
      id: Date.now().toString(),
      items: cart,
      total: total,
      date: new Date().toLocaleString("vi-VN"),
      status: "Đã đặt hàng",
    };
    const updated = [newOrder, ...existing];
    await AsyncStorage.setItem(KEYS.ORDERS, JSON.stringify(updated));
    return newOrder;
  } catch (e) {
    console.error("saveOrder error:", e);
  }
};

export const getOrders = async () => {
  try {
    const raw = await AsyncStorage.getItem(KEYS.ORDERS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("getOrders error:", e);
    return [];
  }
};

export const clearOrders = async () => {
  try {
    await AsyncStorage.removeItem(KEYS.ORDERS);
  } catch (e) {
    console.error("clearOrders error:", e);
  }
};

// ─── FAVS ────────────────────────────────────────
export const saveFavs = async (favs) => {
  try {
    await AsyncStorage.setItem(KEYS.FAVS, JSON.stringify(favs));
  } catch (e) {
    console.error("saveFavs error:", e);
  }
};

export const getFavs = async () => {
  try {
    const raw = await AsyncStorage.getItem(KEYS.FAVS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("getFavs error:", e);
    return [];
  }
};

export const clearFavs = async () => {
  try {
    await AsyncStorage.removeItem(KEYS.FAVS);
  } catch (e) {
    console.error("clearFavs error:", e);
  }
};

// ─── CLEAR ALL ───────────────────────────────────
export const clearAll = async () => {
  try {
    await AsyncStorage.multiRemove([
      KEYS.USER,
      KEYS.CART,
      KEYS.ORDERS,
      KEYS.FAVS,
      KEYS.LOGIN_TIME,
    ]);
  } catch (e) {
    console.error("clearAll error:", e);
  }
};