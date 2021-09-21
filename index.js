module.exports = {
  /**
   * Suma de dos números
   * @example
   * n1 = 1 , n2 = 3 => resultado 4
   * @param {*} n1 Número de uno de la suma
   * @param {*} n2 Número de dos de la suma 
   * @returns 
   */
  suma: function (n1, n2) {
    return (this.esNumero(n1, n2) ? n1 + n2 : this.mensajeError());
  },

    /**
   * Resta de dos números
   * @example
   * n1 = 1 , n2 = 3 => resultado -2
   * @param {*} n1 Número de uno de la resta
   * @param {*} n2 Número de dos de la resta 
   * @returns 
   */
  resta: function (n1, n2) {
    return (this.esNumero(n1 , n2) ? n1 - n2: this.mensajeError());
  },

    /**
   * Multiplicación de dos números
   * @example
   * n1 = 1 , n2 = 3 => resultado 3
   * @param {*} n1 Número de uno de la multiplicación
   * @param {*} n2 Número de dos de la multiplicación 
   * @returns 
   */
  multiplicacion: function (n1, n2) {
    return (this.esNumero(n1, n2) ? n1 * n2: this.mensajeError());
  },

    /**
   * División de dos números
   * @example
   * n1 = 1 , n2 = 3 => resultado 0.33
   * @param {*} n1 Número de uno de la División
   * @param {*} n2 Número de dos de la División 
   * @returns 
   */
  division: function (n1, n2) {
    return (this.esNumero(n1 , n2) ? n1 / n2: this.mensajeError());
  },
  /**
   * Mensaje de error que se ejecuta cuando no tengamos valores númericos
   */
  mensajeError: () => {
    console.log('Un valor o los dos valores no son númericos');
  },
   /**
   * Comprueba que son valores númericos
   */
  esNumero:  (n1, n2) => {
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
      return false;
    }
    return true;
  }
}