class PasswordGeneratorOrganizer {
  constructor() {
    this.passwords = {};
  }

  async generatePassword(account, length = 12) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
    const hash = new TextEncoder().encode(account);
    const digestBuffer = await crypto.subtle.digest('SHA-256', hash);
    const digestArray = new Uint8Array(digestBuffer);
    let password = '';

    for (let i = 0; i < length; i++) {
      const index = digestArray[i % digestArray.length] % characters.length;
      password += characters[index];
    }

    return password;
  }

  addPassword(account, password = null, length = 12) {
    if (!password) {
      password = this.generatePassword(account, length);
    }

    this.passwords[account] = password;
    return password;
  }

  getPassword(account) {
    return this.passwords[account];
  }

  removePassword(account) {
    delete this.passwords[account];
  }

  listAccounts() {
    return Object.keys(this.passwords);
  }
}
