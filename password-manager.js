/**
 * Password Generator and Organizer
 * Version 1.2.0
 */

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

  exportPasswordsToCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Account,Password\n";
    for (const account in this.passwords) {
      const password = this.passwords[account];
      const row = `${account},${password}\n`;
      csvContent += row;
    }

    const encodedURI = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedURI);
    link.setAttribute("download", "passwords.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

const passwordManager = new PasswordGeneratorOrganizer();
