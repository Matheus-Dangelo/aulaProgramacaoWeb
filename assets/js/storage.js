// =====================================================
// Simulação de Banco de Dados com localStorage
// =====================================================

export const Storage = {
  // Salva dados no localStorage
  save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  // Lê dados do localStorage
  load(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  },

  // Adiciona novo registro em uma coleção existente
  add(key, item) {
    const data = this.load(key);
    data.push(item);
    this.save(key, data);
  },

  // Remove todos os dados (útil em testes)
  clear(key) {
    localStorage.removeItem(key);
  }
};
