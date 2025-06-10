import CryptoJS from 'crypto-js'  
  
// 固定密钥 - 在生产环境中应该使用更安全的密钥管理  
const ENCRYPTION_KEY = 'Swp48gO448#K6lsLZ3q@Gb44jwZP4!4KZX#vqH'  
  
/**  
 * 使用AES加密字符串  
 * @param text 要加密的字符串  
 * @returns 加密后的字符串  
 */  
export function encryptString(text: string): string {  
  try {  
    const encrypted = CryptoJS.AES.encrypt(text, ENCRYPTION_KEY).toString()  
    return encrypted  
  } catch (error) {  
    console.error('Encryption failed:', error)  
    throw new Error('Failed to encrypt string')  
  }  
}  
  
/**  
 * 使用AES解密字符串  
 * @param encryptedText 加密的字符串  
 * @returns 解密后的字符串  
 */  
export function decryptString(encryptedText: string): string {  
  try {  
    const decrypted = CryptoJS.AES.decrypt(encryptedText, ENCRYPTION_KEY)  
    const originalText = decrypted.toString(CryptoJS.enc.Utf8)  
      
    if (!originalText) {  
      throw new Error('Failed to decrypt - invalid key or corrupted data')  
    }  
      
    return originalText  
  } catch (error) {  
    console.error('Decryption failed:', error)  
    throw new Error('Failed to decrypt string')  
  }  
}  
  
/**  
 * 使用更强的加密方式（带盐值）  
 * @param text 要加密的字符串  
 * @param password 密码  
 * @returns 加密后的字符串  
 */  
export function encryptWithSalt(text: string, password: string = ENCRYPTION_KEY): string {  
  const salt = CryptoJS.lib.WordArray.random(128/8)  
  const key = CryptoJS.PBKDF2(password, salt, {  
    keySize: 256/32,  
    iterations: 1000  
  })  
    
  const iv = CryptoJS.lib.WordArray.random(128/8)  
  const encrypted = CryptoJS.AES.encrypt(text, key, {   
    iv: iv,  
    padding: CryptoJS.pad.Pkcs7,  
    mode: CryptoJS.mode.CBC  
  })  
    
  // 将盐值、IV和加密数据组合  
  const result = salt.toString() + iv.toString() + encrypted.toString()  
  return result  
}  
  
/**  
 * 解密带盐值的加密字符串  
 * @param encryptedText 加密的字符串  
 * @param password 密码  
 * @returns 解密后的字符串  
 */  
export function decryptWithSalt(encryptedText: string, password: string = ENCRYPTION_KEY): string {  
  // 提取盐值、IV和加密数据  
  const salt = CryptoJS.enc.Hex.parse(encryptedText.substr(0, 32))  
  const iv = CryptoJS.enc.Hex.parse(encryptedText.substr(32, 32))  
  const encrypted = encryptedText.substring(64)  
    
  const key = CryptoJS.PBKDF2(password, salt, {  
    keySize: 256/32,  
    iterations: 1000  
  })  
    
  const decrypted = CryptoJS.AES.decrypt(encrypted, key, {   
    iv: iv,  
    padding: CryptoJS.pad.Pkcs7,  
    mode: CryptoJS.mode.CBC  
  })  
    
  return decrypted.toString(CryptoJS.enc.Utf8)  
}