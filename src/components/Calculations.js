export const calculateNetworkMask = (subnetMask) => {
    const binaryMask = '1'.repeat(subnetMask) + '0'.repeat(32 - subnetMask); // Преобразуем маску в бинарную строку
    const octets = [
      binaryMask.slice(0, 8),
      binaryMask.slice(8, 16),
      binaryMask.slice(16, 24),
      binaryMask.slice(24, 32)
    ].map(octet => parseInt(octet, 2)); // Разбиваем на октеты и преобразуем из бинарной системы в десятичную
    return octets.join('.'); // Возвращаем маску сети в виде строки
  };
  
  export const calculateInverseMask = (subnetMask) => {
    const networkMask = calculateNetworkMask(subnetMask).split('.').map(octet => 255 - parseInt(octet)); // Вычисляем инверсию маски сети
    return networkMask.join('.');
  };
  
  export const calculateNetworkAddress = (ip, subnetMask) => {
    const ipArray = ip.split('.').map(octet => parseInt(octet)); // Преобразуем IP-адрес в массив чисел
    const networkMask = calculateNetworkMask(subnetMask).split('.').map(octet => parseInt(octet)); // Получаем маску сети
    const networkAddress = ipArray.map((octet, index) => octet & networkMask[index]).join('.'); // Вычисляем адрес сети
    return networkAddress;
  };
  
  export const calculateBroadcastAddress = (ip, subnetMask) => {
    const networkAddress = calculateNetworkAddress(ip, subnetMask).split('.').map(octet => parseInt(octet)); // Получаем адрес сети
    const inverseMask = calculateInverseMask(subnetMask).split('.').map(octet => parseInt(octet)); // Получаем инверсию маски
    const broadcastAddress = networkAddress.map((octet, index) => octet | inverseMask[index]).join('.'); // Вычисляем широковещательный адрес
    return broadcastAddress;
  };
  
  export const calculateMinHost = (ip, subnetMask) => {
    const networkAddress = calculateNetworkAddress(ip, subnetMask).split('.').map(octet => parseInt(octet)); // Получаем адрес сети
    networkAddress[3] += 1; // Увеличиваем последний октет на 1
    return networkAddress.join('.');
  };
  
  export const calculateMaxHost = (ip, subnetMask) => {
    const broadcastAddress = calculateBroadcastAddress(ip, subnetMask).split('.').map(octet => parseInt(octet)); // Получаем широковещательный адрес
    broadcastAddress[3] -= 1; // Уменьшаем последний октет на 1
    return broadcastAddress.join('.');
  };
  
  export const calculateNumOfHosts = (subnetMask) => {
    return 2 ** (32 - subnetMask) - 2; // Вычисляем количество хостов
  };
  
  export const decimalToHex = (ipAddress) => {
    const decimalParts = ipAddress.split('.').map(part => parseInt(part)); // Разбиваем IP-адрес на части и преобразуем их в числа
  
    if (decimalParts.length !== 4 || decimalParts.some(part => isNaN(part) || part < 0 || part > 255)) {
      return 'Некорректный IP-адрес';
    }
  
    const hex = decimalParts.map(part => part.toString(16).padStart(2, '0')).join('.'); // Преобразуем каждую часть в 16-ричный вид
    return hex;
  }
  
  export const decimalToBinary = (ipAddress) => {
    const decimalParts = ipAddress.split('.').map(part => parseInt(part)); // Разбиваем IP-адрес на части и преобразуем их в числа
  
    if (decimalParts.length !== 4 || decimalParts.some(part => isNaN(part) || part < 0 || part > 255)) {
      return 'Некорректный IP-адрес';
    }
  
    const binary = decimalParts.map(part => part.toString(2).padStart(8, '0')).join('.'); // Преобразуем каждую часть в двоичный вид
    return binary;
  }